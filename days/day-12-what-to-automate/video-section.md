# Day 12 — Pick the Right Thing to Automate

**Video slice:** `01:33:42` → `01:42:30`  
_(source: `transcripts /full transcript.md`)_

---

## Transcript

**[01:33:42,506 → 01:33:47,536]**
get into that. In this level, we're
gonna turn Claude into something

**[01:33:47,556 → 01:33:51,116]**
that runs on its own. So basically a bot
that watches the market, makes its own

**[01:33:51,136 → 01:33:55,046]**
decisions, and based on the rules you set. And
the first strategy we're gonna make, you can

**[01:33:55,066 → 01:33:59,026]**
think of it like a smart thermostat. Once you
set the rules, if the room temperature, let's

**[01:33:59,046 → 01:34:01,026]**
say, drops below 68 degrees Fahrenheit,

**[01:34:01,046 → 01:34:04,306]**
you're gonna turn on the heat. If it goes
above 75 degrees Fahrenheit, you kick

**[01:34:04,326 → 01:34:07,506]**
on the AC. That means you don't have to sit
there fiddling with your phones, messing

**[01:34:07,526 → 01:34:11,386]**
with the temperature all day. The thermostat
does that all for you. It checks, it acts, and

**[01:34:11,406 → 01:34:15,206]**
adjusts, and the bot is gonna work exactly the
same way. That means we're gonna be setting

**[01:34:15,226 → 01:34:19,286]**
some rules, and let me show you how this works
by actually explaining the trailing stop

**[01:34:19,306 → 01:34:21,366]**
strategy, which is a really good strategy

**[01:34:21,386 → 01:34:25,206]**
used by many different traders. Let me
show you how the trailing stop strategy

**[01:34:25,226 → 01:34:27,226]**
actually works. So say you buy a

**[01:34:27,246 → 01:34:29,646]**
stock at a hundred dollars.

**[01:34:30,096 → 01:34:32,406]**
Well, let's say we tell Claude,

**[01:34:32,426 → 01:34:36,846]**
if this drops to $95, sell it.

**[01:34:36,996 → 01:34:39,476]**
That's your floor. $5 is the most

**[01:34:39,496 → 01:34:41,946]**
you're willing to risk on this trade. Now,

**[01:34:42,816 → 01:34:45,046]**
if the stock starts climbing up,

**[01:34:45,066 → 01:34:49,176]**
and let's say hits 11, if it didn't go down,

**[01:34:49,196 → 01:34:53,466]**
but your floor is still sitting at that 95,

**[01:34:54,756 → 01:34:57,426]**
then you're exposed to a 15 fall.

**[01:34:57,726 → 01:35:00,276]**
That makes no sense. So what we want

**[01:35:00,396 → 01:35:03,576]**
is Claude to move up our floor

**[01:35:04,146 → 01:35:06,726]**
to 105. Which means

**[01:35:06,746 → 01:35:09,276]**
if the stock dips and hits the new floor,

**[01:35:09,486 → 01:35:12,756]**
you're still up $5 in profit, and you were

**[01:35:12,776 → 01:35:15,156]**
protected the entire time. But what if the

**[01:35:15,176 → 01:35:17,916]**
stock drops right out the gate, right? Well.

**[01:35:18,366 → 01:35:20,526]**
That means it would just hit ninety

**[01:35:20,546 → 01:35:22,626]**
five dollars and you'd sell it.

**[01:35:23,046 → 01:35:27,296]**
And you're out five dollars and that's your
loss. Now here's the important part. You're

**[01:35:27,316 → 01:35:29,556]**
not stuck. You've still got that capital.

**[01:35:29,706 → 01:35:31,596]**
Claude can now take that money,

**[01:35:32,016 → 01:35:34,506]**
and goes looking for the next setup,

**[01:35:34,806 → 01:35:36,816]**
maybe it's the same stock a week later

**[01:35:36,836 → 01:35:38,996]**
at a better price. Maybe it's a completely

**[01:35:39,016 → 01:35:41,016]**
different opportunity. The point is,

**[01:35:41,036 → 01:35:43,386]**
you lost a small portion that you're

**[01:35:43,406 → 01:35:46,026]**
okay to lose and risk. Basically,

**[01:35:46,046 → 01:35:48,696]**
you live to trade another day. And ideally,

**[01:35:48,876 → 01:35:50,916]**
we find trades like this.

**[01:35:51,126 → 01:35:53,886]**
So let's say the stock keeps climbing,

**[01:35:53,906 → 01:35:56,106]**
and every time it does, Claude is

**[01:35:56,126 → 01:35:58,746]**
gonna drag the floor higher and higher.

**[01:35:58,866 → 01:36:01,686]**
You can never fall back to where you started.

**[01:36:01,956 → 01:36:05,106]**
It's basically now going to sell at 110.

**[01:36:05,126 → 01:36:08,496]**
So you get that 10 in profit, which is 10% gain.

**[01:36:08,796 → 01:36:10,296]**
That's a trailing stop.

**[01:36:10,596 → 01:36:12,156]**
You set the rules once,

**[01:36:12,336 → 01:36:15,566]**
and Claude follows them every second of

**[01:36:15,586 → 01:36:18,186]**
the day. You're always protected, and you're

**[01:36:18,206 → 01:36:20,696]**
always locking in the gains. So when a trade

**[01:36:20,716 → 01:36:23,236]**
doesn't work out, you move on fast with the

**[01:36:23,256 → 01:36:25,656]**
most amount of money still in your pocket.

**[01:36:25,676 → 01:36:28,036]**
Now, why am I telling you all of this? Because

**[01:36:28,056 → 01:36:30,396]**
the worst thing you can really do is hand your

**[01:36:30,416 → 01:36:32,986]**
AI a pile of money and be like, go figure it out.

**[01:36:33,396 → 01:36:35,166]**
The rules aren't the limitation.

**[01:36:35,186 → 01:36:36,966]**
That's the whole point. This is

**[01:36:36,986 → 01:36:38,946]**
how you take what you know,

**[01:36:39,366 → 01:36:41,406]**
your instinct, your risk tolerance,

**[01:36:41,426 → 01:36:43,536]**
your read on the market, and you encode it.

**[01:36:43,556 → 01:36:45,246]**
The same rules are true here.

**[01:36:45,516 → 01:36:47,546]**
Claude can execute thousands

**[01:36:47,566 → 01:36:49,306]**
of decisions faster than any

**[01:36:49,326 → 01:36:51,516]**
human. It's executing your decisions,

**[01:36:51,536 → 01:36:55,896]**
just running at the speed and discipline that
you never could on your own. That's what makes

**[01:36:55,916 → 01:36:58,866]**
this different from just letting AI loose.

**[01:36:58,886 → 01:37:00,266]**
And I'll show

**[01:37:00,286 → 01:37:02,586]**
you how to set this all up in the next portion.

**[01:37:02,606 → 01:37:06,956]**
And to set this up, it's actually really
simple. So I'm just back in my chat. Where I

**[01:37:06,976 → 01:37:09,336]**
have been speaking with my Claude.

**[01:37:09,546 → 01:37:12,216]**
And I'm just gonna be speaking to it, right?

**[01:37:12,236 → 01:37:14,456]**
And just to make it a little easier, if you guys

**[01:37:14,476 → 01:37:18,576]**
wanted this, in my classroom, uh if you
guys are already watching this, if you

**[01:37:18,596 → 01:37:21,216]**
go to skills, you'll see you
have a bunch of skills here.

**[01:37:21,236 → 01:37:25,576]**
So this is the prompt we're essentially going
to be speaking to our Claude, right? So go to

**[01:37:25,596 → 01:37:28,106]**
Claude. And right now. Don't worry about it.

**[01:37:28,126 → 01:37:30,436]**
If you want those docs, it's there. But you can

**[01:37:30,456 → 01:37:32,456]**
follow along with me in this video. So I'm

**[01:37:32,476 → 01:37:35,196]**
just gonna speak it to it. Alright,

**[01:37:35,216 → 01:37:38,476]**
so I want your help to actually schedule a

**[01:37:38,496 → 01:37:42,636]**
trailing stop strategy on, let's say, Tesla.

**[01:37:42,756 → 01:37:44,256]**
Right. I want you to buy

**[01:37:44,276 → 01:37:46,866]**
Tesla using a pack up paper trading account.

**[01:37:46,886 → 01:37:49,436]**
Buy I don't know, like 10 shares at the market

**[01:37:49,456 → 01:37:51,876]**
price right now. And set up these rules.

**[01:37:51,896 → 01:37:54,366]**
The floor. If the stock drops,

**[01:37:54,386 → 01:37:57,246]**
let's say by 10%, sell everything.

**[01:37:57,276 → 01:37:59,256]**
That's my stop loss. I don't want

**[01:37:59,276 → 01:38:01,236]**
to lose more than that on this trade.

**[01:38:01,476 → 01:38:04,276]**
The trailing floor, if the stock goes up 10%

**[01:38:04,296 → 01:38:06,906]**
from what I paid, move my stop loss up.

**[01:38:07,596 → 01:38:11,526]**
Maybe move it up 5% below the current price.

**[01:38:11,586 → 01:38:13,386]**
Every time it climbs,

**[01:38:13,476 → 01:38:16,236]**
move another 5% up. The floor again.

**[01:38:16,506 → 01:38:18,846]**
So the floor only goes up, never down.

**[01:38:18,866 → 01:38:20,816]**
And then I want you to also ladder in.

**[01:38:20,836 → 01:38:25,206]**
If the stock drops, let's say by over 20, 30%,

**[01:38:25,416 → 01:38:27,406]**
by a bunch more shares,

**[01:38:27,426 → 01:38:29,966]**
let's say 10 more shares. If it drops by, let's

**[01:38:29,986 → 01:38:32,606]**
say 20%, by 20 shares. This way I'm getting

**[01:38:32,626 → 01:38:34,606]**
better prices on the way down instead of

**[01:38:34,626 → 01:38:37,086]**
just losing money. And after you set this up,

**[01:38:37,106 → 01:38:39,546]**
show me a summary of every order,

**[01:38:39,566 → 01:38:41,226]**
and right after you place

**[01:38:41,246 → 01:38:43,476]**
it. So I can confirm this looks right.

**[01:38:47,166 → 01:38:50,376]**
Okay. So I word vomited some stuff there and

**[01:38:50,396 → 01:38:53,096]**
um let this finish and I'll show you what this

**[01:38:53,116 → 01:38:56,236]**
looks like. So I see it just got

**[01:38:56,256 → 01:38:58,636]**
done, and it says this is the current price,

**[01:38:58,656 → 01:39:00,956]**
and if I go back to my Alpaca dashboard,

**[01:39:00,976 → 01:39:03,006]**
I can see it set

**[01:39:03,336 → 01:39:05,616]**
some price, it bought some Tesla,

**[01:39:05,636 → 01:39:08,946]**
and then it even set a stop loss right here.

**[01:39:09,126 → 01:39:12,996]**
Now one more thing we need to do is make sure

**[01:39:13,176 → 01:39:16,986]**
we go back here and be like Hey, can you set up

**[01:39:17,406 → 01:39:19,686]**
during market hours every day

**[01:39:20,106 → 01:39:22,476]**
that you're checking consistently

**[01:39:24,186 → 01:39:27,246]**
when we need to move our floor up or

**[01:39:27,266 → 01:39:30,006]**
need to make new stop losses or re-enter?

**[01:39:30,026 → 01:39:32,026]**
Use the slash schedule to

**[01:39:32,046 → 01:39:34,056]**
make sure we have that going.

**[01:39:34,926 → 01:39:36,576]**
And set your own schedules.

**[01:39:38,736 → 01:39:40,906]**
So this just executed one trade.

**[01:39:40,926 → 01:39:43,696]**
Now what I want is clock to basically be alive

**[01:39:43,716 → 01:39:47,016]**
and keep looping and checking on a schedule

**[01:39:47,036 → 01:39:49,506]**
like hey, are these trades looking right?

**[01:39:49,656 → 01:39:50,976]**
Do I need to re-enter?

**[01:39:50,996 → 01:39:52,626]**
Do I need to move my floor up?

**[01:39:52,646 → 01:39:54,956]**
All of that stuff. Normally we would have to do

**[01:39:54,976 → 01:39:57,456]**
it, but right now, with the command I just gave

**[01:39:57,476 → 01:39:59,676]**
it, it should be able to do it on its own.

**[01:40:02,106 → 01:40:04,366]**
Okay, so it just got done, and it says

**[01:40:04,386 → 01:40:07,536]**
literally Tesla trailing stop monitor.

**[01:40:07,656 → 01:40:09,836]**
And it's gonna be doing that every five

**[01:40:09,856 → 01:40:12,666]**
minutes from Monday to Friday 9 a.m.

**[01:40:12,786 → 01:40:15,126]**
And it's gonna keep checking. And just so

**[01:40:15,146 → 01:40:18,216]**
you're clear, on the left hand side,

**[01:40:18,276 → 01:40:20,656]**
if you hit see this clock, if you hit this

**[01:40:20,676 → 01:40:23,416]**
clock, it's a scheduled. And if you open it up,

**[01:40:23,796 → 01:40:26,006]**
these local tasks are already

**[01:40:26,026 → 01:40:27,786]**
going to be running right here.

**[01:40:27,806 → 01:40:29,666]**
You can see it already set the

**[01:40:29,686 → 01:40:32,086]**
schedule for me. I didn't have to touch this,

**[01:40:32,106 → 01:40:34,176]**
and if my computer is on, it's going to be

**[01:40:34,196 → 01:40:36,726]**
running this on its own. Now we have

**[01:40:36,906 → 01:40:39,266]**
basically made a trading bot.

**[01:40:39,286 → 01:40:40,866]**
Now let's go through a couple

**[01:40:40,886 → 01:40:43,416]**
different scenarios. Hey, so

**[01:40:44,046 → 01:40:46,416]**
just briefly and really quickly,

**[01:40:46,436 → 01:40:48,876]**
can you tell me what would happen

**[01:40:48,896 → 01:40:51,546]**
if let's say Tesla

**[01:40:51,636 → 01:40:54,766]**
shoots up to $500 randomly. What would you do?

**[01:40:57,156 → 01:40:59,556]**
And right now I'm role playing it just so

**[01:40:59,576 → 01:41:02,196]**
you understand, and I encourage you

**[01:41:02,216 → 01:41:06,586]**
to do this as well, so you understand what
would happen in different scenarios and

**[01:41:06,606 → 01:41:08,466]**
what would it actually do. And if you

**[01:41:08,486 → 01:41:10,706]**
do really need to change its thinking and

**[01:41:10,726 → 01:41:12,066]**
thought processes around,

**[01:41:12,086 → 01:41:16,656]**
you could just be like, hey, change this
around, okay. And right here, I just done.

**[01:41:16,676 → 01:41:20,206]**
It says if Tesla shoots to 500, on the way up,

**[01:41:20,226 → 01:41:22,506]**
the trailing stops kicking in, trailing

**[01:41:22,526 → 01:41:24,996]**
activates, your floor moves up, etc.

**[01:41:25,446 → 01:41:27,846]**
And that's about it. Yeah.

**[01:41:28,176 → 01:41:31,476]**
This is a really cool way to do ladder buys.

**[01:41:31,496 → 01:41:33,776]**
Those don't trigger at all, you see, right now

**[01:41:33,796 → 01:41:36,066]**
I don't have any of them, so I'm gonna be like.

**[01:41:36,086 → 01:41:38,436]**
Can you think about what are good ladder buys,

**[01:41:38,456 → 01:41:41,476]**
and make sure you set that up in the schedule

**[01:41:41,496 → 01:41:44,556]**
and update the strategy inside

**[01:41:45,126 → 01:41:47,446]**
our whole strategy of what we're training

**[01:41:47,466 → 01:41:51,916]**
right now. So as the price goes up,

**[01:41:51,936 → 01:41:53,786]**
it buys in gradually,

**[01:41:53,806 → 01:41:55,846]**
so we're always at somewhat of

**[01:41:55,866 → 01:41:58,326]**
a profit, and we're pretty safe in our buys.

**[01:41:58,506 → 01:42:01,196]**
And just so you see, it even gave me the ladder

**[01:42:01,216 → 01:42:03,436]**
levels of if it's negative 15%,

**[01:42:03,456 → 01:42:06,276]**
it's gonna buy 10%. If it's 50%, it's gonna

**[01:42:06,296 → 01:42:08,586]**
buy 50%. You can always change this around.

**[01:42:08,606 → 01:42:11,106]**
But this was really cool now that me,

**[01:42:11,126 → 01:42:12,866]**
without me having to do any of this

**[01:42:12,886 → 01:42:15,126]**
stuff, Claude can just action it for me.

**[01:42:15,146 → 01:42:17,076]**
Now this is all great. But the thing

**[01:42:17,096 → 01:42:19,146]**
is we're still picking stocks ourselves.

**[01:42:19,166 → 01:42:21,166]**
We choose Tesla because we like it,

**[01:42:21,186 → 01:42:23,716]**
but that's a gut feeling. The biggest traders

**[01:42:23,736 → 01:42:26,166]**
and the best traders in the world don't trade

**[01:42:26,186 → 01:42:28,746]**
on gut feelings, they trade on information.

**[01:42:28,766 → 01:42:33,176]**
So in the next level, we're gonna be showing
Claude where the smart money is, so Claude
