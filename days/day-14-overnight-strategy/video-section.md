# Day 14 — Let Claude Manage a Strategy While You Sleep

**Video slice:** `01:52:30` → `02:03:00`  
_(source: `transcripts /full transcript.md`)_

---

## Transcript

**[01:52:31,656 → 01:52:34,316]**
And selling options basically work the same

**[01:52:34,336 → 01:52:36,936]**
way, where you collect a premium up front,

**[01:52:36,956 → 01:52:39,306]**
and if the stock doesn't hit the strike price

**[01:52:39,326 → 01:52:41,966]**
by the expiration, your contract dies,

**[01:52:41,986 → 01:52:44,076]**
and you keep everything you were paid.

**[01:52:44,376 → 01:52:47,536]**
And the wheel strategy is built on selling

**[01:52:47,556 → 01:52:49,986]**
options. You are the insurance company.

**[01:52:50,076 → 01:52:52,506]**
You collect premiums at every stage.

**[01:52:52,526 → 01:52:54,656]**
And let me show you how that works. Okay, so

**[01:52:54,676 → 01:52:57,006]**
let's walk through the wheel strategy

**[01:52:57,026 → 01:52:59,496]**
with a real example with let's say Tesla.

**[01:52:59,736 → 01:53:02,916]**
So Tesla is trading at 250.

**[01:53:03,126 → 01:53:05,736]**
And let's say you really like the stock, but

**[01:53:05,756 → 01:53:08,026]**
you're not paying 250 for it.

**[01:53:08,046 → 01:53:10,656]**
You'd rather get it at let's say 230.

**[01:53:10,806 → 01:53:13,446]**
So if you sell a put

**[01:53:13,596 → 01:53:15,756]**
at the 230 strike.

**[01:53:16,116 → 01:53:18,516]**
And for making that promise for saying I'll

**[01:53:18,536 → 01:53:21,636]**
buy Tesla at 230 if the price drops there,

**[01:53:21,846 → 01:53:25,056]**
someone is gonna hand you 5 per share.

**[01:53:25,206 → 01:53:28,106]**
That's $500 in your pocket right now, just

**[01:53:28,126 → 01:53:30,906]**
for agreeing to do a deal, you already want it.

**[01:53:30,926 → 01:53:32,976]**
Now, two things can happen.

**[01:53:32,996 → 01:53:35,406]**
Tesla can stay above

**[01:53:35,466 → 01:53:38,436]**
230, which means the contract might expire,

**[01:53:38,646 → 01:53:41,166]**
nobody makes you buy anything,

**[01:53:41,186 → 01:53:44,406]**
and you get to keep the $500,

**[01:53:44,426 → 01:53:46,386]**
and you can do it again the next week.

**[01:53:46,416 → 01:53:50,616]**
The other scenario is Tesla drops below 230,

**[01:53:50,636 → 01:53:52,776]**
and you have to buy it. But remember,

**[01:53:52,796 → 01:53:55,596]**
you collected $500 before already.

**[01:53:55,656 → 01:53:59,796]**
So your real cost isn't $230, it's $225.

**[01:53:59,816 → 01:54:02,406]**
You got Tesla cheaper than anyone else,

**[01:54:02,426 → 01:54:03,996]**
and you wanted it anyways.

**[01:54:04,016 → 01:54:05,656]**
Okay, so stage two, let's say

**[01:54:05,676 → 01:54:07,896]**
Tesla does drop, and you get a sign, which

**[01:54:07,916 → 01:54:10,266]**
means you have to buy the Tesla shares. Now,

**[01:54:10,286 → 01:54:12,026]**
you own a hundred shares at an

**[01:54:12,046 → 01:54:14,496]**
effective cost of two twenty five.

**[01:54:14,586 → 01:54:16,386]**
Most people would be upset,

**[01:54:16,406 → 01:54:19,096]**
but you're not because you set the price, you

**[01:54:19,116 → 01:54:22,286]**
got paid to wait, and you bought
it at a discount, right? That's

**[01:54:22,306 → 01:54:24,486]**
not a loss, that's a your plan working.

**[01:54:24,726 → 01:54:27,276]**
Now it's time for stage number two.

**[01:54:27,296 → 01:54:29,686]**
Okay, now that we own the shares, and they're

**[01:54:29,706 → 01:54:32,086]**
sitting in our account, what we're gonna do is

**[01:54:32,106 → 01:54:33,876]**
we're gonna sell a cover call,

**[01:54:33,896 → 01:54:37,566]**
which means we will pick a 260s strike price.

**[01:54:37,586 → 01:54:40,536]**
That means someone is gonna pay us

**[01:54:40,596 → 01:54:43,246]**
another five dollars per share, which

**[01:54:43,266 → 01:54:45,806]**
is another five hundred dollars for the right

**[01:54:45,826 → 01:54:48,516]**
to buy your Tesla shares for two sixty.

**[01:54:48,536 → 01:54:50,976]**
If Tesla stays below two sixty,

**[01:54:51,306 → 01:54:54,286]**
that contract expires, you keep the shares,

**[01:54:54,306 → 01:54:56,676]**
and you keep the five hundred dollars, and you

**[01:54:56,696 → 01:54:59,376]**
can sell that call again the next week. This is

**[01:54:59,396 → 01:55:01,826]**
cool because you're generating income from a

**[01:55:01,846 → 01:55:03,426]**
stock that isn't even moving.

**[01:55:03,446 → 01:55:06,036]**
Because if Tesla does go above 260,

**[01:55:06,056 → 01:55:08,806]**
your shares get sold, but look at the math. So

**[01:55:08,826 → 01:55:11,926]**
let's say you bought the Tesla shares at 225,

**[01:55:11,946 → 01:55:13,986]**
you sold it at 260,

**[01:55:14,016 → 01:55:17,346]**
that's a $35 per share in stock gains,

**[01:55:17,556 → 01:55:21,336]**
plus the $5 you collected selling that put,

**[01:55:21,396 → 01:55:24,156]**
plus the $5 you collected selling the call.

**[01:55:24,336 → 01:55:26,146]**
That's $45 Forty five dollars.

**[01:55:26,166 → 01:55:29,416]**
per share in total profit on 100 shares,

**[01:55:29,436 → 01:55:31,976]**
that's 4500. And here's the best

**[01:55:31,996 → 01:55:34,716]**
part Once your shares get called away,

**[01:55:34,736 → 01:55:37,186]**
you go right back to stage one, you sell

**[01:55:37,206 → 01:55:39,576]**
another put. Collect another premium,

**[01:55:39,596 → 01:55:41,706]**
and the wheel just keeps spinning. Every

**[01:55:41,726 → 01:55:43,776]**
single rotation, you get paid.

**[01:55:43,796 → 01:55:45,946]**
The stock can go up, down,

**[01:55:45,966 → 01:55:48,206]**
sideways, it doesn't matter. You're

**[01:55:48,226 → 01:55:50,126]**
collecting income at every stage.

**[01:55:50,146 → 01:55:54,626]**
The wheel strategy sounds great until you try
to run it for yourself. You're picking strike

**[01:55:54,646 → 01:55:56,786]**
prices based on your market conditions

**[01:55:56,806 → 01:55:58,506]**
and all these other things.

**[01:55:58,526 → 01:56:00,186]**
Every single week.

**[01:56:00,206 → 01:56:02,886]**
Most people who learn about this wheel give up

**[01:56:02,906 → 01:56:05,486]**
after a few weeks because management is what

**[01:56:05,506 → 01:56:07,806]**
buryes them. And the cool part about Claude,

**[01:56:07,826 → 01:56:09,636]**
and I'm what I'm about to show you,

**[01:56:09,656 → 01:56:12,006]**
is that Claude handles all of it.

**[01:56:12,156 → 01:56:14,836]**
Which means Claude itself can

**[01:56:14,856 → 01:56:17,576]**
monitor the positions, pick expirations,

**[01:56:17,596 → 01:56:20,746]**
and roll contract when needed. Which means

**[01:56:20,766 → 01:56:23,056]**
you just collect the premiums on a schedule,

**[01:56:23,076 → 01:56:25,206]**
and you'll check in let's say once a day.

**[01:56:25,626 → 01:56:27,726]**
So with that out of the way,

**[01:56:28,086 → 01:56:30,276]**
understanding why Claude makes this

**[01:56:30,296 → 01:56:32,466]**
so effective, let's set one up.

**[01:56:32,486 → 01:56:35,016]**
Okay, so for this, we're gonna be using

**[01:56:35,196 → 01:56:38,226]**
the first training Claude account,

**[01:56:38,496 → 01:56:41,436]**
and I'm gonna go back to Claude, and you see I

**[01:56:41,456 → 01:56:44,226]**
actually have a prompt right here that you can

**[01:56:44,406 → 01:56:48,036]**
copy paste and just so you can follow along.

**[01:56:48,056 → 01:56:49,776]**
I'll read it out to you, okay.

**[01:56:50,106 → 01:56:53,826]**
So what this is is basically I want you to run a

**[01:56:53,846 → 01:56:57,906]**
wheel strategy on Let me see Tesla,

**[01:57:00,756 → 01:57:03,006]**
using my Alpaca trading account.

**[01:57:03,126 → 01:57:05,746]**
Stage one, you sell the puts, so you sell a

**[01:57:05,766 → 01:57:08,546]**
cash secured put on Tesla with a strike price

**[01:57:08,566 → 01:57:11,526]**
around 10% below the current price.

**[01:57:11,946 → 01:57:13,886]**
Pick an expiration two to four weeks

**[01:57:13,906 → 01:57:16,816]**
out, collect the premiums. If the

**[01:57:16,836 → 01:57:19,836]**
put expires worthless, sell another one, and

**[01:57:19,856 → 01:57:22,636]**
keep collecting premiums. If I get assigned,

**[01:57:22,656 → 01:57:25,086]**
I have to buy the stock, move to stage two.

**[01:57:25,236 → 01:57:27,666]**
Stage two is selling the calls.

**[01:57:27,936 → 01:57:31,566]**
Once I own the shares, sell covered calls with

**[01:57:31,586 → 01:57:34,326]**
the strike price around 10% of w ab

**[01:57:34,346 → 01:57:36,896]**
above what I paid. Pick an expiration, maybe

**[01:57:36,916 → 01:57:39,516]**
two to four weeks out, collect the premium. If

**[01:57:39,536 → 01:57:41,586]**
the call expires worthless,

**[01:57:41,606 → 01:57:43,866]**
sell another. Keep collecting premiums.

**[01:57:43,886 → 01:57:45,936]**
If my shares get called away, like

**[01:57:45,956 → 01:57:48,426]**
sold, go back to stage one, and start again.

**[01:57:48,966 → 01:57:51,586]**
And the rules are never sell a put unless I have

**[01:57:51,606 → 01:57:53,856]**
enough cash to buy the shares if assigned,

**[01:57:53,976 → 01:57:56,906]**
and never sell below my

**[01:57:56,926 → 01:57:59,616]**
cost basis what I actually paid,

**[01:57:59,976 → 01:58:03,336]**
and track my premium across all cycles, and

**[01:58:03,356 → 01:58:05,646]**
check my positions every 15 minutes during

**[01:58:05,666 → 01:58:07,926]**
market hours. Please set the schedule.

**[01:58:08,436 → 01:58:10,696]**
If a contract hits 50% profit

**[01:58:10,716 → 01:58:12,846]**
before expiration, close it early,

**[01:58:12,906 → 01:58:15,386]**
and give me a daily summary at markets close,

**[01:58:15,406 → 01:58:17,436]**
alright? Run this during market hours,

**[01:58:17,456 → 01:58:19,956]**
do nothing outside market hours. Great.

**[01:58:21,186 → 01:58:22,956]**
That's what that prompt was.

**[01:58:23,196 → 01:58:24,786]**
Now I'm gonna hit enter.

**[01:58:25,056 → 01:58:27,736]**
And wait. But that's about it. You're gonna

**[01:58:27,756 → 01:58:30,056]**
see after this is done, I'll show you in a bit.

**[01:58:30,076 → 01:58:32,076]**
It's gonna set the things in a schedule,

**[01:58:32,096 → 01:58:34,746]**
it's gonna keep running this, and I encourage

**[01:58:34,766 → 01:58:37,356]**
you to maybe set up a paper training account

**[01:58:37,416 → 01:58:39,816]**
and then have a go at it, see how it will do.

**[01:58:40,505 → 01:58:41,945]**
Alright, so we built all of

**[01:58:41,965 → 01:58:43,637]**
this inside the desktop app.

**[01:58:43,817 → 01:58:46,237]**
And for 60% of the stuff we build,

**[01:58:46,257 → 01:58:50,447]**
that's probably where we'll be doing
most of our work. But I'm gonna take this

**[01:58:50,467 → 01:58:52,817]**
a step further, because where we're about to

**[01:58:52,837 → 01:58:55,237]**
get into like managing multiple agents,

**[01:58:55,257 → 01:58:57,647]**
building a second brain, running an entire AI

**[01:58:57,667 → 01:59:01,117]**
operation, the desktop app alone isn't gonna

**[01:59:01,137 → 01:59:03,617]**
cut it for all of that. And to understand why,

**[01:59:03,637 → 01:59:05,617]**
I need to show you how this whole thing

**[01:59:05,637 → 01:59:08,167]**
actually works at a high level. And think of

**[01:59:08,187 → 01:59:10,717]**
it like a house, and inside the house, there

**[01:59:10,737 → 01:59:13,467]**
are rooms, and each room has its own purpose.

**[01:59:13,487 → 01:59:15,747]**
So in some rooms, like a kitchen, you cook, in

**[01:59:15,767 → 01:59:18,567]**
the office you work on project, and it also

**[01:59:18,587 → 01:59:21,167]**
your house has all your tools, all your

**[01:59:21,187 → 01:59:23,527]**
keys, and let's say your connectors as well.

**[01:59:23,547 → 01:59:26,447]**
What we're going to be doing is building an AI

**[01:59:26,467 → 01:59:29,017]**
operating system, which at a high level

**[01:59:29,037 → 01:59:31,499]**
is like a project folder in your house.

**[01:59:31,519 → 01:59:34,009]**
the same way, what we're gonna do is build an AI

**[01:59:34,029 → 01:59:36,209]**
operating system, which at a high level is

**[01:59:36,229 → 01:59:37,569]**
kind of like your house.

**[01:59:37,589 → 01:59:39,859]**
It's there is one project folder,

**[01:59:39,879 → 01:59:42,729]**
and everything else lives under there. like

**[01:59:42,879 → 01:59:45,489]**
you, your memories, your active projects,

**[01:59:45,509 → 01:59:47,809]**
things from the past, your AI operating

**[01:59:47,829 → 01:59:52,479]**
system should be able to access the correct
context that's live and happening over time,

**[01:59:52,629 → 01:59:55,489]**
and access it access it whenever it needs to.

**[01:59:55,829 → 01:59:57,999]**
and the nice part about Claude Code, and

**[01:59:58,019 → 02:00:00,228]**
the house, it works kind of the same way,

**[02:00:00,268 → 02:00:03,868]**
on how both of them have a lot of
doors you can access it through.

**[02:00:03,888 → 02:00:06,229]**
So you know, like the house has a front door,

**[02:00:06,249 → 02:00:10,358]**
a back door, the garage, you get into the same
house, and there's all the same content. and

**[02:00:10,378 → 02:00:14,348]**
in the same way, you can use cloud code through
different doors or different interfaces.

**[02:00:14,368 → 02:00:16,388]**
So the desktop app is just one of them.

**[02:00:16,408 → 02:00:19,648]**
You can do it through the terminal,
you can do it through VS Code, warp,

**[02:00:19,668 → 02:00:21,878]**
your phone, a canvas, and AI OS,

**[02:00:22,148 → 02:00:24,238]**
and those are all different doors to the

**[02:00:24,258 → 02:00:26,398]**
same house. You'll walk through let's say

**[02:00:26,418 → 02:00:30,938]**
the terminal door if you want something
quick, and the same project you're working

**[02:00:30,958 → 02:00:32,648]**
on with the same Cloud MDs.

**[02:00:32,738 → 02:00:35,288]**
So Claude will know what to do exactly.

**[02:00:35,308 → 02:00:37,488]**
And the reason we do that, easier

**[02:00:37,508 → 02:00:38,918]**
to cook in the kitchen than

**[02:00:38,938 → 02:00:41,078]**
to cook somewhere else in your room, right?

**[02:00:41,098 → 02:00:43,078]**
It's the same way it's easier to work on

**[02:00:43,098 → 02:00:45,078]**
let's say content on a canvas with

**[02:00:45,098 → 02:00:46,908]**
Claude and manage agents

**[02:00:46,928 → 02:00:51,058]**
from a dashboard, basically, different
interfaces have different advantages.

**[02:00:51,078 → 02:00:54,788]**
And we're gonna go over a bunch of them
so you can work super effectively.

**[02:00:54,808 → 02:00:57,017]**
So, let me show you how to set each one up.

**[02:00:57,133 → 02:01:01,783]**
Okay, so the first thing we want to do is make
sure we have Claude set up in our terminal. I

**[02:01:01,803 → 02:01:04,183]**
know we initially downloaded the Claude

**[02:01:04,203 → 02:01:06,733]**
Desktop app, but that doesn't come with the

**[02:01:07,063 → 02:01:11,453]**
Clot app inside the terminal. Pre-baked.
So I'm gonna show you how to do that. And it's

**[02:01:11,473 → 02:01:14,883]**
actually really easy. You just
go to Claude Desktop and ask. Hey,

**[02:01:14,903 → 02:01:18,243]**
can you install the Clod code CLI tool for me,

**[02:01:18,263 → 02:01:21,643]**
please? So I'm gonna run this.

**[02:01:21,663 → 02:01:23,813]**
I want you to run it as well. There's other

**[02:01:23,833 → 02:01:26,033]**
easier ways to do this as well. Where if you

**[02:01:26,053 → 02:01:28,133]**
want to go to Chrome and then do Claude

**[02:01:28,883 → 02:01:31,803]**
Code install. I'm just showing
you two different ways.

**[02:01:31,823 → 02:01:34,163]**
This is the second one. And right here,

**[02:01:34,183 → 02:01:36,553]**
for example, what you can do is if you're

**[02:01:36,573 → 02:01:38,933]**
in Mac, Windows, Homebrew, whatever,

**[02:01:38,963 → 02:01:41,423]**
you can copy this, and then I'm searching

**[02:01:41,443 → 02:01:44,033]**
my terminal up, and then paste this in.

**[02:01:44,053 → 02:01:46,253]**
You should be good to install it as well.

**[02:01:46,653 → 02:01:48,873]**
and because this Cloud already has access to

**[02:01:48,893 → 02:01:51,253]**
your terminal, it can do it for you if you ask,

**[02:01:51,273 → 02:01:53,523]**
right? So you can just be like Do it for me.

**[02:01:57,093 → 02:02:02,183]**
And you see it says installation complete. So
these are just some easy ways to just download

**[02:02:02,203 → 02:02:04,613]**
cloud code. Uh in your terminal. The reason

**[02:02:04,633 → 02:02:06,773]**
we're doing this is because if you have it

**[02:02:06,793 → 02:02:08,563]**
inside your terminal, then you

**[02:02:08,583 → 02:02:10,803]**
can use cloud code from anywhere, including

**[02:02:10,823 → 02:02:13,113]**
from your phone from the terminal, right?

**[02:02:13,323 → 02:02:15,533]**
Okay. And to verify how

**[02:02:15,553 → 02:02:17,703]**
that works is first in your terminal.

**[02:02:17,723 → 02:02:20,093]**
Zoom in on the terminal a bit more. Okay,

**[02:02:20,113 → 02:02:22,093]**
so in the terminal, if you just type in

**[02:02:22,113 → 02:02:24,393]**
Claude, you should be able to see this. And

**[02:02:24,413 → 02:02:26,553]**
after you see this little guy, you're off to

**[02:02:26,573 → 02:02:28,773]**
the races. Because now it's the same thing as

**[02:02:28,793 → 02:02:31,083]**
using the cloud code on the desktop, where

**[02:02:31,103 → 02:02:33,063]**
we can just be like. Hello.

**[02:02:36,453 → 02:02:39,123]**
And you can use it. Um from here.

**[02:02:39,143 → 02:02:41,193]**
And just a quick little tip.

**[02:02:41,213 → 02:02:43,153]**
So let's say you're here, but you want

**[02:02:43,173 → 02:02:46,593]**
to you're working on a terminal
session, doesn't matter where

**[02:02:46,613 → 02:02:48,633]**
it is, and you want to use it back in the

**[02:02:48,653 → 02:02:51,033]**
desktop, So if you do slash remote control,

**[02:02:51,633 → 02:02:53,813]**
and do enable remote control from the

**[02:02:53,833 → 02:02:56,703]**
session, look what's gonna happen.
