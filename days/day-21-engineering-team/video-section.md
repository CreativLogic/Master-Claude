# Day 21 — Build Like a Real Engineering Team

**Video slice:** `03:17:00` → `03:27:30`  
_(source: `transcripts /full transcript.md`)_

---

## Transcript

**[03:17:01,580 → 03:17:03,970]**
build our product and make really cool

**[03:17:03,990 → 03:17:06,130]**
stuff you may not never have before.

**[03:17:06,825 → 03:17:08,505]**
Alright, so in this level, we're

**[03:17:08,525 → 03:17:12,735]**
gonna be learning how to develop software
product with multiple AI agents working

**[03:17:12,755 → 03:17:15,365]**
for us overnight, essentially. So we don't

**[03:17:15,385 → 03:17:18,032]**
have to continually manage everything, and

**[03:17:18,182 → 03:17:20,282]**
this is the real way what we're gonna

**[03:17:20,302 → 03:17:22,602]**
do is we're gonna have long running teams of AI

**[03:17:22,622 → 03:17:24,932]**
agents building a product for

**[03:17:24,952 → 03:17:27,162]**
us while we leave it on overnight.

**[03:17:27,372 → 03:17:29,552]**
And quick disclaimer, this is very

**[03:17:29,572 → 03:17:32,622]**
important. We are going to need the max plans

**[03:17:32,642 → 03:17:36,912]**
for codex or claude, whatever it takes,
because we're gonna be burning a lot of

**[03:17:36,932 → 03:17:40,892]**
tokens because we're gonna leave our AI
agents running on overnight. Right. Well,

**[03:17:40,912 → 03:17:44,892]**
we'll do this when we need to build something
super big, like let's say a SAS that you can

**[03:17:44,912 → 03:17:46,602]**
sell, which normally takes a lot of

**[03:17:46,622 → 03:17:48,922]**
development, right? But ideally with Claude

**[03:17:48,942 → 03:17:51,142]**
being so smart, we get to just we get

**[03:17:51,162 → 03:17:53,382]**
to just steer where it goes,

**[03:17:53,402 → 03:17:56,102]**
and this whole chapter is essentially

**[03:17:56,122 → 03:17:58,602]**
the basics on how we can get started

**[03:17:58,622 → 03:18:01,062]**
with agentic engineering. Alright.

**[03:18:01,542 → 03:18:04,532]**
And in order to do this, we're gonna make our

**[03:18:04,552 → 03:18:07,012]**
AI agents behave like software engineering

**[03:18:07,032 → 03:18:09,342]**
teams work in the real world. And let

**[03:18:09,362 → 03:18:11,422]**
me give you a bit of background on how that

**[03:18:11,442 → 03:18:13,662]**
works so you can understand at a high level and

**[03:18:13,682 → 03:18:16,352]**
have more control over how to get this to work.

**[03:18:16,372 → 03:18:18,362]**
Alright? Alright, so to dive into this,

**[03:18:18,382 → 03:18:20,762]**
I'm gonna go back here. First we need to answer

**[03:18:20,782 → 03:18:24,362]**
the question how the software teams work.

**[03:18:24,382 → 03:18:26,842]**
Right. And to answer this, there's a couple

**[03:18:26,862 → 03:18:29,242]**
steps. The real reason software companies

**[03:18:29,262 → 03:18:31,432]**
can ship features like every week, there's

**[03:18:31,452 → 03:18:33,602]**
bugs that we have to deal with, but to scale

**[03:18:33,622 → 03:18:35,766]**
product and keep pushing, it's because of

**[03:18:35,786 → 03:18:38,026]**
a process that we've developed over time.

**[03:18:38,596 → 03:18:40,496]**
And it's a repeatable process that

**[03:18:40,516 → 03:18:42,486]**
every good engineering team follows.

**[03:18:42,506 → 03:18:46,516]**
And once you understand this process, you
can replace it with AI agents. So let's walk

**[03:18:46,536 → 03:18:51,006]**
through that right now. So the first step
of this process is essentially to make a

**[03:18:51,026 → 03:18:53,546]**
PRD. Okay. Everything starts with this,

**[03:18:53,566 → 03:18:55,486]**
and it's what a PRD is,

**[03:18:55,506 → 03:18:58,056]**
it's basically a product requirement doc.

**[03:18:58,076 → 03:18:59,946]**
Alright? It's essentially a plan.

**[03:18:59,966 → 03:19:01,776]**
This is where the team decides what

**[03:19:01,796 → 03:19:05,676]**
they're building, why they're building
it, who it's for, what features and needs,

**[03:19:05,696 → 03:19:07,686]**
and how users would basically flow flow

**[03:19:07,706 → 03:19:09,076]**
through it, and what edge

**[03:19:09,096 → 03:19:11,406]**
cases we might need to actually consider.

**[03:19:11,426 → 03:19:13,596]**
None of this is code, this is just thinking

**[03:19:13,616 → 03:19:16,356]**
about what we want our product to do. And

**[03:19:17,136 → 03:19:19,476]**
this step is incredibly important,

**[03:19:19,496 → 03:19:21,186]**
especially with AI,

**[03:19:21,206 → 03:19:23,546]**
because good engineering teams spend

**[03:19:23,566 → 03:19:26,106]**
real time on this PRD.

**[03:19:26,226 → 03:19:28,486]**
This part we should unrush because every

**[03:19:28,506 → 03:19:30,576]**
bad decision made here

**[03:19:31,506 → 03:19:34,526]**
becomes a bug like a while later, and you'll

**[03:19:34,546 → 03:19:36,726]**
see the AI getting confused and looping

**[03:19:36,746 → 03:19:39,086]**
there. Alright. But what I want to make sure

**[03:19:39,106 → 03:19:41,486]**
you understand is the PRD is basically

**[03:19:41,506 → 03:19:43,926]**
the foundation of our software product.

**[03:19:43,946 → 03:19:46,556]**
So if I go right here and

**[03:19:46,576 → 03:19:49,286]**
then make this so PRD.

**[03:19:49,916 → 03:19:53,336]**
Okay. So first we want to make our PRD.

**[03:19:53,576 → 03:19:57,046]**
Then after we make a PRD, this is like

**[03:19:57,066 → 03:19:58,706]**
a massive document, remember.

**[03:19:59,126 → 03:20:01,596]**
And from that document we go to step two.

**[03:20:01,616 → 03:20:03,816]**
And step two is basically breaking it

**[03:20:03,836 → 03:20:06,186]**
into tasks. Break and two.

**[03:20:06,456 → 03:20:09,856]**
Task. Right. So this PRD. What

**[03:20:09,876 → 03:20:12,306]**
happens is, and don't worry, AI will do this.

**[03:20:12,326 → 03:20:14,786]**
I'm just gonna add it so you're not scared.

**[03:20:14,806 → 03:20:19,286]**
Um what it's gonna do is just so an AI cannot

**[03:20:19,556 → 03:20:21,326]**
one shot like with one

**[03:20:21,346 → 03:20:23,456]**
prompt build entire software project.

**[03:20:23,476 → 03:20:26,216]**
Right. So what we're gonna do.

**[03:20:26,236 → 03:20:28,396]**
So what we're gonna do is make sure from

**[03:20:28,416 → 03:20:31,586]**
the PRD, we're gonna make like Task one,

**[03:20:31,606 → 03:20:33,716]**
Task, two, and so on.

**[03:20:33,926 → 03:20:36,276]**
And the thing is, uh for example,

**[03:20:36,296 → 03:20:38,736]**
this can be something like build um

**[03:20:38,756 → 03:20:40,896]**
Sign up page. Small things.

**[03:20:40,916 → 03:20:43,626]**
And then Task 2 can actually just be like Test

**[03:20:43,646 → 03:20:46,166]**
Sign up page. And you know,

**[03:20:46,186 → 03:20:48,636]**
this can go on to task, I don't know.

**[03:20:48,656 → 03:20:51,326]**
Like 200. The idea is you don't make this.

**[03:20:51,346 → 03:20:53,156]**
We'll get AI to make this.

**[03:20:53,176 → 03:20:55,686]**
So it knows Claude,

**[03:20:55,706 → 03:20:58,296]**
what it's gonna do is each of them will

**[03:20:58,316 → 03:21:00,946]**
be their own separate thing that it

**[03:21:00,966 → 03:21:03,416]**
can work within its context window, alright.

**[03:21:03,436 → 03:21:06,116]**
Each ticket. So these tasks are called like

**[03:21:06,136 → 03:21:08,826]**
tickets, are scoped, so let's say one Claude

**[03:21:08,846 → 03:21:11,876]**
sub agent can pick this up, work on it,

**[03:21:11,936 → 03:21:14,246]**
and make sure it gets done and hand it off

**[03:21:14,266 → 03:21:16,496]**
to another agent to ensure it's all good.

**[03:21:16,736 → 03:21:19,130]**
Alright. Okay. Okay, step three,

**[03:21:19,150 → 03:21:21,829]**
what we're gonna do is step three,

**[03:21:21,849 → 03:21:23,359]**
what happens is agents.

**[03:21:23,379 → 03:21:27,049]**
Create task agents action each task.

**[03:21:27,069 → 03:21:28,609]**
So at a high level,

**[03:21:28,629 → 03:21:31,459]**
what's gonna happen is let's say Claude,

**[03:21:31,479 → 03:21:34,219]**
so you're gonna have one master clot agent,

**[03:21:34,349 → 03:21:36,949]**
and that will spin up an agent, right,

**[03:21:37,129 → 03:21:39,919]**
and that agent will be assigned to task one,

**[03:21:40,219 → 03:21:42,399]**
and then it'll assign another agent,

**[03:21:42,419 → 03:21:43,829]**
and it'll be assigned to

**[03:21:43,849 → 03:21:45,679]**
task two if they're not related.

**[03:21:45,859 → 03:21:48,249]**
Okay, and it's just gonna be happening on

**[03:21:48,269 → 03:21:50,699]**
its own. And how you can visualize

**[03:21:50,719 → 03:21:52,849]**
this is literally like this.

**[03:21:52,869 → 03:21:55,099]**
So there's going to be a backlog,

**[03:21:55,119 → 03:21:57,629]**
there's gonna be in progress, um, there's

**[03:21:57,649 → 03:21:59,539]**
gonna be a review, and then done.

**[03:21:59,559 → 03:22:01,339]**
Pardon my handwriting, um.

**[03:22:01,359 → 03:22:04,239]**
So task one is gonna be like a conban board,

**[03:22:04,389 → 03:22:05,849]**
where the AI

**[03:22:05,869 → 03:22:08,409]**
is gonna move it here while it's working on it,

**[03:22:08,709 → 03:22:11,709]**
and then it's gonna review it, and then done.

**[03:22:12,399 → 03:22:14,679]**
Okay. So after this is done,

**[03:22:14,829 → 03:22:17,479]**
then it starts working on task two.

**[03:22:19,209 → 03:22:21,879]**
And this happens over and over and over again.

**[03:22:21,899 → 03:22:24,879]**
Okay. This why we have to keep this running

**[03:22:24,899 → 03:22:27,069]**
all night to make sure this is working.

**[03:22:27,089 → 03:22:28,909]**
And then what's gonna happen is

**[03:22:28,929 → 03:22:30,939]**
let's say these are gonna be working.

**[03:22:31,209 → 03:22:33,159]**
There's probably going to be a lot of

**[03:22:33,179 → 03:22:36,689]**
different parts of code that all get merged

**[03:22:36,709 → 03:22:39,669]**
into one code base in GitHub. Alright.

**[03:22:39,819 → 03:22:42,459]**
So this is just a high level overview,

**[03:22:42,669 → 03:22:46,359]**
but overall what I'm trying to tell you is

**[03:22:46,509 → 03:22:49,299]**
how this works is Remember this

**[03:22:49,359 → 03:22:52,929]**
PRD into tickets to code to review.

**[03:22:52,949 → 03:22:55,479]**
Then we test and merge. Okay.

**[03:22:55,499 → 03:22:57,929]**
So this is high level. And this whole thing is

**[03:22:57,949 → 03:23:00,009]**
a loop. This keeps happening, okay?

**[03:23:00,184 → 03:23:02,464]**
Now with that covered, what should be built.

**[03:23:02,674 → 03:23:06,224]**
And the idea I had. that what we
should build is something kind

**[03:23:06,244 → 03:23:08,614]**
of complex, but also useful at the same time.

**[03:23:08,634 → 03:23:11,724]**
what I wanted to do was help you build

**[03:23:12,114 → 03:23:14,674]**
a desktop application that you can like play

**[03:23:14,694 → 03:23:17,484]**
with on your desktop. And I wanted so that

**[03:23:17,724 → 03:23:19,584]**
you can build it, you can sell it,

**[03:23:19,604 → 03:23:22,614]**
you can use cloud code with it. All of these.

**[03:23:22,764 → 03:23:25,204]**
And building this application covers so many

**[03:23:25,224 → 03:23:27,344]**
different concepts. So you should be able to

**[03:23:27,364 → 03:23:29,754]**
learn everything moving forward, alright?

**[03:23:29,774 → 03:23:32,074]**
And this is something that I use daily,

**[03:23:32,094 → 03:23:33,984]**
especially to write my content.

**[03:23:34,194 → 03:23:36,764]**
There's this um app that's similar to this,

**[03:23:36,784 → 03:23:38,444]**
and it's called Poppy AI. I think

**[03:23:38,464 → 03:23:40,284]**
it's worth like 50 million dollars.

**[03:23:40,304 → 03:23:42,674]**
And you know. I've stopped using it after I

**[03:23:42,694 → 03:23:44,274]**
had build this for myself.

**[03:23:44,294 → 03:23:46,204]**
So what I want you to get in the mind

**[03:23:46,224 → 03:23:48,384]**
of is now you can build your own tools.

**[03:23:48,404 → 03:23:50,704]**
Especially with the power of these

**[03:23:50,724 → 03:23:52,584]**
kind of agenti workflows.

**[03:23:52,604 → 03:23:54,234]**
So let's get into that.

**[03:23:54,504 → 03:23:56,974]**
Uh I think after you learn how to build this,

**[03:23:56,994 → 03:24:00,504]**
it will be super useful. And you can even
take it and sell it if you'd like later.

**[03:24:02,033 → 03:24:05,043]**
Alright. To get started, I have this uh long

**[03:24:05,063 → 03:24:09,733]**
running AI agents link inside. And you can
find this on the internet as well, and just

**[03:24:09,753 → 03:24:12,173]**
like keeping everything here. But it's this

**[03:24:12,193 → 03:24:14,153]**
software called AutoForge.

**[03:24:14,273 → 03:24:17,323]**
And I've been using this to spin up MVPs,

**[03:24:17,343 → 03:24:19,503]**
and it's been working really really well.

**[03:24:19,523 → 03:24:22,113]**
So if I go back to Cloud Code, what we're gonna

**[03:24:22,133 → 03:24:24,433]**
need to do first is set up AutoForge.

**[03:24:24,453 → 03:24:27,413]**
So let's make sure we set this up, let's choose

**[03:24:27,433 → 03:24:29,603]**
a different folder and set up AutoForge.

**[03:24:29,623 → 03:24:32,723]**
Autoforge. Hey, can you spin this up, please?

**[03:24:32,743 → 03:24:36,023]**
And let me wait for it to spin it up.

**[03:24:36,128 → 03:24:37,568]**
Well wouldn't you know it?

**[03:24:37,588 → 03:24:40,208]**
This is um insane timing,

**[03:24:40,228 → 03:24:43,488]**
but this is why I want to make sure I help you

**[03:24:43,508 → 03:24:46,088]**
guys set this up. Claude right now is down.

**[03:24:46,108 → 03:24:47,798]**
That means my operating system,

**[03:24:47,818 → 03:24:50,228]**
all of that stuff is also down. Right?

**[03:24:50,708 → 03:24:52,568]**
Uh I was trying to log in and build

**[03:24:52,588 → 03:24:53,888]**
this stuff for you guys,

**[03:24:53,908 → 03:24:56,438]**
but then I realized it's not working. So

**[03:24:57,308 → 03:24:59,908]**
maybe this is a better time than any on

**[03:24:59,928 → 03:25:04,068]**
how we can set up our redundancies.
And this is what I've been saying.

**[03:25:04,088 → 03:25:05,748]**
If like, for example, you set up

**[03:25:05,768 → 03:25:07,508]**
managed agents with Claude and

**[03:25:07,528 → 03:25:12,128]**
this thing happens, your system is down, and
you're like, oh no, what am I gonna do? So now

**[03:25:12,328 → 03:25:15,168]**
let me help you guys set up a secondary

**[03:25:15,188 → 03:25:17,358]**
service such that we're never only

**[03:25:17,378 → 03:25:22,028]**
dependent on one thing, and we can be nimble
and always keep our systems active. Right.

**[03:25:22,235 → 03:25:23,925]**
Alright. So to make sure we're

**[03:25:23,945 → 03:25:26,105]**
never only just dependent on one thing.

**[03:25:26,165 → 03:25:28,145]**
I'm gonna spin up codex.

**[03:25:28,165 → 03:25:31,015]**
So make sure we're always not dependent

**[03:25:31,035 → 03:25:33,305]**
on one thing, the best alternative

**[03:25:33,325 → 03:25:35,585]**
that I've found is on a C codex.

**[03:25:35,605 → 03:25:38,315]**
So that's made by OpenAI, and if you already

**[03:25:38,335 → 03:25:39,905]**
have a chat GPT subscription,

**[03:25:39,925 → 03:25:41,755]**
you can use it with that. So I'm just

**[03:25:41,775 → 03:25:43,415]**
Googling Codex. And right here,

**[03:25:43,435 → 03:25:45,255]**
if you just download this from Mac OS,

**[03:25:45,275 → 03:25:47,595]**
I'm gonna spin up this app. Okay. So here is

**[03:25:47,615 → 03:25:49,515]**
Codex, and Codex is fantastic.

**[03:25:49,535 → 03:25:51,485]**
I've been really loving using codex

**[03:25:51,725 → 03:25:53,365]**
for a bunch of stuff.

**[03:25:53,385 → 03:25:55,645]**
And I'm going to switch to GPT 4.5.

**[03:25:55,665 → 03:25:58,205]**
And now Because we set up

**[03:25:58,225 → 03:26:00,755]**
our project in our AI OS.

**[03:26:00,775 → 03:26:03,405]**
Uh locally, because it's not dependent

**[03:26:03,425 → 03:26:05,005]**
on Claude, we can actually use

**[03:26:05,025 → 03:26:07,315]**
this from here as well. So from here,

**[03:26:07,335 → 03:26:10,365]**
if I go to my evolving brain and open

**[03:26:10,385 → 03:26:12,715]**
that up, I can do everything that we've been

**[03:26:12,735 → 03:26:16,545]**
doing from codex. And here. Let me show you
something cool as well. Right now, Claude

**[03:26:16,565 → 03:26:18,605]**
isn't working, right? So after you install

**[03:26:18,625 → 03:26:22,835]**
the app, right here, I can just be like Codex.

**[03:26:23,735 → 03:26:27,035]**
And then this works. So now I can just be like.

**[03:26:27,055 → 03:26:29,185]**
Uh so then I can like paste in

**[03:26:29,205 → 03:26:31,805]**
autoforge and be like, Hey, can you set this

**[03:26:31,825 → 03:26:33,815]**
up for me, please? And then run that.

**[03:26:33,835 → 03:26:35,885]**
And let me come back when that's good.

**[03:26:35,905 → 03:26:37,545]**
But actually, for you guys,

**[03:26:37,565 → 03:26:39,365]**
um, this is what I want you to know,

**[03:26:39,385 → 03:26:42,245]**
is that's why I like using this obsidian.

**[03:26:42,265 → 03:26:45,125]**
Uh because you know, I can use Claude.

**[03:26:45,355 → 03:26:46,985]**
I can use codex,

**[03:26:47,005 → 03:26:49,965]**
and it's all with my files and my services,

**[03:26:49,985 → 03:26:52,365]**
which means I'm not tight to one provider,

**[03:26:52,385 → 03:26:54,605]**
and I'm nimble and I can do whatever I need to,

**[03:26:54,625 → 03:26:58,385]**
alright? So let me go through this process and

**[03:26:58,685 → 03:27:01,415]**
after it's spin up, let me come back to that.

**[03:27:06,055 → 03:27:09,995]**
And you know the nice part about these
open source repos that we're using,

**[03:27:10,015 → 03:27:11,825]**
it's not dependent on either of

**[03:27:12,035 → 03:27:14,365]**
us using Claude or building even with it.

**[03:27:14,385 → 03:27:16,955]**
So if Claude is ever down, we're good.

**[03:27:17,225 → 03:27:20,355]**
Um We should never be dependent on one company

**[03:27:20,375 → 03:27:23,335]**
ever. Because of instances like these. Which

**[03:27:23,355 → 03:27:24,935]**
obviously will happen a lot.

**[03:27:24,955 → 03:27:26,805]**
And we want to make sure we are set up

**[03:27:26,825 → 03:27:28,825]**
and secure, because this is going to kill

**[03:27:28,845 → 03:27:31,235]**
our business operations if we're not in a spot
