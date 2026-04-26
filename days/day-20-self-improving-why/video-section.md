# Day 20 — Why Your Setup Should Improve Itself

**Video slice:** `03:09:59` → `03:17:00`  
_(source: `transcripts /full transcript.md`)_

---

## Transcript

**[03:09:59,479 → 03:10:01,834]**
gonna be fixing in this level. And with this

**[03:10:01,854 → 03:10:04,504]**
new idea from Andre Karpathi, who was one of

**[03:10:04,524 → 03:10:06,654]**
the heads of OpenAI and Tesla, and we're

**[03:10:06,674 → 03:10:09,374]**
gonna be building a system that essentially

**[03:10:09,394 → 03:10:11,374]**
measures and improves itself without

**[03:10:11,394 → 03:10:12,934]**
you having to do anything.

**[03:10:13,014 → 03:10:15,414]**
What it does, it runs its own experiments,

**[03:10:15,434 → 03:10:17,984]**
it forms hypotheses and makes

**[03:10:18,004 → 03:10:20,474]**
changes to see if it can measure

**[03:10:20,494 → 03:10:23,374]**
and drive towards a meaningful outcome.

**[03:10:23,404 → 03:10:25,074]**
Right? The concept is that

**[03:10:25,094 → 03:10:27,034]**
Andreakarpathy wrote about this.

**[03:10:27,364 → 03:10:30,424]**
The same pattern that AI researchers use to

**[03:10:30,444 → 03:10:33,064]**
improve models can be applied to literally

**[03:10:33,084 → 03:10:35,254]**
anything measureable. So let's say we're

**[03:10:35,274 → 03:10:37,234]**
gonna be giving Claude a metric, and

**[03:10:37,254 → 03:10:40,014]**
we're gonna let Claude come up with and run its

**[03:10:40,034 → 03:10:42,414]**
own experiments, and it tries these things,

**[03:10:42,434 → 03:10:44,054]**
it measures, keeps what works,

**[03:10:44,074 → 03:10:46,714]**
and discards what doesn't. All on its own.

**[03:10:46,864 → 03:10:48,634]**
So which means we're gonna be

**[03:10:48,844 → 03:10:50,794]**
like this graph shows right here,

**[03:10:50,814 → 03:10:52,914]**
we're gonna be waking up to better and

**[03:10:52,934 → 03:10:55,394]**
better either code, loading speed, if you can

**[03:10:55,414 → 03:10:59,634]**
imagine, all these different things. And
they keep compounding because it's always

**[03:10:59,654 → 03:11:01,954]**
linked to making new improvements. And this

**[03:11:01,974 → 03:11:04,274]**
is revolutionary because auto research

**[03:11:04,294 → 03:11:06,514]**
literally runs hundreds of cycles in the

**[03:11:06,534 → 03:11:08,654]**
time we actually just do one.

**[03:11:08,674 → 03:11:11,184]**
And the compounding is really wild. Because

**[03:11:11,204 → 03:11:13,734]**
here's the part that really matters for us. If

**[03:11:13,754 → 03:11:16,554]**
we can measure it, we can optimizing it. So if

**[03:11:16,574 → 03:11:18,634]**
you think about metrics like revenue

**[03:11:18,654 → 03:11:20,634]**
per visitor, conversion rate,

**[03:11:20,654 → 03:11:22,824]**
email open rate, page load speed,

**[03:11:22,884 → 03:11:25,704]**
maybe add cost for acquisition, churn,

**[03:11:25,724 → 03:11:28,154]**
lead response time, all of these are numbers

**[03:11:28,174 → 03:11:30,004]**
you can measure, and any number you

**[03:11:30,024 → 03:11:32,694]**
can measure, we can run this auto research on.

**[03:11:32,714 → 03:11:34,464]**
So with Alyx,

**[03:11:34,484 → 03:11:36,474]**
we launch that consulting website.

**[03:11:36,624 → 03:11:38,544]**
It looks great, but if we wanted to

**[03:11:38,564 → 03:11:40,494]**
convert more visitors into

**[03:11:40,514 → 03:11:43,014]**
consulting calls or more sales, the

**[03:11:43,034 → 03:11:45,024]**
site speed is very important, right?

**[03:11:45,204 → 03:11:47,744]**
Apparently every hundred milliseconds

**[03:11:47,764 → 03:11:49,974]**
of like page load kills conversions.

**[03:11:50,064 → 03:11:52,224]**
And a slow site is a leaky funnel.

**[03:11:52,244 → 03:11:54,954]**
So we're gonna run an auto research loop on

**[03:11:54,974 → 03:11:57,354]**
the website's loading speed and let Claude

**[03:11:57,374 → 03:11:59,994]**
experiment overnight while we wake up to just

**[03:12:00,014 → 03:12:02,167]**
a faster site. Alright, and we're gonna be

**[03:12:02,187 → 03:12:06,387]**
doing this with this thing called Evo that I
found, which was really good. It's a GitHub

**[03:12:06,407 → 03:12:10,767]**
reboot that just makes it a lot easier for
you to run these kind of experiments. So I'm

**[03:12:10,787 → 03:12:13,447]**
gonna copy this, and I'm gonna go to Claude,

**[03:12:13,747 → 03:12:16,617]**
and I'm just gonna ask, hey,

**[03:12:16,637 → 03:12:18,427]**
can you set this up for me? Alright.

**[03:12:18,447 → 03:12:20,647]**
So you see, it just started up,

**[03:12:20,667 → 03:12:23,087]**
now all I'm gonna say is like. Hey, um,

**[03:12:23,107 → 03:12:25,887]**
can you discover and just tell me what kind of

**[03:12:25,907 → 03:12:29,077]**
experiments we can run for our website in

**[03:12:29,097 → 03:12:31,747]**
this code base to see what we can do.

**[03:12:31,767 → 03:12:33,487]**
Use Evo Discover. Okay.

**[03:12:33,507 → 03:12:35,917]**
So now we're just doing the first pay phase. It

**[03:12:35,937 → 03:12:38,147]**
becomes really easy. Uh because

**[03:12:38,167 → 03:12:40,397]**
all you do is there's two things you can do.

**[03:12:41,197 → 03:12:43,657]**
It's just discover. and optimize.

**[03:12:43,677 → 03:12:46,437]**
So we discover like what kind of experiments

**[03:12:46,457 → 03:12:49,087]**
we can make for our site, and then we just do

**[03:12:49,107 → 03:12:51,627]**
optimize. And after we do that, we'll be able

**[03:12:51,647 → 03:12:54,037]**
to see a dashboard with all the experiments

**[03:12:54,187 → 03:12:56,747]**
Evo makes with auto research. And then

**[03:12:56,767 → 03:12:59,257]**
essentially we can measure what's going on,

**[03:12:59,277 → 03:13:03,787]**
and have those changes done automatically.
Alright, so it came up with a bunch of stuff.

**[03:13:04,327 → 03:13:08,227]**
So it says it can perform Lighthouse score,

**[03:13:08,407 → 03:13:10,387]**
load speed, bundle size,

**[03:13:10,407 → 03:13:12,307]**
all these load time, etc.

**[03:13:12,337 → 03:13:14,627]**
Improve the cost per visitor conversions,

**[03:13:14,647 → 03:13:17,077]**
and these are all really solid experiments.

**[03:13:17,097 → 03:13:20,667]**
So just to make you see what we

**[03:13:20,687 → 03:13:23,127]**
can do, let's run a bunch of experiments, um,

**[03:13:23,147 → 03:13:25,287]**
let's say just on the loading speed, and show

**[03:13:25,307 → 03:13:29,497]**
you what the dashboard kinda looks like.
Alright, so now that we have this, can you

**[03:13:29,517 → 03:13:32,387]**
uh uh give me a dashboard of

**[03:13:32,837 → 03:13:36,807]**
the Evo optimized for just let's say
loading speed. And that's about it,

**[03:13:36,827 → 03:13:39,027]**
it's just like me s understanding two things,

**[03:13:39,047 → 03:13:43,727]**
it's like hey, these are the metrics, and then
I just say, hey, go optimized this. Figure it

**[03:13:43,747 → 03:13:47,687]**
out. So I'll come back when this is done,
because this is gonna take a long time.

**[03:13:49,637 → 03:13:52,007]**
Alright, so that took a while. Let me see.

**[03:13:53,447 → 03:13:55,407]**
Okay, so I'm opening up the dashboard,

**[03:13:55,427 → 03:13:57,977]**
and this is what the Evo dashboard looks like.

**[03:13:57,997 → 03:14:00,437]**
It's really cool. So now

**[03:14:00,457 → 03:14:03,137]**
LTP is the life house core, I'm assuming.

**[03:14:03,227 → 03:14:07,517]**
And you can see that it

**[03:14:07,537 → 03:14:10,137]**
keeps improving these things over time, and

**[03:14:10,157 → 03:14:13,217]**
we can see a lot of different sub agents ran.

**[03:14:13,547 → 03:14:16,407]**
We can see what the experiments were that

**[03:14:16,697 → 03:14:19,427]**
I don't know what most of the stuff up is.

**[03:14:19,547 → 03:14:22,187]**
But what I like about it is

**[03:14:22,207 → 03:14:24,607]**
you can apply all these best practices,

**[03:14:24,627 → 03:14:26,907]**
it knows what's going on, it's

**[03:14:26,927 → 03:14:29,737]**
seeing you know, it made some experiments,

**[03:14:29,757 → 03:14:33,010]**
different uh agents, And it optimized

**[03:14:33,490 → 03:14:36,460]**
our page load speed by so much

**[03:14:36,880 → 03:14:38,960]**
by just doing this, and now we have a

**[03:14:38,980 → 03:14:41,590]**
really nice dashboard to see it working.

**[03:14:42,100 → 03:14:45,400]**
But you know. All of those You know,

**[03:14:45,420 → 03:14:47,970]**
all this is cool, but the biggest thing is this

**[03:14:47,990 → 03:14:50,560]**
all of these improvements came from Claude. I

**[03:14:50,580 → 03:14:52,870]**
didn't know what is being done.

**[03:14:52,890 → 03:14:55,740]**
Every one of them is also documented right

**[03:14:55,760 → 03:14:58,900]**
here that I can see and dive into.

**[03:14:59,430 → 03:15:02,050]**
And if anything broke, like this thing,

**[03:15:02,260 → 03:15:04,120]**
it reverted it automatically.

**[03:15:04,240 → 03:15:06,720]**
The sights now is much faster, which means

**[03:15:06,740 → 03:15:09,190]**
the conversion rate is less leaky,

**[03:15:09,210 → 03:15:12,210]**
and we never touched a single line of code. And

**[03:15:12,290 → 03:15:14,850]**
what I want you to really internalize is

**[03:15:15,210 → 03:15:17,850]**
if it has a number, it can be optimized.

**[03:15:18,000 → 03:15:19,840]**
And if it doesn't, use Claude to

**[03:15:19,860 → 03:15:22,110]**
theorize what number you can attach to it.

**[03:15:22,470 → 03:15:25,140]**
Page load was just our first example because

**[03:15:25,160 → 03:15:27,190]**
it's easy to measure. And it's easy to see

**[03:15:27,210 → 03:15:29,460]**
the improvements. And it directly affects

**[03:15:29,480 → 03:15:32,710]**
revenue. But this pattern works
on everything. Way more than code.

**[03:15:32,730 → 03:15:34,950]**
You can put it on even a skill if you want.

**[03:15:35,340 → 03:15:38,240]**
Um test it on stuff like email open rates,

**[03:15:38,260 → 03:15:40,680]**
add CPA, landing page conversions,

**[03:15:40,700 → 03:15:42,810]**
content engagement even. Right?

**[03:15:42,830 → 03:15:46,740]**
Like what gets you more engagement. And
if we're making a product, we can test

**[03:15:46,760 → 03:15:51,460]**
literally stuff like onboarding completion
rates, different variations for the flow.

**[03:15:51,480 → 03:15:53,860]**
What we do that may affect churn.

**[03:15:53,930 → 03:15:56,250]**
This is so crazy. Like this is actually

**[03:15:56,270 → 03:15:58,410]**
if you can just go to any agency and be like,

**[03:15:58,430 → 03:16:00,910]**
hey, I will improve your X metric,

**[03:16:01,330 → 03:16:02,930]**
you can very easily make a

**[03:16:02,950 → 03:16:05,020]**
case for them to give you more money.

**[03:16:06,010 → 03:16:08,310]**
The biggest thing is that every single one

**[03:16:08,330 → 03:16:09,820]**
of this is a number,

**[03:16:10,210 → 03:16:13,260]**
and everyone can s and everyone can just set

**[03:16:13,280 → 03:16:15,900]**
this loop because all I did was just be like,

**[03:16:15,920 → 03:16:20,410]**
hey, set up Evo, and you go to sleep
while Claude just keeps working.

**[03:16:20,430 → 03:16:22,920]**
And this is what I want you to see. This final

**[03:16:22,940 → 03:16:27,380]**
piece. This really should ideally change
how you think about building anything going

**[03:16:27,400 → 03:16:29,600]**
forward. Because optimization should be

**[03:16:29,620 → 03:16:34,010]**
the last thing you worry about, because we can
literally get AI to automatically overnight

**[03:16:34,030 → 03:16:36,370]**
keep running and optimize this stuff for you,

**[03:16:36,430 → 03:16:39,280]**
and then even keep reporting for you, right?

**[03:16:39,300 → 03:16:40,840]**
So you know, we did all

**[03:16:40,860 → 03:16:43,070]**
this, but the really nice part about this,

**[03:16:43,090 → 03:16:45,190]**
which you may have noticed,

**[03:16:45,210 → 03:16:47,410]**
is this uses a lot of sub agents, right?

**[03:16:48,170 → 03:16:49,930]**
And using sub agents is so

**[03:16:49,950 → 03:16:52,260]**
useful because even when we're building,

**[03:16:52,280 → 03:16:54,580]**
we can try out a lot of wacky experiments.

**[03:16:54,600 → 03:16:57,020]**
So in the next level, I'm gonna be showing

**[03:16:57,040 → 03:16:59,410]**
you how we can actually take advantage

**[03:16:59,430 → 03:17:01,560]**
of multiple sub agents to get to
