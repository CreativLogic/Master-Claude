# Day 8 — Let Claude Scrape the Web for You

**Video slice:** `00:54:00` → `01:04:00`  
_(source: `transcripts /full transcript.md`)_

---

## Transcript

**[00:54:00,791 → 00:54:03,081]**
alright? And it becomes really simple to see

**[00:54:03,101 → 00:54:05,701]**
and manage all your schedule tasks and

**[00:54:05,721 → 00:54:08,341]**
all your skills, so you know where everything

**[00:54:08,361 → 00:54:09,701]**
is, all in one place. Your

**[00:54:09,721 → 00:54:12,074]**
connectors, all of these are in one place,

**[00:54:12,182 → 00:54:13,942]**
Alright, the weekly report is on a

**[00:54:13,962 → 00:54:17,802]**
schedule. Now it's running every Monday
automatically, and Alex doesn't have to

**[00:54:17,822 → 00:54:22,682]**
think about it anymore. But then something
happens. One of Bookton's agency customers

**[00:54:22,702 → 00:54:25,292]**
that runs a travel agency reaches out.

**[00:54:26,012 → 00:54:28,502]**
And they know that Alex has been doing a lot

**[00:54:28,522 → 00:54:30,932]**
of AI stuff. And says, hey Alex, you're the

**[00:54:30,952 → 00:54:32,582]**
AI guy, and I've got a problem.

**[00:54:32,602 → 00:54:35,502]**
My team spends the first few hours every

**[00:54:35,522 → 00:54:39,932]**
morning checking hotel prices across five
different destinations for our clients.

**[00:54:40,112 → 00:54:42,662]**
They check stuff like Booking.com, Hotels,

**[00:54:42,682 → 00:54:45,042]**
Expedia. All these. Literally

**[00:54:45,062 → 00:54:46,962]**
refreshing every tab and writing down

**[00:54:46,982 → 00:54:49,082]**
numbers into a spreadsheet. Every day.

**[00:54:49,102 → 00:54:51,482]**
And these prices change constantly,

**[00:54:51,872 → 00:54:54,192]**
and our clients expect us to book at the right

**[00:54:54,212 → 00:54:56,872]**
time. Is there a way we can automate this? And

**[00:54:56,892 → 00:54:58,992]**
Alex thinks about this. And that's kind

**[00:54:59,012 → 00:55:00,752]**
of the same pattern as the weekly

**[00:55:00,772 → 00:55:03,092]**
report. It gathers data, it processes it,

**[00:55:03,112 → 00:55:05,552]**
logs it, and alerts if there's any changes.

**[00:55:06,902 → 00:55:11,842]**
And except Except, instead of pulling from
Google Drive, we're just pulling from other

**[00:55:11,862 → 00:55:14,192]**
hotel websites. One problem, though.

**[00:55:14,212 → 00:55:16,772]**
Those hotel websites don't have connectors.

**[00:55:16,952 → 00:55:19,722]**
There's no booking.com toggle on Claude's

**[00:55:19,742 → 00:55:22,182]**
settings. And if Claude tries to visit

**[00:55:22,202 → 00:55:24,592]**
those sites directly, it gets taken down by

**[00:55:24,612 → 00:55:27,152]**
CAPTCHA's spot detectors, etc.

**[00:55:27,392 → 00:55:29,422]**
Now, Alex knows how to fix this,

**[00:55:29,442 → 00:55:34,132]**
and this is where things get interesting
because what Alex is about to learn doesn't

**[00:55:34,152 → 00:55:36,372]**
just solve Marcus's problem, it unlocks a

**[00:55:36,392 → 00:55:38,702]**
whole new category of what Claude can do.

**[00:55:38,855 → 00:55:40,775]**
So I'm gonna show you two ways of how we

**[00:55:40,795 → 00:55:44,705]**
can tackle that. And the first way is we're
gonna get Claude to control our browser.

**[00:55:44,725 → 00:55:46,945]**
And the way we're gonna do that is in Google,

**[00:55:46,965 → 00:55:49,055]**
we're just gonna do Chrome Web Store.

**[00:55:49,075 → 00:55:51,635]**
Make sure you have Chrome downloaded. And go

**[00:55:51,655 → 00:55:55,475]**
here. And then type in Claude.

**[00:55:55,535 → 00:55:58,275]**
Make sure you download the Claude extension,

**[00:55:58,295 → 00:56:00,755]**
okay? So I added the Claude extension.

**[00:56:01,295 → 00:56:03,605]**
And then I'm going to log in with Claude.

**[00:56:03,625 → 00:56:05,985]**
Cool. So I just downloaded it, and I'm gonna

**[00:56:06,005 → 00:56:08,145]**
pin it right here, and right here, if I click

**[00:56:08,165 → 00:56:10,085]**
this, you see Claude.

**[00:56:10,345 → 00:56:13,085]**
I have to hit I understand. Next. Next.

**[00:56:13,105 → 00:56:15,785]**
Let's go. And right here on the bottom.

**[00:56:15,855 → 00:56:18,215]**
What I want to do is ask without asking.

**[00:56:18,235 → 00:56:19,455]**
Act without asking.

**[00:56:19,475 → 00:56:23,225]**
Then I'm gonna hit this button right here.

**[00:56:24,275 → 00:56:26,195]**
Enable with fast mode. Cool.

**[00:56:26,215 → 00:56:28,485]**
Alright, now C Claude

**[00:56:28,505 → 00:56:31,085]**
should be able to control our browser.

**[00:56:31,205 → 00:56:33,315]**
So I could be like And what I'll

**[00:56:33,335 → 00:56:35,345]**
show you is there's two ways you can

**[00:56:35,365 → 00:56:37,545]**
use this. One of them is just through this

**[00:56:37,565 → 00:56:39,835]**
chat box right here, just I can be like Hey,

**[00:56:39,855 → 00:56:42,315]**
can you open up Google Flights and

**[00:56:42,335 → 00:56:44,945]**
Booking.com on my browser, please.

**[00:56:46,555 → 00:56:49,115]**
This is pretty simple. Uh nothing crazy.

**[00:56:52,985 → 00:56:55,525]**
And you see right now. It just opened up Google

**[00:56:55,545 → 00:56:59,525]**
Flights and Booking.com. So it can control
your browser, it can take actions on it, etc.

**[00:56:59,545 → 00:57:04,085]**
Okay, the second way you can control this is
if I go back to my Claude app, and right here,

**[00:57:04,295 → 00:57:06,345]**
uh let's say go to co work and let's

**[00:57:06,365 → 00:57:08,405]**
make a new task. Right here.

**[00:57:08,615 → 00:57:12,005]**
Um we want to do is hit this plus button, and

**[00:57:12,025 → 00:57:15,935]**
then go to connectors, and this is also a
connector, and that's called Claude in

**[00:57:15,955 → 00:57:19,685]**
Chrome. So if you turn that on, you can
also control it like this. Be like,

**[00:57:20,835 → 00:57:24,075]**
Hey, can you open Chrome. And in Chrome,

**[00:57:24,345 → 00:57:26,765]**
can you go to Booking.com

**[00:57:26,785 → 00:57:28,855]**
and search for let's say the nearest

**[00:57:28,875 → 00:57:31,395]**
hotels near the LA Convention Center.

**[00:57:31,415 → 00:57:33,945]**
Check in at April 22nd,

**[00:57:33,965 → 00:57:35,775]**
and check out at April 24th.

**[00:57:36,045 → 00:57:38,295]**
For two adults, sort by the lowest price,

**[00:57:38,315 → 00:57:42,475]**
and take a screenshot of the results so I can
see what's available. Pull the top ten hotels

**[00:57:42,495 → 00:57:44,315]**
names, the ratings, the room types,

**[00:57:44,335 → 00:57:48,335]**
and the nightly prices, pull it into
a spreadsheet and save it to uh travel

**[00:57:48,355 → 00:57:51,525]**
price tracking folder in my uh uh

**[00:57:52,095 → 00:57:54,735]**
Google Drive or my Finder. So right here. I'm

**[00:57:54,755 → 00:57:56,965]**
just gonna give it access to another folder

**[00:57:56,985 → 00:57:59,625]**
just because I want to be neat. And right here,

**[00:57:59,645 → 00:58:02,745]**
let me call it uh travel create open,

**[00:58:02,765 → 00:58:04,725]**
and then allow, and then

**[00:58:04,745 → 00:58:09,215]**
let's go cool. Okay great, so you see right now
uh it's getting started on this right away,

**[00:58:09,235 → 00:58:11,235]**
and I'll come back once this is done.

**[00:58:11,410 → 00:58:14,890]**
Wanted to show you a quick peek
while it's working. So you see

**[00:58:14,910 → 00:58:16,900]**
it's making uh progress right here,

**[00:58:16,920 → 00:58:19,580]**
it set out its plan, has instructions, and

**[00:58:19,600 → 00:58:22,080]**
in this connector, if I click this, I should be

**[00:58:22,100 → 00:58:24,580]**
able to see the browser pop up on the right.

**[00:58:24,600 → 00:58:28,880]**
In a second. And you see right here, we can see
what's going on, what Cloud is doing, all the

**[00:58:28,900 → 00:58:31,140]**
screenshots it's taking, all the actions.

**[00:58:31,160 → 00:58:33,050]**
It's kinda just cool to see. But

**[00:58:33,070 → 00:58:34,960]**
um normally you can just step away.

**[00:58:34,980 → 00:58:36,820]**
Make it um do your thing.

**[00:58:37,544 → 00:58:40,214]**
Awesome, so it just got done, I can see, and

**[00:58:40,234 → 00:58:42,614]**
Cool, Claude just popped up with a new update

**[00:58:42,634 → 00:58:45,344]**
that I'll do it in a sec. But uh right now.

**[00:58:45,364 → 00:58:47,984]**
You see, it spat out this um

**[00:58:49,634 → 00:58:51,144]**
hotels nightly price?

**[00:58:51,164 → 00:58:53,744]**
Well, this is way too low. Interesting. Um,

**[00:58:54,224 → 00:58:56,324]**
and I can see in my Chrome

**[00:58:58,364 → 00:59:01,454]**
that these prices are pretty accurate.

**[00:59:01,474 → 00:59:04,144]**
Uh yeah, so that's one way to do it.

**[00:59:04,164 → 00:59:06,854]**
I personally don't like this the most because

**[00:59:07,334 → 00:59:09,504]**
Although this works,

**[00:59:09,524 → 00:59:11,924]**
it takes a long time, one.

**[00:59:11,944 → 00:59:14,534]**
Two, it consumes a lot of tokens,

**[00:59:14,684 → 00:59:16,964]**
and it's not as reliable.

**[00:59:16,984 → 00:59:19,534]**
So number two, let me show you how to actually

**[00:59:19,554 → 00:59:24,254]**
make this super reliable using an external
service, which is actually meant to do all

**[00:59:24,274 → 00:59:26,664]**
the scraping. And you can also take advantage

**[00:59:26,684 → 00:59:30,224]**
of that to do any type of scraping on the
internet that you would like. Alright?

**[00:59:30,244 → 00:59:33,504]**
Because right now, if you wanted to give
Claude browser access, you'd basically be

**[00:59:33,524 → 00:59:37,484]**
handing it the keys to your actual browser.
The one you use every day. So your Gmail, your

**[00:59:37,504 → 00:59:41,444]**
banking, your passwords, everything. And
sure, Claude has good intentions, but do you

**[00:59:41,464 → 00:59:44,484]**
really want an AI agent roaming
freely through your personal

**[00:59:44,504 → 00:59:46,804]**
browser with access to
everything on your machine?

**[00:59:46,824 → 00:59:50,164]**
One wrong move, and it's potentially
touching stuff you'd never want it near. So

**[00:59:50,184 → 00:59:53,844]**
we're going to be using FireCrawl to solve
this by giving Claude its own dedicated

**[00:59:53,864 → 00:59:57,804]**
browser, completely separate from yours.
So Cloud gets a sandboxed environment that's

**[00:59:57,824 → 00:59:59,644]**
isolated, private, and controlled.

**[00:59:59,664 → 01:00:03,804]**
And my personal favorite part about this
is that this cloud browser stays logged in.

**[01:00:03,824 → 01:00:05,964]**
So once Claude authenticates to a service you

**[01:00:05,984 → 01:00:08,204]**
need, that session is saved and persisted.

**[01:00:08,224 → 01:00:11,564]**
So next time you need it, FireCrawl
lets it remember so you can control

**[01:00:11,584 → 01:00:15,944]**
whatever access you give Claude. That's the
difference between giving your AI agent your

**[01:00:15,964 → 01:00:20,544]**
car versus giving it its own cars. And that's
how we should stay safe and use tech like this.

**[01:00:20,616 → 01:00:22,836]**
Okay, so let's set this up. And to set it up,

**[01:00:22,856 → 01:00:26,556]**
we're gonna use the service called
Firecrawl that I really like. And I'm

**[01:00:26,576 → 01:00:30,126]**
just looking for Firecrawl right here. And

**[01:00:30,756 → 01:00:35,256]**
I recommend for most of you guys, honestly,
you'll just can get away with the free plan.

**[01:00:35,636 → 01:00:38,106]**
I already have a plan because I use it so much.

**[01:00:38,156 → 01:00:40,836]**
So I'm gonna go in here. And what you want to do

**[01:00:41,076 → 01:00:43,236]**
is now we need to give our Claude

**[01:00:43,256 → 01:00:45,216]**
access to our Firecrawl. Right?

**[01:00:45,236 → 01:00:48,016]**
And this is so. Without Firecrawl, if Claude

**[01:00:48,036 → 01:00:52,386]**
would try to visit a website, it might get
blocked or it might fail. with F Firecrawl,

**[01:00:52,406 → 01:00:54,386]**
if I ask Claude to visit any website,

**[01:00:54,406 → 01:00:56,306]**
even Amazon, Firecrawl will handle

**[01:00:56,326 → 01:00:58,436]**
all that anti-bot stuff, it's like giving

**[01:00:58,456 → 01:01:00,196]**
Claude a browser that it knows how to

**[01:01:00,216 → 01:01:03,726]**
operate a lot more efficiently than
how humans are meant to do it, right?

**[01:01:03,746 → 01:01:08,856]**
and it's actually really simple to install
it, all we need to do is if you just Google Fire

**[01:01:08,876 → 01:01:11,046]**
after you have an account, FireCrawl

**[01:01:12,396 → 01:01:15,036]**
MCP. And right here.

**[01:01:15,096 → 01:01:17,226]**
You see here, I'm gonna take this,

**[01:01:17,416 → 01:01:20,236]**
and then I'm gonna go back to my Claude. And

**[01:01:20,256 → 01:01:22,346]**
then what I'm gonna do is I'm gonna go to

**[01:01:22,366 → 01:01:26,396]**
customize. And what we're gonna do is
we're adding an external connector.

**[01:01:26,416 → 01:01:28,476]**
And this is why I was showing you this,

**[01:01:28,496 → 01:01:30,896]**
because I want you to know this is how

**[01:01:30,916 → 01:01:33,106]**
we add external connectors that

**[01:01:33,126 → 01:01:35,406]**
may not be in the Claude app store,

**[01:01:35,586 → 01:01:37,786]**
and how you can inst uh uh

**[01:01:37,806 → 01:01:41,496]**
install MCPs that you may not have
access to or you want to, alright?

**[01:01:41,516 → 01:01:45,156]**
So I'm gonna hit this plus button right
here, and then I'm gonna hit add custom

**[01:01:45,176 → 01:01:49,496]**
current connector, and then I'm gonna say
fire crawl. Well. And then I'm gonna enter

**[01:01:49,516 → 01:01:51,956]**
this in. And then what I'm gonna do is paste in

**[01:01:51,976 → 01:01:55,176]**
my API key. So I'm deleting this right here.

**[01:01:55,476 → 01:02:00,216]**
And if I go back to Chrome, right here,

**[01:02:00,366 → 01:02:02,466]**
I'm going to take this key.

**[01:02:02,886 → 01:02:05,136]**
I'm gonna go back to Claude.

**[01:02:05,556 → 01:02:09,546]**
And paste this here. And hit add.

**[01:02:11,796 → 01:02:14,106]**
Great, and now you see Firecrawl has

**[01:02:14,126 → 01:02:16,176]**
been added. And I'm going to make sure

**[01:02:16,196 → 01:02:18,486]**
it always allowed. So all of the stuff.

**[01:02:18,966 → 01:02:22,276]**
Firecrawl. You can we can do it. Very simply.

**[01:02:22,296 → 01:02:24,856]**
Okay. Now it becomes super easy to use.

**[01:02:24,876 → 01:02:27,966]**
I'm just gonna hit new task. And right here,

**[01:02:27,996 → 01:02:30,486]**
you'll see if I say something like make sure

**[01:02:30,506 → 01:02:32,896]**
I choose the right project. So I can be like.

**[01:02:33,316 → 01:02:36,156]**
Hey, uh use FireCrawl to escape uh scrape

**[01:02:36,176 → 01:02:38,556]**
hotel listings near the LA Convention Center

**[01:02:38,576 → 01:02:42,646]**
on booking.com for April 20th to the 24th.

**[01:02:42,666 → 01:02:44,176]**
Pull the names for the hotel,

**[01:02:44,196 → 01:02:46,726]**
the star ratings, the room types, the prices,

**[01:02:46,746 → 01:02:48,566]**
and any discounts or deals, and then

**[01:02:48,586 → 01:02:52,836]**
organize it into a clean table, and then give
me that table. So imagine now the scraping is

**[01:02:52,856 → 01:02:54,956]**
useful once, but let's say Marcus's team

**[01:02:54,976 → 01:02:59,856]**
would need to know how the prices change day
by day. I can just be like hey, now I want you

**[01:02:59,876 → 01:03:02,376]**
to also get this and track this over time.

**[01:03:02,466 → 01:03:05,226]**
Every day, scrape the same hotels and return

**[01:03:05,646 → 01:03:07,626]**
the log of results in a spreadsheet.

**[01:03:07,646 → 01:03:09,666]**
So I want to see the log over time.

**[01:03:09,846 → 01:03:11,836]**
Each row should have today's date, the

**[01:03:11,856 → 01:03:13,666]**
hotel name, the room type, and the

**[01:03:13,686 → 01:03:15,596]**
ninthly price. Compare today's price

**[01:03:15,616 → 01:03:19,856]**
to yesterday's, if anything drops more than
forty thirty dollars, flag it. Alright. And

**[01:03:19,876 → 01:03:21,776]**
uh remember we just did scheduling,

**[01:03:21,796 → 01:03:24,016]**
so I'm like combining all of these at once. So

**[01:03:24,036 → 01:03:28,286]**
again, okay, now I'm gonna switch to Okus
actually because I realized uh this is a very

**[01:03:28,306 → 01:03:31,116]**
compound request. So hey, can you

**[01:03:31,136 → 01:03:33,486]**
schedule this to run every morning at 6 a.m.

**[01:03:33,996 → 01:03:36,666]**
Uh scrape all the hotels, and

**[01:03:36,996 → 01:03:41,226]**
maybe call the file LA Hotel Tracker.csv.

**[01:03:41,556 → 01:03:46,116]**
And also store it in my drive later.

**[01:03:46,746 → 01:03:51,336]**
Okay. And this is a pretty hefty request.

**[01:03:51,356 → 01:03:53,606]**
You see, I've been doing it a lot of things, but

**[01:03:53,626 → 01:03:58,086]**
make sure. You know, because I've connected
to Firecrawl, now I said hey use Firecrawl.

**[01:03:58,116 → 01:04:00,576]**
I'm gonna make sure in connectors, right now,
