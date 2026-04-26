// Skool CLI - browser-side API wrapper
// Usage: paste into a Skool tab's DevTools console, or load via Chrome MCP javascript_exec.
// All functions assume you are logged in (uses session cookies).
//
// const sk = window.skool;
// await sk.listCourseChildren('<course-slug>');
// await sk.update('<unit-id>', { title: 'New title' });
// await sk.createFolder('<course-id>', 'My folder');
// await sk.createPage('<folder-id>', 'My page', 'Hello world');
// await sk.remove('<unit-id>');
// await sk.pushCourse(courseSlug, localPlan);

(() => {
  const API = 'https://api2.skool.com';

  async function req(path, opts = {}) {
    const r = await fetch(API + path, {
      credentials: 'include',
      headers: { 'content-type': 'application/json' },
      ...opts,
    });
    const text = await r.text();
    if (!r.ok) throw new Error(`${opts.method || 'GET'} ${path} -> ${r.status}: ${text.substring(0, 200)}`);
    try { return text ? JSON.parse(text) : null; } catch { return text; }
  }

  // --- Page-context helpers (need to be on a /group/classroom/[course] page) ---
  function nextData() {
    const d = window.__NEXT_DATA__?.props?.pageProps;
    if (!d) throw new Error('Not on a Skool classroom page - __NEXT_DATA__ missing');
    return d;
  }

  // Walk the course tree (recursive .children) and flatten all units with their IDs + titles
  function flattenTree() {
    const pp = nextData();
    const course = pp.course;
    const rootId = pp.course?.course?.id;
    const groupId = pp.self?.allGroups?.find(g => g.id === pp.course?.course?.groupId)?.id || pp.course?.course?.groupId;
    const userId = pp.self?.id;
    const out = [];
    function walk(node, depth = 0, parentId = null) {
      if (!node) return;
      const unit = node.course || node;
      if (unit?.id) {
        out.push({
          id: unit.id,
          name: unit.name,
          title: unit.metadata?.title || '',
          unitType: unit.unitType,
          parentId: unit.parentId,
          rootId: unit.rootId,
          depth,
        });
      }
      const kids = node.children || [];
      for (const k of kids) walk(k, depth + 1, unit?.id);
    }
    walk(course, 0);
    return { rootId, groupId, userId, units: out };
  }

  // --- Low-level CRUD ---
  async function update(id, patch) {
    return req(`/courses/${id}`, { method: 'PUT', body: JSON.stringify(patch) });
  }

  async function remove(id) {
    return req(`/courses/${id}`, { method: 'DELETE' });
  }

  // Skool uses two unit types:
  // - "set"    — folders (render with an expand chevron in the sidebar)
  // - "module" — pages inside folders (leaf content with title + desc)
  // PUT /courses/{id} cannot change unit_type after creation — get it right on POST.
  async function create({ parent_id, title, resources = '[]', desc = null, state = 2, unit_type = 'module' }) {
    const { rootId, groupId, userId } = flattenTree();
    const metadata = unit_type === 'set' ? { title } : { title, resources };
    if (desc != null) metadata.desc = desc;
    return req('/courses', {
      method: 'POST',
      body: JSON.stringify({
        group_id: groupId,
        user_id: userId,
        parent_id,
        root_id: rootId,
        unit_type,
        state,
        metadata,
      }),
    });
  }

  async function createFolder(title) {
    const { rootId } = flattenTree();
    return create({ parent_id: rootId, title, unit_type: 'set' });
  }

  async function createPage(folderId, title, desc = '') {
    const descTiptap = mdToDesc(desc);
    return create({ parent_id: folderId, title, desc: descTiptap, unit_type: 'module' });
  }

  // --- Markdown → Tiptap v2 desc converter ---
  // Skool's editor stores text as: "[v2]" + JSON.stringify([node,...])
  // Plain markdown is rendered verbatim (## stays as "## ..."), but we preserve
  // basic structure: paragraphs separated by blank lines, bold via **, italics via *.
  // For our use case (course guides), we pass paragraphs through and bold ** ... **.
  function mdToDesc(md) {
    if (!md) return '[v2]' + JSON.stringify([{ type: 'paragraph' }]);
    // Split on blank lines
    const blocks = md.split(/\n\s*\n/);
    const nodes = blocks.map(block => {
      const trimmed = block.replace(/\n/g, ' ').trim();
      if (!trimmed) return { type: 'paragraph' };
      return { type: 'paragraph', content: parseInline(trimmed) };
    });
    return '[v2]' + JSON.stringify(nodes);
  }

  // Wrap a URL into a Tiptap link mark. Skool's renderer preserves the href/target/rel shape.
  function linkMark(href) {
    return { type: 'link', attrs: { class: null, href, rel: 'noopener noreferrer nofollow', target: '_blank' } };
  }

  // Normalize a URL-ish string into a valid href. Accepts "https://…", "http://…", or a bare
  // domain like "claude.ai" or "github.com/Samin12" — prefixes https:// in the latter case.
  function normalizeHref(raw) {
    const s = raw.trim();
    if (/^https?:\/\//i.test(s)) return s;
    return 'https://' + s;
  }

  // Inline parser. Handles (in this order, so the outer wins):
  //   [text](url)        — markdown link → link mark with visible `text`
  //   **bold**           — bold mark
  //   `code`             — code mark
  //   https://…          — bare absolute URL → auto-linked
  //   (foo.com/bar)      — bare "domain/…" in parens (common in the plans) → auto-linked
  //   domain.tld[/…]     — bare domain outside parens, conservative TLD list
  //
  // Anything else passes through as plain text.
  function parseInline(text) {
    const out = [];
    const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`|\bhttps?:\/\/[^\s)<>\]]+|\b(?:[a-z0-9-]+\.)+(?:com|org|net|io|dev|ai|app|co|md|markets|xyz|me)(?:\/[^\s)<>\]]*)?/gi;
    // Trailing punctuation we don't want inside auto-linked URLs.
    const TRIM = /[.,!?;:)\]\}]+$/;
    let last = 0;
    let m;
    while ((m = re.exec(text)) !== null) {
      if (m.index > last) out.push({ type: 'text', text: text.slice(last, m.index) });
      const tok = m[0];
      if (m[1] != null && m[2] != null) {
        // markdown link [text](url) — respect the author's exact URL, no trimming
        out.push({ type: 'text', marks: [linkMark(normalizeHref(m[2]))], text: m[1] });
        last = m.index + tok.length;
      } else if (m[3] != null) {
        out.push({ type: 'text', marks: [{ type: 'bold' }], text: m[3] });
        last = m.index + tok.length;
      } else if (m[4] != null) {
        out.push({ type: 'text', marks: [{ type: 'code' }], text: m[4] });
        last = m.index + tok.length;
      } else {
        // Auto-link — strip trailing punctuation so "see stripe.com." links to stripe.com, not "stripe.com.".
        const trimMatch = tok.match(TRIM);
        const trail = trimMatch ? trimMatch[0] : '';
        const urlText = trail ? tok.slice(0, -trail.length) : tok;
        out.push({ type: 'text', marks: [linkMark(normalizeHref(urlText))], text: urlText });
        if (trail) out.push({ type: 'text', text: trail });
        last = m.index + tok.length;
      }
    }
    if (last < text.length) out.push({ type: 'text', text: text.slice(last) });
    return out.length ? out : [{ type: 'text', text }];
  }

  // --- High-level helpers ---
  async function getRootChildren() {
    return flattenTree().units.filter(u => u.depth === 1);
  }

  async function renameFolder(id, newTitle) {
    return update(id, { title: newTitle });
  }

  async function updatePageContent(id, markdown, newTitle = null) {
    const patch = { desc: mdToDesc(markdown) };
    if (newTitle) patch.title = newTitle;
    return update(id, patch);
  }

  // pushDay: handles one day's folder + Written Guide + Resources in order.
  // plan = { folderTitle, writtenGuideTitle, resourcesTitle, writtenGuideMd, resourcesMd }
  // existingFolderId: if set, renames that folder; otherwise creates a new one at root.
  async function pushDay(plan, existingFolderId = null) {
    let folderId = existingFolderId;
    if (folderId) {
      await update(folderId, { title: plan.folderTitle });
    } else {
      const r = await create({ parent_id: flattenTree().rootId, title: plan.folderTitle });
      folderId = r.id;
    }
    const wg = await createPage(folderId, plan.writtenGuideTitle, plan.writtenGuideMd);
    const res = await createPage(folderId, plan.resourcesTitle, plan.resourcesMd);
    return { folderId, wgId: wg.id, resId: res.id };
  }

  window.skool = {
    API,
    req, update, create, remove,
    flattenTree, getRootChildren, nextData,
    createFolder, createPage, renameFolder, updatePageContent, pushDay,
    mdToDesc, parseInline,
  };

  console.log('skool CLI loaded. Use window.skool.*');
})();
