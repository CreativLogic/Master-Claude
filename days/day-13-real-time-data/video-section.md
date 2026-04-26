# Day 13 — Give Claude Eyes on Your Data

**Video slice:** `01:42:30` → `01:52:30`  
_(source: `transcripts /full transcript.md`)_

---

## Transcript

**[01:42:33,196 → 01:42:35,256]**
can actually make informed decisions.

**[01:42:37,146 → 01:42:39,626]**
But what is smart money? Well, on Wall

**[01:42:39,646 → 01:42:42,006]**
Street, there are people who move millions of

**[01:42:42,026 → 01:42:44,546]**
dollars in a single trade. When someone puts,

**[01:42:44,566 → 01:42:46,386]**
let's say 50 million dollars into a

**[01:42:46,406 → 01:42:48,656]**
stock, they didn't really just do that of

**[01:42:48,676 → 01:42:50,556]**
a gut feeling or flipping a coin.

**[01:42:50,856 → 01:42:53,266]**
They have a lot of research teams and

**[01:42:53,286 → 01:42:55,596]**
a lot of private data. They know something.

**[01:42:55,896 → 01:42:58,146]**
These people are called whales.

**[01:42:58,166 → 01:43:00,146]**
And when these whales make a big move,

**[01:43:00,166 → 01:43:01,326]**
it leaves the trail.

**[01:43:01,346 → 01:43:04,026]**
Like massive options orders,

**[01:43:04,046 → 01:43:06,636]**
unusual volumes on a stock out of nowhere.

**[01:43:06,656 → 01:43:08,766]**
And a group that does this a lot,

**[01:43:08,786 → 01:43:11,406]**
is surprisingly US politicians.

**[01:43:11,466 → 01:43:13,616]**
But the nice part is that the members

**[01:43:13,636 → 01:43:15,346]**
of Congress are required

**[01:43:15,366 → 01:43:17,496]**
by law to report their stock trades. The

**[01:43:17,516 → 01:43:19,696]**
data shows is that many of them consistently

**[01:43:19,716 → 01:43:21,896]**
beat the market. They sit on committees,

**[01:43:21,916 → 01:43:23,896]**
they regulate entire industries,

**[01:43:23,916 → 01:43:25,896]**
they get briefed on policy changes

**[01:43:25,916 → 01:43:28,096]**
before the public even hears about them.

**[01:43:28,506 → 01:43:30,986]**
They know which companies are about to get

**[01:43:31,006 → 01:43:33,386]**
a government contract and which ones may

**[01:43:33,406 → 01:43:35,736]**
get investigated. But you can

**[01:43:35,756 → 01:43:38,016]**
see what they bought and follow them.

**[01:43:38,046 → 01:43:41,526]**
And most people have no idea this data exists.

**[01:43:41,736 → 01:43:43,926]**
But it's there, and Claude can read it.

**[01:43:43,946 → 01:43:46,376]**
But the thing is, we can't just tell Claude to

**[01:43:46,396 → 01:43:48,536]**
go scour the internet for these hedge

**[01:43:48,556 → 01:43:50,616]**
funds trades and congressional filings

**[01:43:50,636 → 01:43:52,806]**
and all that. There's millions of data points

**[01:43:52,826 → 01:43:55,976]**
hitting the market every single day. No AI can

**[01:43:55,996 → 01:43:58,806]**
really browse its way through all of that. But

**[01:43:59,016 → 01:44:02,316]**
there are services that do this full time.

**[01:44:02,346 → 01:44:04,176]**
These companies are scraping and

**[01:44:04,196 → 01:44:05,996]**
organizing all this data around

**[01:44:06,016 → 01:44:08,326]**
the clock. And the data is sitting there,

**[01:44:08,346 → 01:44:10,716]**
waiting to be tracked and updated every day.

**[01:44:10,736 → 01:44:13,866]**
And what we need to do is plug Claude into that.

**[01:44:13,886 → 01:44:16,766]**
And that's what this new skill and MCP

**[01:44:16,786 → 01:44:19,086]**
does. Think of it like a powerhouse.

**[01:44:19,446 → 01:44:22,036]**
The electricity, the insider information,

**[01:44:22,056 → 01:44:23,876]**
is running through those walls,

**[01:44:23,896 → 01:44:26,796]**
and we basically plug our Claude into that,

**[01:44:26,816 → 01:44:29,436]**
so we can use it. These services have data

**[01:44:29,456 → 01:44:32,176]**
flowing through their systems, and the MCP is

**[01:44:32,196 → 01:44:35,226]**
the plug that connects Claude to their data.

**[01:44:35,376 → 01:44:37,116]**
And once it's plugged in,

**[01:44:37,136 → 01:44:39,716]**
Claude can pull from it any time, it becomes

**[01:44:39,736 → 01:44:42,366]**
a new skill, and Claude goes from being smart,

**[01:44:42,396 → 01:44:45,176]**
but working with nothing, to being smart, and

**[01:44:45,196 → 01:44:47,826]**
seeing what the big players in the market see.

**[01:44:48,096 → 01:44:50,666]**
Next what we're gonna do is give our Claude the

**[01:44:50,686 → 01:44:55,026]**
power to access these services, and it's
gonna be super easy. So let's get into that.

**[01:44:55,046 → 01:44:57,846]**
And just to emphasize why I'm so excited about

**[01:44:57,866 → 01:45:01,086]**
this strategy I'm about to show you, this is me

**[01:45:01,206 → 01:45:03,376]**
just backdating, let's say a year ago,

**[01:45:03,396 → 01:45:06,116]**
you're copying the same thing and the

**[01:45:06,136 → 01:45:08,796]**
same strategy by copying the smart money,

**[01:45:09,786 → 01:45:12,086]**
you can see if you were following the

**[01:45:12,106 → 01:45:14,946]**
SNP 500, you were just buying and holding it,

**[01:45:15,576 → 01:45:19,296]**
you would have made around starting at a 50k

**[01:45:19,316 → 01:45:22,916]**
account, you would have made around 5750,

**[01:45:22,936 → 01:45:24,816]**
which is around 15%.

**[01:45:24,966 → 01:45:27,576]**
So you would have made 15% more money. But

**[01:45:27,756 → 01:45:31,806]**
if you copied McCall, then you would have made

**[01:45:31,986 → 01:45:35,436]**
674 by the end of the year,

**[01:45:35,456 → 01:45:38,586]**
which is a 34.8% return.

**[01:45:38,616 → 01:45:41,676]**
You can see how these politicians have access

**[01:45:41,696 → 01:45:43,836]**
to this insider information, and they can

**[01:45:43,856 → 01:45:46,326]**
outcompete everybody. And that's what I'm

**[01:45:46,346 → 01:45:48,526]**
gonna show you how to do. And just to make sure

**[01:45:48,546 → 01:45:51,116]**
our strategies are organized, what I'm gonna

**[01:45:51,136 → 01:45:53,616]**
do is go to another paper trading account.

**[01:45:53,826 → 01:45:57,306]**
So right here, I'm gonna use this summon

**[01:45:57,546 → 01:45:59,826]**
account, and I'm gonna do the same thing.

**[01:46:00,336 → 01:46:02,696]**
Okay. So I'm gonna hit generate keys,

**[01:46:02,716 → 01:46:04,836]**
I'm gonna take all of the stuff, or I can

**[01:46:04,856 → 01:46:08,106]**
just copy and paste this, and then I can go back

**[01:46:08,126 → 01:46:11,836]**
to my clod. And then

**[01:46:11,856 → 01:46:14,526]**
what I'm gonna do now is make a new session.

**[01:46:14,546 → 01:46:17,646]**
So hit new session and I'm gonna paste this in.

**[01:46:17,976 → 01:46:21,356]**
And now what I'm gonna do is the service we're

**[01:46:21,376 → 01:46:23,586]**
gonna use to track these politicians.

**[01:46:23,606 → 01:46:24,786]**
If you go to Google,

**[01:46:24,806 → 01:46:27,036]**
I'm gonna do CapitalTrades.

**[01:46:27,186 → 01:46:29,356]**
And Capital Trades is a free service

**[01:46:29,376 → 01:46:31,296]**
that you can be using to see

**[01:46:31,686 → 01:46:33,836]**
which politician is trading what and

**[01:46:33,856 → 01:46:36,516]**
what's going on. So I'm gonna copy this URL.

**[01:46:36,536 → 01:46:37,866]**
I'm gonna go back to my

**[01:46:37,886 → 01:46:41,316]**
Claude and go right here. Okay.

**[01:46:41,336 → 01:46:43,946]**
So now by the way, the prompts are gonna

**[01:46:43,966 → 01:46:46,326]**
be in the description below. But right now.

**[01:46:47,196 → 01:46:50,946]**
Hey. So I'm trying to set up a copy trading bot.

**[01:46:51,516 → 01:46:54,746]**
When I've also given you access to my

**[01:46:54,766 → 01:46:57,766]**
Alpaca account, I want you to make a new

**[01:46:57,786 → 01:47:00,636]**
folder inside this folder.

**[01:47:00,996 → 01:47:02,836]**
So we can have this running and

**[01:47:02,856 → 01:47:04,686]**
have these schedules done. But

**[01:47:05,556 → 01:47:08,226]**
what I want you to do is number one,

**[01:47:08,316 → 01:47:11,366]**
find a politician who has been having really

**[01:47:11,386 → 01:47:12,966]**
good success in the stock market

**[01:47:12,986 → 01:47:15,726]**
currently and is actively trading. And then

**[01:47:15,846 → 01:47:19,176]**
what I want you to do is copy their trades.

**[01:47:19,196 → 01:47:21,016]**
Okay, so set up your cron

**[01:47:21,036 → 01:47:22,416]**
jobs and your schedules.

**[01:47:22,436 → 01:47:24,686]**
So you're always looking and using

**[01:47:24,706 → 01:47:26,976]**
capital trades to see what they're up to.

**[01:47:27,096 → 01:47:29,566]**
And copy those trades. Make sure you buy,

**[01:47:29,586 → 01:47:32,286]**
sell the same options that they knew,

**[01:47:32,306 → 01:47:36,846]**
whatever you need to, just copy them, and
then we're gonna be tracking that over time.

**[01:47:36,866 → 01:47:40,376]**
Alright. And you're gonna be using the Alpaca

**[01:47:40,396 → 01:47:42,756]**
account that I just posted the image of.

**[01:47:45,906 → 01:47:47,506]**
Great. I'm gonna hit bypass

**[01:47:47,526 → 01:47:49,866]**
permissions, enter bypass mode, and then

**[01:47:49,886 → 01:47:52,056]**
hit enter. Alright, that was super easy.

**[01:47:52,076 → 01:47:54,276]**
Let me wait for this to finish, and we can

**[01:47:54,296 → 01:47:56,766]**
see what's going on. Okay, so it just got done,

**[01:47:56,786 → 01:47:59,086]**
and I see in my schedule it's already

**[01:47:59,106 → 01:48:01,176]**
set a schedule to see what

**[01:48:01,196 → 01:48:03,456]**
these politicians are doing.

**[01:48:03,476 → 01:48:06,066]**
And then I actually also asked it,

**[01:48:06,096 → 01:48:08,206]**
who are you copy trading and why?

**[01:48:08,226 → 01:48:10,386]**
And it shows Michael

**[01:48:10,746 → 01:48:13,616]**
McCao. Alright, very interesting.

**[01:48:13,636 → 01:48:15,456]**
And why is basically

**[01:48:15,936 → 01:48:19,206]**
Okay. And why the algorithm picked him

**[01:48:19,226 → 01:48:21,526]**
over the others? Because it seems like he is

**[01:48:21,546 → 01:48:24,006]**
very active right now and he's the top trader.

**[01:48:24,246 → 01:48:26,076]**
Interesting. The trades may be

**[01:48:26,096 → 01:48:29,136]**
slightly stale, but the nature of

**[01:48:29,316 → 01:48:31,626]**
how they disclose, we still get a lot

**[01:48:31,646 → 01:48:36,216]**
of gains because mostly Congress can buy
like two years out or something like that.

**[01:48:36,366 → 01:48:38,546]**
So they don't do data trading and they're

**[01:48:38,566 → 01:48:40,836]**
not allowed to do it. That's why even if we're

**[01:48:40,856 → 01:48:43,836]**
a little late because we know about it later,

**[01:48:44,016 → 01:48:46,236]**
we can still make those gains.

**[01:48:46,256 → 01:48:48,466]**
And just to reiterate, you can see this is a

**[01:48:48,486 → 01:48:50,606]**
simulation for the year, if we started

**[01:48:50,626 → 01:48:52,446]**
one year ago and did this exact same

**[01:48:52,466 → 01:48:54,906]**
thing. If we copy this exact same strategy,

**[01:48:54,926 → 01:48:58,536]**
this bot would have made an extra 9,650,

**[01:48:58,556 → 01:49:00,946]**
thousand six hundred fifty dollars.

**[01:49:01,086 → 01:49:03,736]**
in comparison to the SP,

**[01:49:03,756 → 01:49:06,246]**
which would have only made around $7,000.

**[01:49:06,666 → 01:49:09,476]**
So that's a 2.2x return over

**[01:49:09,496 → 01:49:13,626]**
the SP 500, and that's how these guys
just stay so rich, it's kind of crazy.

**[01:49:15,516 → 01:49:17,436]**
So with that out of the way,

**[01:49:17,456 → 01:49:19,746]**
now I'm gonna show you the third strategy,

**[01:49:19,766 → 01:49:22,316]**
which is a strategy that really advanced

**[01:49:22,336 → 01:49:24,986]**
people use, which means you can get paid

**[01:49:25,006 → 01:49:27,216]**
no matter which direction the stock moves.

**[01:49:27,486 → 01:49:29,856]**
And to understand that, I'm gonna explain

**[01:49:29,876 → 01:49:32,406]**
how options work. Okay, so what is an option?

**[01:49:32,556 → 01:49:35,366]**
Well, an option is basically a contract. When

**[01:49:35,386 → 01:49:39,496]**
two people agree to do a deal, and let me show
you this with something you already may know.

**[01:49:39,516 → 01:49:41,576]**
Okay, so let's say you pay your car insurance

**[01:49:41,596 → 01:49:43,566]**
company a hundred dollars a month. In

**[01:49:43,586 → 01:49:45,266]**
exchange, you get the right to

**[01:49:45,286 → 01:49:47,466]**
file a claim if something goes wrong.

**[01:49:47,486 → 01:49:49,686]**
And if you crash, the insurance covers

**[01:49:49,706 → 01:49:51,536]**
it, you're protected. And if nothing

**[01:49:51,556 → 01:49:53,776]**
happens, they keep your hundred bucks.

**[01:49:53,796 → 01:49:58,266]**
They're basically getting paid to take on the
risk. Now, look at this exact same structure.

**[01:49:58,286 → 01:50:00,096]**
What happens is you pay a premium to

**[01:50:00,116 → 01:50:03,056]**
another trader where you get the right to buy

**[01:50:03,076 → 01:50:05,946]**
or sell a stock at a locked price.

**[01:50:06,066 → 01:50:09,066]**
Okay, and if the stock moves your way,

**[01:50:09,086 → 01:50:12,336]**
you can exercise that contract and profit.

**[01:50:12,546 → 01:50:14,646]**
If the stock doesn't move your way,

**[01:50:14,836 → 01:50:16,416]**
the contract will expire.

**[01:50:16,506 → 01:50:18,836]**
They keep your premium. It's the same

**[01:50:18,856 → 01:50:21,366]**
deal. You basically paid for protection.

**[01:50:21,696 → 01:50:23,646]**
They got paid for the risk.

**[01:50:23,666 → 01:50:26,406]**
And here it is next to each other row by row.

**[01:50:26,426 → 01:50:28,706]**
It's identical. The premium, the right

**[01:50:28,726 → 01:50:30,946]**
to act, the expiration date, and if nothing

**[01:50:30,966 → 01:50:33,246]**
happens, the other side keeps your money.

**[01:50:33,366 → 01:50:36,786]**
That's all an option is insurance on a stock.

**[01:50:36,816 → 01:50:38,376]**
Okay. And to dive in,

**[01:50:38,396 → 01:50:40,866]**
there are only two types of options.

**[01:50:40,886 → 01:50:42,966]**
A call option gives you the right to

**[01:50:42,986 → 01:50:45,096]**
buy a stock at a locked-in price.

**[01:50:45,186 → 01:50:48,216]**
Say Apple is at 200.

**[01:50:49,026 → 01:50:50,786]**
You can buy a call option with a

**[01:50:50,806 → 01:50:52,956]**
strike price of 210.

**[01:50:53,256 → 01:50:56,556]**
That means if Apple goes to let's say 230

**[01:50:56,616 → 01:50:59,796]**
before your contract expires, you can buy it

**[01:50:59,816 → 01:51:03,486]**
at 210 and pocket that 20 difference.

**[01:51:03,696 → 01:51:06,186]**
If Apple stays below 210,

**[01:51:06,206 → 01:51:08,166]**
your contract expires and you lose

**[01:51:08,186 → 01:51:10,656]**
the premium you paid. That's your max loss.

**[01:51:10,676 → 01:51:14,676]**
Think of it like putting a deposit on an
apartment, you'll pay $500 to lock in

**[01:51:14,696 → 01:51:17,906]**
the rent for $2,000 for 30 days. If the rent

**[01:51:17,926 → 01:51:20,776]**
price jumps to $2500, you got a deal.

**[01:51:20,796 → 01:51:23,316]**
If they don't, you lost that $500 deposit.

**[01:51:23,346 → 01:51:26,706]**
And on the other side is a put option.

**[01:51:26,906 → 01:51:28,986]**
The put option gives you the right to

**[01:51:29,006 → 01:51:31,056]**
sell a stock at a locked in price.

**[01:51:31,206 → 01:51:34,936]**
Say you own Apple at $200, you buy a put

**[01:51:34,956 → 01:51:37,746]**
option with a strike price of $190.

**[01:51:37,836 → 01:51:40,656]**
If Apple drops to $170,

**[01:51:40,676 → 01:51:44,366]**
you can sell it at $190 instead of $170. The

**[01:51:44,386 → 01:51:46,686]**
put basically protected you from the drop.

**[01:51:46,706 → 01:51:49,016]**
That's the insurance side. You paid a premium

**[01:51:49,036 → 01:51:51,016]**
to protect yourself against the price

**[01:51:51,036 → 01:51:53,256]**
draw. Why this is interesting is because with

**[01:51:53,276 → 01:51:55,336]**
stocks and options, you can actually flip

**[01:51:55,356 → 01:51:57,726]**
the table and become the insurance as well.

**[01:51:57,846 → 01:52:01,536]**
So that is called Selling Options.

**[01:52:01,556 → 01:52:04,326]**
So when you sell an option, you basically

**[01:52:04,346 → 01:52:06,566]**
become the insurance company. You're the

**[01:52:06,586 → 01:52:08,616]**
one that's collecting the premiums.

**[01:52:08,636 → 01:52:11,766]**
So someone pays you for a contract,

**[01:52:11,796 → 01:52:13,636]**
and most of the time, that

**[01:52:13,656 → 01:52:17,316]**
contract expires without anything
happening, and you keep the money.

**[01:52:17,336 → 01:52:19,706]**
And the cool part is the insurance companies

**[01:52:19,726 → 01:52:21,516]**
make billions doing this.

**[01:52:21,536 → 01:52:23,166]**
They collect premiums after

**[01:52:23,186 → 01:52:25,086]**
premiums from millions of people,

**[01:52:25,106 → 01:52:27,876]**
and pay out on a small percentage of claims.

**[01:52:28,056 → 01:52:29,856]**
The math basically works

**[01:52:29,876 → 01:52:31,596]**
in their favor over time.
