---
layout: post
category: 翻译
tags: agile, tdd, manifesto
title: 「译」开发者是时候放弃敏捷了
---

> 原文地址：[https://ronjeffries.com/articles/018-01ff/abandon-1/](https://ronjeffries.com/articles/018-01ff/abandon-1/)
> 原文日期：May 10, 2018

# Developers Should Abandon Agile 

# 开发者是时候放弃敏捷了

### Big Business

### ?

“Agile”1 has become big business. Led, no doubt, by the Scrum Alliance’s successful Certified ScrumMaster offering, we now see hundreds, perhaps thousands of so-called “Agile” coaches and trainers, and many competing frameworks and methods. We see “Agile” leadership training, “Agile” project management offerings, and on and on.

由 SA 联盟领导的已经成功的 CSM offer，我们现在可以看到

多亏了 SA 联盟成功领导的 CSM offer，。。。

“敏捷”俨然已经成为 big business。有了 Scrum联盟® 在推动（毫无疑问）成功发起的 CSM 认证 offering，我们现在有了成百上千个的所谓“敏捷”教练和训练员，有了此起彼伏、此伏彼起的各种框架和方法论。我们有“敏捷”的领导力培训，有“敏捷”项目管理服务，如此种种。

* [ ] big business 应该是讲有很多培训和 coach，是有钱可图的生意。business 有公司、生意、业务的意思。译成「大生意」总觉得少了点什么。
* [x] 我们现在看到有数以百计、甚至数以千计的…/我们现在看到数以百计、以千计…/我们现在看到成百上千的…。最后选择了最后者，因为我觉得，数以百计、千计这个具体的数目及句子分断不需要翻译出来。因为究竟是「数以百计」，还是「甚至数以千计」，不应该是句子的重点
* [ ] competing 要译出这个前赴后继、遍地开花、雨后春笋、此起彼伏、接连不断、高潮迭起、从未止息的感觉，同时它又有竞争的意思在内。现在通过这个「此起彼伏、此伏彼起」的回复试图表达这种「竞争」和「回应」的关系
* [ ] we see 真的要翻译为「我们看到」吗？否则可以是什么？我倒觉得，它只是从 we see 开始，然后接着这个 see 顺势一笔笔铺排下去，重在铺排之感，不一定是「看见」。现译：我们有了。。。有（尊重时态）。
* [x] Linhao: 尊重 we see 的时态，是现在时，而不是完成时。真棒，时态

### Good for the enterprise

### 敏捷对大企业来说是好的

Now, many, perhaps most of these offerings are not bad things, at least for the enterprise. Organizations that try to improve usually do improve, and so even if “Agile” ideas are applied poorly, trying will almost always provide some benefits to the organization. The organization should at least get increased visibility into what’s going on, and that will often lead even the least enlightened management to make better decisions. That’s good, and I’m all for it.

其实，这些服务很多（或许是几乎所有的服务）都不算太坏，至少对大企业来说并不坏。愿意做出尝试的企业往往都能得到确实的改善。即便 "Agile" ideas are applied poorly，勇于尝试本身多多少少都会为企业带来好处。至少企业对当前活动的可视化程度提高了，而可视化几乎总是能帮助哪怕最乏新意的管理层做出更好一些的决策。

* 而这通常都能帮你做出更好的决策，哪怕你的项目管理毫无亮点可言
* 这经常能在糟糕的管理方式下迸发出高明的决策。这是好事，我完全同意
* 这通常都能促使你做出更好的决策，哪怕你的管理流程本身可能毫无亮点可言

* [ ] 记得木心在「巴哈的咳嗽曲」中提到括号的引用法，说像是古典音乐会现场，一段低低的小号旁白。这种感觉，并且一印就要全引。所以我在想，now, many, perhaps #main-topic 这个句式，是不是也可以不停顿，直接用括号译出来
* [ ] 这个 good for 要译得简练。「对。。。是好的」太冗长 - 但你又不能说「」，需要保留一丝「陈述」的语气？
* [x] 「服务并非坏事」，有这么讲的吗？服务并非不好 - 服务都不算不好 - 服务都不算太坏
* [x] try to do A usually get A, because try will almost do good。这个句子结构中，A 并不是重要的，重要的是 try 这个事情一定会带来好处，所以才能 try A 得 A，try B 得 B。因此，译文应当强化「try」，弱化「improve」
* [ ] 「敏捷的核心被糟糕落地」，有这么讲的吗？
* [ ] 尝试行为本身往往都会为组织带来或多或少的好处 -> 勇于尝试往往都会为组织带来或多或少的好处 -> 勇于尝试本身多多少少都会为企业带来好处/但尝试本身就是好的，它总会给组织带来或多或少的益处?
* [ ] 那些如此尝试了的组织，至少能得到更好的可视化 / 组织应该至少能得到提高了的可视化程度 / 至少企业的可视化程度提高了 / 
* [ ] 主干结构：「increased visibility... will often lead (adj.) management to make better decisions」。所以结构是，可视化至少能帮哪怕是最差的管理也做出没那么差一些的决策。不过「帮管理」做决策并读不通，所以牺牲了一下译为「帮管理层」做决策
* [ ] 这段原文讲得极好，然而译不出感觉 - 好多了

### Not so good for developers

### 对开发者来说并不太好

The picture is not so attractive for developers, all the people engaged in actually building the products that the “Agile” enterprises are undertaking. When “Agile” ideas are applied poorly, they often lead to more interference with developers, less time to do the work, higher pressure, and demands to “go faster”. This is bad for the developers, and, ultimately, bad for the enterprise as well, because doing “Agile” poorly will result, more often than not, in far more defects and much slower progress than could be attained. Often, good developers leave such organizations, resulting in a less effective enterprise than prior to installing “Agile”.

然而，对于开发者而言，对于所有为这些“敏捷”企业工作、实际参与产品开发的人而言，这宏伟愿景则不一定是那么回事了。When “敏捷” ideas 真的被 applied poorly，一般只会导致开发者受到更多的干扰，工作时间减少，压力变大，以及被要求「更快地开发」。这对开发者来说很不好，最终也会损害企业，因为 doing “敏捷” poorly 多数时候只会比以前带来更多的缺陷、导致更慢的开发进度。好的开发者最终也会离开这样的组织，这又使得企业的效率相比导入“敏捷”前降低许多。

* [x] picture 怎么翻译呢 - 上面那副「敏捷做得再差，只要引入就对企业多少有贡献」的 picture，感觉宏伟愿景的「宏伟」感觉欠缺了些。于是去了「宏伟」，仅留「愿景」
* [x] attractive 怎么翻译呢 - 上面的 picture 非常吸引，但实际不是很吸引。译「名副其实」，感觉「其实」译到了，但无所谓「名」之存在。做的不如想的说的那么吸引，没那么好，管理层幻想呢，骗人呢。怎么译出这个 attractive 的感觉来了；译「不一定是那么回事」，是意译。另外，这部分被放在句子末尾，与整个句子的耦合度降低了，感觉灵活了
* [x] not so attractive for developers, all the people … 后面能接一整个从句也是醉了。改换了一下语序，感觉语感比较好些了
* [x] more interference, less time, higher pressure 要译出感觉啊 - less time, higher pressure 更少的时间来做工作，更大的压力 -> 工作时间减少、压力变大，句式改换，觉得还不错。
* [ ] when agile ideas are applied poorly 是个串联上下的词语，怎么翻译呢？

### Safe, not SAFe

### 安全，而非 SAFe

My thinking is taken from something Kent Beck said over a decade ago. I would like the world to be safe for developers. At my core, I am a developer, despite years of management, consulting, and writing. I worked with code earlier today, and do so every week if not daily. So it breaks my heart to see the ideas we wrote about in the Agile Manifesto used to make developers’ lives worse, instead of better. It also saddens me that the enterprise isn’t getting what it could out of the deal, but my main concern is for the people doing the work.

我的这些思考，Kent Beck 十几年前早就提到过。我一直希望开发者的工作环境可以是安全的。我一直以开发者自居，尽管我也做过几年管理、咨询和写作。今早我还在写代码，我每周都写——如果不是每天的话。因此这些年间，每每看到我们在 *敏捷宣言* 中写下的那些（优秀的）思想不仅没有让开发者的工作环境变得更好，反而使他们陷入了另一种苦海时，我总觉得十分心痛。对于大企业们没能得到本可获得的收益，我也很伤心，但我最关心的还是那些一线的开发者们。

* [x] world 世界在这里是很突兀的。编程就编程，开发者就开发者，跟世界没什么关系的。很显然需要意译
* [x] at my core - One of my most fundamental beliefs/personal commitments.
* [x] main concern is for the people doing the work。那些实际做着事的人，这样有味道，「一线的开发者」是意译了

Over a period of years, I’ve heard from many developers who say that “Agile” sucks. (Usually they say that “Scrum” sucks, because most people in organizations trying to do “Agile” are in organizations trying to do Scrum.) I’ve tried to help those people understand that their organization is doing “Agile” wrong: they’re not doing what the Manifesto authors recommended, what Scrum recommends, what the many Agile Software Development experts recommend. My hope was that people within the sound of my voice would help themselves, and their organizations, move closer to the real ideas behind Manifesto Agile and away from the many forms of Faux Agile or Dark Agile that we see around us.

过去十年间，我听到很多开发者在说，“敏捷”太垃圾了（一般他们说的是 “Scrum” 太垃圾，因为大多数人所在的公司，它们想做的“敏捷”其实是 Scrum）。我尝试过想让这些人知道，他们公司把“敏捷”都做错了：它们所做的其实与 *敏捷宣言* 的作者们所推荐的做法背道而驰，与 Scrum 所推荐的做法背道而驰，与 Agile Software Development 的专家们所推荐的做法也背道而驰。我希望的是，我所说的这些人，能够起来帮助自己，帮助你们的公司：向 *Manifesto 敏捷* 背后真正的思想靠近一些，离身边那些假敏捷、*黑暗敏捷* 及其许多的变种做法远一些。

* [x] most people in organizations trying to do 'Agile' are in organizations trying to do Scrum - 大多数人所在的公司，它们想做的「敏捷」其实是 Scrum 这个译法好不好
* [x] ... they are doing wrong: they're not doing what the ... recommend。为了译三个 recommend 的排比，一是调整了句式，把真正排比的 xxx recommends 重点部分，调整成了中文的 与 xxx 推荐的背道而驰，实际在原文中 「not（背道而驰）」这个含义没有参与显式排比；二是「与…所推荐的做法背道而驰」这个点重复了三次，似乎有点逻辑。但读起来，还是得到了这个排比所需要的一种语感。不知道这个取舍实际效果如何？
* [ ] 作者后文说用 manifesto agile 来指代真敏捷，前后呼应的， 这个地方待全局统一翻译一下

That’s not really working out. Efforts like “Advanced” Scrum training and certifications, and leadership-focused efforts are good, and may bear fruit over time, but they will proceed at best slowly and may never really filter down to the poor developers in the “Code Mines of Ohio”.

光靠培训是不行的。搞那些「高级」Scrum 培训、Scrum 证书，以及领导力培训的做法和想法是好的，最终可能也会开花结果，但这一定是个长期的过程，并且可能最终都无法解救到底层那些可怜的开发者，那些 code mines of ohio。

* [x] that's not really working out 的 that 指的是什么？就译为「培训」：「光靠培训是不行的」这样我觉得不错
* [x] may never really filter down to the poor developers。。。这句很好，没翻出感觉 - 现在有点感觉了。
* [ ] code mines of Ohio 是什么意思？

It’s time to try something new, and here it is:

是时候尝试些新的做法了，以下则是我的建议：

## Developers should abandon “Agile”

## 开发者应放弃（所谓的）“敏捷”

Mind you, developers will continue to find themselves working under Scrum conditions, or in organizations using SAFe. Some may even encounter more obscure “Agile” approaches like “DAD”, or, if they’re fortunate, more enlightened approaches like “Modern Agile”, or “Heart of Agile”. Some may even be lucky enough to find themselves doing Extreme Programming, also known as “The Scrum That Actually Works”.

Mind you 啥意思？？有些人可能会遇到一些让人费解的“敏捷”，比如 DAD 等；幸运一点的可能遇到一些好点儿的，比如「现代敏捷」、「敏捷之心」等。更幸运一点的呢遇到了极限编程——也被称为「那种真正有用的 Scrum」。

* 这篇文章很重要的一个亮点，在于用双引号括起来的敏捷，不是真正的敏捷。很有一种道可道非常道的感觉，很有一种「如来非如来，是名如来」的二元对立破除的过程。
* 这里要查一下 DAD 这些是什么
* modern agile 翻出来就走味儿了呢

### Detach from named methods

### 不要执着于方法论名字

Be that as it may, I believe that developers should detach their thinking from any particular named “Agile” method. Instead, they should turn their attention and learning to ways of doing software development that will work within any of those “Agile” methods. Those development approaches, to me, involve use of practices such as, but not limited to, those of Extreme Programming. More generally, developers’ work should adhere to the foundational principles that support Agile Software Development, as we had in mind when we wrote the Manifesto. Today, I’d summarize the ideas this way:

be that as it may，我认为开发者应该有独立的思考，而不应执着于任何“敏捷”的方法论本身。他们应该将注意力转移到正确的软件开发方法——那些放诸任何“敏捷”实践上都能有效工作的开发方法上。这些编程实践，对我而言， involve use of practices such as but not limited to，也意味着合理应用极限编程的实践。或者这么说，开发者应该遵循一些基本原则，这些基本原则是支撑敏捷软件开发的基石，也是我们当初编写敏捷宣言时想要表达的东西。今天，我将这样来表达这些基本原则：

No matter what framework or method your management thinks they are applying, learn to work this way:

* Produce running, tested, working, integrated software every two weeks, every week. Build your skills until you can create a new fully operational version every day, twice a day, multiple times a day.
* Keep the design of that software clean. As it grows, the design will tend to become complex and crufty. Resist and reverse this tendency consciously, refactoring in tiny continuous steps, all the time, so that your rate of progress is as steady and consistent as possible.
* Use the current increment of software as the foundation for all your conversations with your product leadership and management. Speak in terms of what’s ready to go, and in terms of what they’d like you to do next.

无论你们的流程或管理者认为他在推动的框架或方法论是什么，请尝试按如下的方式工作：

- 产出可运行的、经过测试的、可工作的、经过集成的软件，每两周就产出一次，每周产出一次。不断强化你的技能树，直到你能每天构建出一个完全可工作的软件、每天构建两次、每天 n 次
- 保持软件设计整洁。软件变大时，软件设计通常倾向于变得更复杂，更笨重。你要刻意对抗、反转这种趋势，你要不断对代码进行细小的重构。每时每刻都要这么做，这样你的开发速率才可能尽量平稳、可持续
- 与产品负责人和管理者沟通时，永远都以当前的 increment 为对话基础。沟通时，以已经完成的工作、以他们下一步希望做什么为主题

This is the development team’s best hope for a reasonable life. By keeping the software always ready to go, we can hit any deadline with the best possible result. “Is today the deadline? Here’s what we’ve got, it’s ready to ship.”

对于开发者来说，这应该是他们所能拥有最好的 life 了。如果我们能让软件随时处于可发布状态，那么对于任何可能的 deadline 我们都能拿出当下最好的可工作的软件来。「今天就要上线么？这是我们最新的软件，我们已经准备好发布了。」

As we lead up to the deadline, and as we negotiate what to do next, the running software in our hands lets us keep the conversation focused on the next, most important thing to do, rather than the near-infinite list of things they think they want. It’s not easy to change the focus from “do all this” to “do this next”, but it’s our best chance for a decent life, and it’s often quite possible to get the focus to change, as we work to collaborate with our leaders rather than just work under them.

一旦我们随时能够面对最后期限，并且对下一步做什么有沟通空间，手里这个随时可运行的软件将让我们可以专注在最重要的工作上面，而非一个几乎没有终点的需求列表，一个他们觉得他们需要的需求列表。将关注重心从「做完这些」转移到「接下来做这个」上来并不容易，但这是我们拥有一个 decent life 的最大可能了。如果能与我们的领导一起工作，而不是在他们领导下工作，那就很可能让关注重心真正地转变过来。

* detached from named method，这个 named method 也没译好
* increment 好像是个 Scrum 的术语
* by doing xxx, we can do xxx 翻译为「如果做到 xxx，我们就能 xxx」是否合适？
* as we lead up 这句不一定翻译的好
* work under them 翻译为「在他们领导下」好像不太好，毕竟某种程度的「领导」肯定是存在的

## Under an imposed approach

### ?

Too commonly, the “Agile” approach a team uses has been imposed. Larger-scale “Agile” methods appear actually to recommend imposition of process. I include here the so-called “SAFe” method, Scaled Scrum, and LeSS among others. These are pitched to the enterprise, and the enterprise is expected to “install” them, or “roll them out”.

很常见的一种情况是，团队是被迫使用“敏捷”的。越大型的所谓“敏捷”方法论似乎确实鼓励一些过重的流程。这里我要特别点名几个：所谓的「SAFe」方法论、Scaled Scrum（大型 Scrum） 方法论，以及 LeSS 方法论。这些方法论为自己打上「企业级」的标签，并认为企业理应导入它们，or roll them out。

* recommend imposition of process 这句怎么翻出味道来呢。imposition 流程是过分呢，不当呢，过重呢，还是哪个形容词
* roll them out 啥意思

As a developer, you can be sure that this roll-out will not go smoothly nor in a truly Agile fashion. You’ll not likely be trained, much less educated, much less given the real help you need to do your job. Your leadership will perhaps have been trained, perhaps for as much as an entire week(!), to prepare them to bring about this sweeping change in the organization’s approach to product and software development. The road is likely to be a bit bumpy.

作为开发者，你可以十分确定，这些方法论的导入必不顺畅，也一定不会带来真正的敏捷fashion。他们不太可能会培训你，更不太可能让你真的学到些什么，更不可能对你的日常工作有什么实质性的帮助。你领导可能会有一些培训，可能是那种一整周的培训（！），以使他们做好准备，来为组织的产品和软件开发过程推行这种影响重大的方法论。转型之路很可能会有一些崎岖。

* truly agile fashion 写的好，然而怎么翻译出味道呢？
* sweeping change 怎么翻译

### Real software is your only hope - Leia (private communication)

### 真正的软件是你唯一的依靠

But if you can reliably select work to do over the course of a “Sprint” or “boxcar” or whatever your release train conductor starts calling the time period, and accomplish that work, packaging it up in a running, tested, integrated, ready-to-go new version of the system, you’ll be equipped to do the best it’s possible to do.

* 难道还有 not real software 吗？real software 指的是什么？这段不太清楚怎么翻

### Slow down to deliver

### 降低一些交付速度

*If* you can’t quite manage that, I’d advise you to take on less work in each time period, until you’ve taken on a small enough batch that you can actually get it done. This will be difficult! People will push you to “go faster”. Do your best! Under pressure to sign up for more than you can do, I’d suggest that you work on one or two of the items, complete those entirely — fully packaged, tested, and working — and then do another, so that at the end of the boxcar you have something that you can absolutely call completed. Take the inevitable abuse for not completing everything, and try to drive planning and expectations from reality, not the fantasy of what was demanded, that you never had a chance to do.

*如果*承诺的东西太多，我建议你在每个迭代少承诺一些工作，少到你有信心真正完成承诺的那部分工作为止。这是很困难的！别人会 push 你多做一些。尽可能不要屈服。与其顶着压力，承诺超过你真实工作量的工作，我建议你不如一次只专注在一到两个事情上，把他们完全完成——完全打包、测试、可工作——之后，再做下一件事情。这样在迭代结束时，你才能有一些可以百分百叫做完成了的工作。take the inevitable abuse for not completing everything, 尝试以现实出发来驱动计划和期望设置，而不是别人幻想中的那些要求，那些你根本不可能做完的事情。

* boxcar 是个什么术语？
* you can absolutely call completed

It won’t be perfect, and for a while at least, it probably won’t be fun. It’s just the best chance I know to survive down in that code mine. Having a completed running product slice is the best way I know to possibly turn the situation around. In a bad situation, all we can do is our best, and try to help things to get better.

这样做可能不是很完美，至少最近一段时间内，它也不会很好玩。但它是我所知道能从 code mine 中爬出来的最好方法了。有一个可工作的软件，是我所知道能翻转现状的最好的方法了。在不好的现状下，我们只能把自己做到最好了，同时尽量让事情变得更好一些。

* 了解 code mine 这个梗

Clearly, in a more enlightened organization, or one with ongoing learning, things will become more and more open to real Manifesto Agile ideas. Life can improve, and I hope it will.

显然，在一个更包容的组织中，或在一个有持续学习精神的组织里，它们会对敏捷宣言所真正宣誓的内容，变得越来越开放。生活是可以变好的，我也真心希望它变好。

* enlightened 译为包容是否妥当？

I’ve been in those situations, and other than leaving, the best I know is to do good work, keep it visible, running, tested, and integrated, and help people to see reality.

我也曾处于那样的境况中。比起离职，我觉得最有意义的事莫过于，把工作做好，保持可视化，坚持产出可运行的、有测试保障的、频繁集成的软件，并帮助他人看清现实。

## Choosing an approach

## 自己选择一种方法论

The Manifesto calls for “self-organizing” teams, and in the best case, that comes down to the team choosing its own process. If I were starting a company, I’d let the teams choose any process they wish.

敏捷宣言拥抱的是「自组织」的团队。最理想的情况下，你的团队可以选择自己的流程。如果我要开家新的公司，我会让团队选择任何他们想用的流程。

### I’d ask for results, not a specific process

### 明确结果，而非过问流程

However, there would be constraints, not on how they choose to work, but what I need to see. I’d make it clear that every two weeks at most, I would like to review their running tested product slice. They’d show me what they had planned to build, and what they built. It would have to actually work, and to contain visible capabilities that I could understand. We’d talk about what they should do over the next interval. And I’d make it clear that one week would be better than two, and that one day would be better than one week.

不过，可以灵活选择流程，并不代表没有任何限制。我不会干预他们选择的工作方式，但需要他们明确知道我想看到的东西。我会让团队清楚，最长两周时间，我要看到可以运行的部分产品。他们需要告诉我，他们之前计划构建的是什么，最后构建出来的又是什么。产品需要是可以真正工作的，需要包含可见的、我可以理解的特性。我会和团队聊聊，接下来他们该做些什么。此外，我会向团队明确传达：达到目标的时间，一周比两周更好，一天比一周又更好。

* capabilities 译为 features 似乎不妥？如果是不可见的，比如性能提升怎么办？

### I’d provide help

### 我会提供帮助

I’d provide them with help. I’d provide someone with a solid connection to the business needs to be met by the product, who would help them decide what slice of work to do next. I’d provide access to training and support doing the work they need to do. I’d make sure they were equipped to do what I was asking them to do.

我会为团队提供帮助。我会负责为团队找来一个与业务有连接的人，他应该能帮团队决定下一步要做的内容。我可以为团队提供必要的培训和支持，来完成他们需要完成的工作。我会确保团队具备足够的能力，来完成那些我交给他们的工作

Of course, I’d do that because I know how to do this stuff. You might be lucky enough to be in a situation somewhat similar to that, at least to the point where you can choose your own process.

当然，我会这样做是因为我清楚这种事要怎么做。如果你能在这样一个类似的环境下工作，或至少能够选择你们自己要用的流程，那我觉得你真是很幸运的。

### Shhh. Maybe XP!

### 唔…不如选 XP 吧！

If you do get a chance to choose, I’d recommend that you start with something like Extreme Programming. It contains all the planning and feedback loops you need, and it includes the basic technical practices you need to do what we’ve been talking about here, and to do what I’d be asking for.

如果你确有自己做主选择流程的机会，我推荐你可以从类似极限编程的东西开始。它包含了你所需要的所有计划、反馈环，所有基本的技术实践它都有——那些我们在本文所谈论的实践，以及我要你们做的那些实践。

And I’d recommend that you stay alert at all times for signs of all the other things you need. “ATDD, TDD, and Refactoring” are things that, in my opinion, you need until you know something better. But there are tens, hundreds, thousands of other things you need as well. Stay alert for those, and when you identify them, get them.

同时，我推荐你对其他可能用得上的技术也随时保持敏感。「ATDD、TDD、重构」这三样技术，我认为，是你遇见更好的实践前会一直需要的东西。但还有其他许多的技术你也会需要。对它们保持敏锐，如果你看到了有用的东西，马上学起。

Excellence in making software is a lifetime activity. Even Extreme Programming, the best officially named approach that I know of, just scratches the surface. Moving toward excellence is up to your team and its members.

软件卓越是一生的事情。即便是 XP，这项我所知最好的方法论，也只触及了软件卓越的皮毛而已。对卓越的追求，与团队与每位成员息息相关。

* excellence in making software is a lifetime activity 怎翻译更好

## Summing up

## 总结

Other than perhaps a self-chosen orientation to the ideas of Extreme Programming — as an idea space rather than a method — I really am coming to think that software developers of all stripes should have no adherence to any “Agile” method of any kind. As those methods manifest on the ground, they are far too commonly the enemy of good software development rather than its friend.

However, the values and principles of the Manifesto for Agile Software Development still offer the best way I know to build software, and based on my long and varied experience, I’d follow those values and principles no matter what method the larger organization used.

但是，敏捷软件开发宣言（Manifesto for Agile Software Development）的价值及原则，依然是我所知道最好的构建软件的方法。依我多年的从业经验，我仍然会坚定不移地实践这些价值观和原则，而不管那些大公司用的是什么方法。

I offer that opinion as advice. Do with it as you see fit.



Here and in other writings, I use the quoted word “Agile” to refer to the many instances, approaches, and processes that use the word “agile” to describe themselves, but that do not necessarily adhere to the letter or spirit of Agile Software Development we wrote about in the Agile Manifesto. I will sometimes refer to “Faux Agile” for emphasis, or to “Dark Agile”, which I use to describe so-called “Agile” approaches that have really gone bad. I might refer to “Manifesto Agile” to mean the core ideas from the Manifesto, in which I still believe.

在本文及我的其他作品中，我使用加了引号的「敏捷」一词，用以指代各式各样使用「敏捷」一词自称的变种、方法论、流程等，它与我们在敏捷宣言中所撰写的敏捷软件开发的单词或精神本身，并无必然的关联。有时为了强调，我会用「假敏捷」一词；有时我会用「黑暗敏捷」来描述那些已然面目全非的所谓「敏捷」。我可能会用 Manifesto Agile 一词来指代敏捷宣言的那些核心思想——那些我至今仍然坚信的思想。

* 这段解释了为啥 Agile 一词要一直加引号。值得好好翻。
* manifesto agile，简直经典，这词好好翻。