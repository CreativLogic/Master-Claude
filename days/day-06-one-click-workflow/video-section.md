# Day 6 — Turn Any Workflow Into a One-Click Button

**Video slice:** `00:39:00` → `00:45:01`  
_(source: `transcripts /full transcript.md`)_

---

## Transcript

**[00:39:02,940 → 00:39:05,580]**
If you head over to Customize right here,

**[00:39:05,790 → 00:39:08,130]**
and right here you see where it's a skill,

**[00:39:08,310 → 00:39:10,440]**
Claude actually comes pre-built with

**[00:39:10,460 → 00:39:12,020]**
a couple different skills. So

**[00:39:12,040 → 00:39:13,950]**
the first one is the skill creator.

**[00:39:13,970 → 00:39:16,110]**
And you can see in the skill creator,

**[00:39:16,130 → 00:39:18,150]**
it is basically a text file.

**[00:39:18,170 → 00:39:20,460]**
And you can see there's also like some code in

**[00:39:20,480 → 00:39:24,540]**
it, and you don't have to understand what
any of this does, because the skill is a

**[00:39:24,560 → 00:39:27,180]**
package of instructions. It's telling.

**[00:39:27,310 → 00:39:30,310]**
to use these Python files, this code,

**[00:39:30,330 → 00:39:32,980]**
so we can get consistent deterministic.

**[00:39:33,130 → 00:39:35,840]**
Alright. And that's what a skill is.

**[00:39:35,860 → 00:39:37,450]**
It's a written down process.

**[00:39:37,470 → 00:39:40,050]**
It's literally like a recipe. like this one.

**[00:39:40,070 → 00:39:42,020]**
A markdown file is a recipe card.

**[00:39:42,040 → 00:39:44,570]**
The steps, the orders, all the measurements.

**[00:39:44,590 → 00:39:46,370]**
Imagine like a kitchen.

**[00:39:46,390 → 00:39:48,970]**
you can also reference different tools and

**[00:39:48,990 → 00:39:51,290]**
whatnot, so the connectors we just used,

**[00:39:51,310 → 00:39:53,900]**
right? Okay. So hopefully

**[00:39:53,920 → 00:39:55,890]**
that makes sense on what a skill is.

**[00:39:56,030 → 00:39:58,340]**
Now, let's think about what we kind

**[00:39:58,360 → 00:40:00,410]**
of did and break it down into skill.

**[00:40:00,800 → 00:40:03,350]**
And the way we need to do that is first

**[00:40:03,600 → 00:40:05,970]**
go back to our GCPS process.

**[00:40:06,330 → 00:40:09,370]**
So first of all, to make this output,

**[00:40:09,390 → 00:40:12,170]**
what we need to do is make sure we connect it

**[00:40:12,190 → 00:40:14,940]**
drive, hubspot, post hoc. All these, right.

**[00:40:15,660 → 00:40:19,680]**
Those are kind of the ingredients where
Claude is gonna be pulling from. We need to

**[00:40:19,700 → 00:40:23,940]**
tell it to do that each time, because there's
gonna be new reports, and keep updating,

**[00:40:23,960 → 00:40:26,460]**
rather than having old stale data.

**[00:40:26,580 → 00:40:28,520]**
Okay, and what we did is

**[00:40:28,540 → 00:40:30,280]**
then we contextualized and

**[00:40:30,300 → 00:40:32,700]**
processed that data that it just gathered.

**[00:40:32,720 → 00:40:35,620]**
So we want to pull the latest financial data,

**[00:40:35,760 → 00:40:38,200]**
and then the add data, and also the

**[00:40:38,220 → 00:40:41,000]**
CRM data. Then what we did is we processed that

**[00:40:41,020 → 00:40:43,520]**
and made it into like for example, we made it

**[00:40:43,540 → 00:40:46,540]**
into some bar charts and some pie charts, etc.

**[00:40:46,560 → 00:40:48,250]**
And we want this exact

**[00:40:48,270 → 00:40:50,200]**
output each and every time, right.

**[00:40:50,380 → 00:40:52,200]**
So for example, right here,

**[00:40:52,220 → 00:40:55,300]**
there is executive summary, an agenda,

**[00:40:55,320 → 00:40:57,560]**
and then the PNL snapshot, so

**[00:40:57,580 → 00:41:02,570]**
all these slides. Then there's also the brand
colors, you see these are pretty consistent,

**[00:41:02,590 → 00:41:04,120]**
and we like that. Alright.

**[00:41:04,630 → 00:41:07,270]**
And because th that's the process we want,

**[00:41:07,290 → 00:41:09,700]**
what we now do is just this.

**[00:41:10,450 → 00:41:12,830]**
Now we claw t tell Claude to use that

**[00:41:12,850 → 00:41:15,290]**
skill creator to make a skill.

**[00:41:15,310 → 00:41:17,650]**
And how we do that is very simple.

**[00:41:17,680 → 00:41:21,420]**
So notice how I have Opus selected, because

**[00:41:21,440 → 00:41:24,880]**
Opus is a really good task for this. Okay.

**[00:41:25,660 → 00:41:29,650]**
We just spend some time building a deck.

**[00:41:30,880 → 00:41:32,500]**
What I want you to do.

**[00:41:33,820 → 00:41:37,140]**
Is turn this into a repeatable skill that

**[00:41:37,160 → 00:41:39,670]**
I can run every week with one command.

**[00:41:39,690 → 00:41:41,480]**
And here's what the skill should do.

**[00:41:41,500 → 00:41:43,270]**
First, we want to gather.

**[00:41:43,290 → 00:41:45,340]**
So we want to connect to our Google Drive,

**[00:41:45,360 → 00:41:48,650]**
pull the latest weekly receipts from our last

**[00:41:48,670 → 00:41:51,580]**
week, and then the credit card statements,

**[00:41:51,730 → 00:41:54,010]**
the finance, the ad platforms,

**[00:41:54,130 → 00:41:56,540]**
the post hog, all the

**[00:41:56,560 → 00:41:59,300]**
stuff you just did, make sure you gather that.

**[00:41:59,500 → 00:42:01,860]**
Then what I want you to do is categorize

**[00:42:01,880 → 00:42:03,610]**
all these expenses by channels.

**[00:42:03,630 → 00:42:07,180]**
So where they came from, so paid ads,

**[00:42:07,300 → 00:42:09,460]**
um organic, all these things.

**[00:42:09,480 → 00:42:12,520]**
Same as what we just did. Then create the bar

**[00:42:13,210 → 00:42:16,000]**
graphs and pie charts, whatever we need,

**[00:42:16,690 → 00:42:19,120]**
and then like follow

**[00:42:19,140 → 00:42:21,520]**
the same structure for the slides,

**[00:42:21,540 → 00:42:23,890]**
and that is the output that I'm looking for.

**[00:42:24,010 → 00:42:25,480]**
So look at all the slides,

**[00:42:25,500 → 00:42:28,490]**
how there's an executive summary,

**[00:42:28,510 → 00:42:30,850]**
there's an agenda, the PNL snapshot.

**[00:42:30,960 → 00:42:33,500]**
The same way, what I want you to do is follow

**[00:42:33,520 → 00:42:35,960]**
this and create a skill out of this.

**[00:42:35,980 → 00:42:38,590]**
So every week, if I say something like

**[00:42:39,010 → 00:42:41,100]**
weekly marketing report, you

**[00:42:41,120 → 00:42:43,370]**
will generate this, alright. And you can see

**[00:42:43,390 → 00:42:45,340]**
that was like a pretty beefy prompt.

**[00:42:45,820 → 00:42:50,490]**
And of course you have to go back and forth with
it, but this is just my first attempt. What I'm

**[00:42:50,510 → 00:42:52,840]**
gonna do is one more thing.

**[00:42:53,320 → 00:42:55,540]**
Hey, if I try say

**[00:42:55,560 → 00:42:57,700]**
slash weekly marketing report,

**[00:42:57,720 → 00:43:00,080]**
I want you to run this thing autonomously the

**[00:43:00,100 → 00:43:02,800]**
whole process, okay? Now go make me the skill.

**[00:43:02,820 → 00:43:06,190]**
Great. That's what I just said.

**[00:43:06,210 → 00:43:08,380]**
Now, that was a beefy prompt I entered with

**[00:43:08,400 → 00:43:10,990]**
Opus because this is a very

**[00:43:11,200 → 00:43:13,390]**
logical process and it's a hard thing to do.

**[00:43:13,410 → 00:43:15,700]**
That's why I didn't use Sonnet, and I'm

**[00:43:15,720 → 00:43:17,710]**
using Opus to make the skill,

**[00:43:17,730 → 00:43:20,200]**
so I don't have to do it every time.

**[00:43:20,260 → 00:43:22,640]**
Now you'll see, after this is done, I'll

**[00:43:22,660 → 00:43:24,400]**
demo how to use the skill.

**[00:43:24,420 → 00:43:26,487]**
so it just got done,

**[00:43:26,507 → 00:43:29,487]**
and you can see if you really want to we can

**[00:43:29,667 → 00:43:31,787]**
view the skills file and you can see

**[00:43:31,807 → 00:43:33,977]**
there's a bunch of stuff. Um,

**[00:43:33,997 → 00:43:35,907]**
and we can just save a skill.

**[00:43:36,897 → 00:43:39,367]**
Now if we let's say we're

**[00:43:39,387 → 00:43:41,687]**
Alex and it's next week, if I just do

**[00:43:41,707 → 00:43:44,337]**
slash weekly marketing report and hit enter,

**[00:43:44,547 → 00:43:47,657]**
what it's gonna do is literally create a new

**[00:43:47,677 → 00:43:50,387]**
presentation without us having

**[00:43:50,407 → 00:43:53,017]**
to do all that back and forth. That's really

**[00:43:53,037 → 00:43:56,877]**
cool, right? We just packaged everything up.
And I'll show you the output once it's done.

**[00:43:57,530 → 00:44:01,040]**
And one more thing is while it runs,

**[00:44:01,580 → 00:44:03,820]**
I don't actually have to r do

**[00:44:03,840 → 00:44:05,810]**
do slash weekly marketing report.

**[00:44:05,830 → 00:44:08,730]**
That's pretty cool. I can just be like make

**[00:44:08,750 → 00:44:11,100]**
me a weekly marketing report, and Claude is

**[00:44:11,120 → 00:44:14,060]**
smart enough to go search my skills database,

**[00:44:14,090 → 00:44:15,860]**
and then run it on its own.

**[00:44:16,060 → 00:44:18,010]**
Alright, so let's check the output.

**[00:44:22,810 → 00:44:25,750]**
Okay, awesome. So we just ran one command,

**[00:44:25,770 → 00:44:29,660]**
and Claude gathered all the resources from

**[00:44:29,680 → 00:44:32,120]**
spread out from different apps, processed

**[00:44:32,140 → 00:44:34,100]**
everything, and then built out all the

**[00:44:34,120 → 00:44:36,340]**
charts that we were after. This is the same

**[00:44:36,360 → 00:44:38,910]**
quality we got five minutes ago when we walked

**[00:44:38,930 → 00:44:41,360]**
through that entire manual process. Now it's

**[00:44:41,380 → 00:44:45,090]**
just one command, that's the last S in GCPS.

**[00:44:45,110 → 00:44:47,130]**
So this is awesome because now

**[00:44:47,370 → 00:44:49,950]**
we have what we want standardized,

**[00:44:49,970 → 00:44:52,100]**
and now we can share with our teammates,

**[00:44:52,120 → 00:44:55,680]**
and it our job to create these decks

**[00:44:55,700 → 00:44:58,620]**
every week just became a whole lot easier.

**[00:44:58,740 → 00:45:01,320]**
But we haven't even put it on a schedule yet.
