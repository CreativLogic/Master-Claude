#!/usr/bin/env bash
# Check off a day in PROGRESS.md. Usage: ./scripts/mark-done.sh <day_num>
set -euo pipefail
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PROGRESS="$REPO_ROOT/PROGRESS.md"
DAY="${1:-}"
if [ -z "$DAY" ]; then
  echo "Usage: $0 <day_number>"
  exit 1
fi
# sed in-place. Match "- [ ] **Day N** — " and replace with "- [x] **Day N** — "
if sed -i.bak -E "s/^- \[ \] \*\*Day $DAY\*\*/- [x] **Day $DAY**/" "$PROGRESS"; then
  rm -f "$PROGRESS.bak"
  echo "✅  Day $DAY marked done."
else
  echo "Could not mark Day $DAY. Is that a valid day number?"
  exit 1
fi
