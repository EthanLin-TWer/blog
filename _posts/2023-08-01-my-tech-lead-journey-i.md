---
title: Tech Lead从入门到放弃（一）：TL真有50%时间写代码？
category: career, tech-lead
---

家人们，数据证明，有些TL真的只有10%的时间碰代码！这个系列，我会分享一些新晋TL们常常会面对的困惑和解决方案，快来看看有没有你曾经/正在经受的困扰吧。

> **太长不读：本文通过详实的数据，揭示了TL在接触技术决策外的那90%时间里的工作内容。接着，通过一系列不严谨的分析，本文揭示了团队规模与TL编码时间的负相关关系，并草率地得出了10-12开发者规模作为TL编码时间有无的分界线。在团队规模的增长中，文章又指出关键的工作量增长来自需求管理，并讨论了TL在这方面的职责。最后的最后挖了些下个系列的坑。**

在我入职TW的时候就对TL这个工作有一种神圣的敬意，觉得TL是团队里的全能小英雄，也是身为技术人的技能巅峰。在我的心目中，TL就是组里技术最强的人，TA不仅能带团队高效地交付高质量的功能，也能打点好跟上级和其他人的沟通，组里的一切TA都可以游刃有余。用大熊的话来说，当项目经理把这个项目交到你手里，他就知道稳了。没当TL之前，当TL一直是我阶段性的目标。

两年前，当我真正开始戴上TL这顶帽子的时候，我才体会到当好这个角色的不容易。首先是Lead，管理真正走入你的工作范围中了，而你可能甚至没有做好心理准备（TL事实上是一个半管理岗）；其次是Tech，其中最大的一个焦虑点就是，**你写代码的时间比过去减少了很多**。这可能是许多纯技术开发转（半）管理岗都会面对的一个现实和焦虑。

你的编码时间，很可能只占你工作时间的**10%**。这是我通过记录过去三个月的工作时间复盘出来的一个数字，是个非常精准的数字。这其中，我有5%的时间在参与编写代码（自己coding或与团队成员结对编程），另外5%的时间是在进行技术相关的讨论和决策、画方案图等。

也就是说，当了TL之后，原来上班7-8个小时的编码时间，会直接锐减到每天25分钟（5%）。这首先是你当TL要接受的一个转变。

## 时间都去哪儿了

最近一年，我有记录自己工作时间的习惯。我抓取了自己近三个月来的工作日记，分析了一下自己日常不同工作类型的时间占比。采样点跨度三个月，共12周、41个工作日，采样时长288个小时，刚好经历一个完整的三个月一次的SAFE大迭代计划会，以及TW内部每半年一次的绩效评估。

<p>
  <a href="https://mermaid.live/edit#pako:eNpNkU9LAkEYxr_KMLA3E9Ms8SzRwTCwP5e5TO6bO7g7I7PvprEsBJGHgspDIhSEUdClJDrl53EVv0X7R7Hb8Ly_55mX5_VpQ5lAy9QwfCEFlonPaFsAo8kLoYsHyhUolIylXLaYIYx6LpwIE61YKu3kglhDCxw45lrwUxvcpT9KqnkIuo5atdYeRgvtLqNBQALDYDKiiGupToUjJyjQBnJYJR2lW0I2iaU87ZINsieaFqnCOdhMkigifHpdDF-mk9vwZhSHbua2l4O3weLqIx2H49_Z3XuyZymbL6bALnD0NJBaR4Kef43mD72YKOSzS2B2czl7Hoe9n_nnIJ7k197pZBL2h-F9P_x-TH4trUxHYe_63zZbqU4z1AHtcGFGJfspmVSV9mDCGfdsZJTJIEK5h6p-IRu0jNqDDPXaJkeoCN7U3FmJYApUej-9W3K-4A--VqmR">
    <img 
      src="https://mermaid.ink/svg/pako:eNpNkU9LAkEYxr_KMLA3E9Ms8SzRwTCwP5e5TO6bO7g7I7PvprEsBJGHgspDIhSEUdClJDrl53EVv0X7R7Hb8Ly_55mX5_VpQ5lAy9QwfCEFlonPaFsAo8kLoYsHyhUolIylXLaYIYx6LpwIE61YKu3kglhDCxw45lrwUxvcpT9KqnkIuo5atdYeRgvtLqNBQALDYDKiiGupToUjJyjQBnJYJR2lW0I2iaU87ZINsieaFqnCOdhMkigifHpdDF-mk9vwZhSHbua2l4O3weLqIx2H49_Z3XuyZymbL6bALnD0NJBaR4Kef43mD72YKOSzS2B2czl7Hoe9n_nnIJ7k197pZBL2h-F9P_x-TH4trUxHYe_63zZbqU4z1AHtcGFGJfspmVSV9mDCGfdsZJTJIEK5h6p-IRu0jNqDDPXaJkeoCN7U3FmJYApUej-9W3K-4A--VqmR" 
      alt="TL working hours - high level"
    /> 
  </a>
</p>

<p>
  <a href="https://mermaid.live/edit#pako:eNqNVFtPE0EU_iubTfqGvXJR3opIYiLSUFEf9mWlA93Q7jbbWYtpmrRgCxQRUdugQLFaAz7QggjSbYUfY2d2-8RfcHZmoWik-rKZPXO-yzlncpL8pBIC_CDvcCQlWYKDXFLgYxIQeHqCYBYGlLgEJUW2Qm5nXw8n8FocPJJCMGyFPD6PO2UFYRhEwUNRlcQnERC3CQjVmAaBGoSqMtMBCbwvNivwqRSXcjgEmWRx8bCSGBahyEEJRgD34B6XUNQZSZ7mwoqmxrkb3JAKRBoYVhKyIHOEBVWK7fldtPGxvb6NanX88jPJw4VVvPLdDuaywVHXkN8VGHNNPKZ-B5x93cD5NN6sGfqZsfENHZRaJ3lD3wn6LeQt58B_IXHpGJeeo3wpEBHhlKJGqay7CxTVD4kKC1rJvV0ttk6WcLHeOt0yj4odjNfXBdLeKqH8tjn_A6d37o-M46Nls1Yw9paYM6e3uxxpwRlayKHKggutrJr78zZyoHtDUPa41SieNxeJulkto8XXZBpmJo8qXwjBedPmYBSMhhK09GWUL1vKzfdmtUoO_mkpAthYSfGoskNuaM1XHFwDZVPBXxvGq1wH2N8dhJpzaHM_OKlqUZS1ywpCUQ5pMdqxfuc_VIP-kTtc4C6r2tb0eK4za57ttRqfcCFrRVbKzLLdcPsnrRvVMimBVu3-uzidE35bwy8yVK-3M9ffMy8Hw5JRM01UjcYb8v2ZzuCtOZLWmRB79oxoBIhQUwE3lpCB2nHk8zovU2zDuUNjr2hp5d6R2owPGZclUKsbzaKxu0z9eS-6-AfkNtlI3Dh4KoGEizx0XF40q7tmVXcZh3n2jzZOKUPfFWstXUdr62h1DR0U6OXNC_oJ8uxY7XZbaJzv4aNAjYpSiGy_JMukK4ztpxCYErUIFHhBTpFUUYNK8Jk8yQ9CVQM9vBYLiRAMS-K0KkYvgiAkQUUdZQuV7tXUL5HJnRg">
    <img 
      src="https://mermaid.ink/svg/pako:eNqNVFtPE0EU_iubTfqGvXJR3opIYiLSUFEf9mWlA93Q7jbbWYtpmrRgCxQRUdugQLFaAz7QggjSbYUfY2d2-8RfcHZmoWik-rKZPXO-yzlncpL8pBIC_CDvcCQlWYKDXFLgYxIQeHqCYBYGlLgEJUW2Qm5nXw8n8FocPJJCMGyFPD6PO2UFYRhEwUNRlcQnERC3CQjVmAaBGoSqMtMBCbwvNivwqRSXcjgEmWRx8bCSGBahyEEJRgD34B6XUNQZSZ7mwoqmxrkb3JAKRBoYVhKyIHOEBVWK7fldtPGxvb6NanX88jPJw4VVvPLdDuaywVHXkN8VGHNNPKZ-B5x93cD5NN6sGfqZsfENHZRaJ3lD3wn6LeQt58B_IXHpGJeeo3wpEBHhlKJGqay7CxTVD4kKC1rJvV0ttk6WcLHeOt0yj4odjNfXBdLeKqH8tjn_A6d37o-M46Nls1Yw9paYM6e3uxxpwRlayKHKggutrJr78zZyoHtDUPa41SieNxeJulkto8XXZBpmJo8qXwjBedPmYBSMhhK09GWUL1vKzfdmtUoO_mkpAthYSfGoskNuaM1XHFwDZVPBXxvGq1wH2N8dhJpzaHM_OKlqUZS1ywpCUQ5pMdqxfuc_VIP-kTtc4C6r2tb0eK4za57ttRqfcCFrRVbKzLLdcPsnrRvVMimBVu3-uzidE35bwy8yVK-3M9ffMy8Hw5JRM01UjcYb8v2ZzuCtOZLWmRB79oxoBIhQUwE3lpCB2nHk8zovU2zDuUNjr2hp5d6R2owPGZclUKsbzaKxu0z9eS-6-AfkNtlI3Dh4KoGEizx0XF40q7tmVXcZh3n2jzZOKUPfFWstXUdr62h1DR0U6OXNC_oJ8uxY7XZbaJzv4aNAjYpSiGy_JMukK4ztpxCYErUIFHhBTpFUUYNK8Jk8yQ9CVQM9vBYLiRAMS-K0KkYvgiAkQUUdZQuV7tXUL5HJnRg" 
      alt="TL working hours - breaking down"
    /> 
  </a>
</p>

从这个拆解图，不难看出其实技术真的只占了TL项目工作时间的一小部分，更多的时间实质上就是花在了所谓的“管理”上：通过团队梯队管理迭代的功能交付(11%)、跟PO和其他角色协作处理团队事务（上线、测试、应询、流程等）(20%)、跟BA和其他角色协作确保团队拿到合格的需求和技术设计(18%)等，这些大头一算就要占据一半时间了。

同时，从这些时间分配中，我们不难看出TL的第一大职责，就是保证团队有高质量的需求和技术输入、并且确保团队成功交付和上线所需的依赖及外部环境等都能顺利打通。**TA需要从更多关注代码和开发的个人开发者角色抽离，转而开始关注团队级别的交付、环境、依赖等**。

另外，对于任何一位在TW做TL的同事来说，TA的身上通常也承担了一部分发展他人的KPI，TA的8小时工作带宽基本上起手都要先扣除掉10%的部门事务和人员发展、10%的项目日常敏捷会议时间（这与CTO八叉在敏捷101中给的比例建议也是匹配的），剩下的80%、6.5个小时的时间才是他能在项目上发光放热的时间。

说到这里，你是不是对TL的日常工作和职责范围心里有数了呢？接下来，我想聊聊影响这个时间分布图的一个重要因子——一个没有完全体现在以上饼图里头，但是对于TL时间分配（尤其是你关心的编码时间）息息相关的因素——那就是**团队的规模**。

### 团队规模

看到这里，你很有可能会说，这与我当TL的感受可不一样啊？我可是有许多的时间与团队一起写代码呢。带着这个疑问，我也拿着这个饼图做了一些调研。采样量比较小，但是也足以让我们得出一个不严谨的结论：

**团队规模越大，团队事务越多，TL的编码时间越少。10-12位Developer是一个分界线，团队管理超过这个规模，TL编码时间为0**。

* 18人全功能团队，参与点数贡献开发者高峰~12人，TL写代码时间≈0%
* 18人全功能团队，参与点数贡献开发者9人，TL写代码时间=5% （我当前项目）
* 16人全功能团队，参与点数贡献开发者9人，TL写代码时间≤10%
* 8人功能团队，参与点数贡献开发者7人（含TL），TL写代码时间≤50%
* 6人功能团队，参与点数贡献开发者3人（含TL），TL写代码时间≥70%

也许，从这里可以得出的第一个建议是，**新晋TL的小伙伴们可以从团队规模6-9人、开发者4-6人规模的团队开始，这样你大概率仍然有50%时间与团队一起写代码，更利于你完成角色转变过程**。

<p align="center" >
  <img
    src="https://cdn.jsdelivr.net/gh/EthanLin-TWer/blog@gh-pages/_images/2023-08-01-team-size-coding-time-analysis.png"
    alt="Team size v.s. TL Coding Time Comparison"
    width="700px"
  />
</p>

团队事务的多寡与团队规模成正相关关系，这很好理解，但是团队事务具体体现在哪些方面呢？这里有很多的影响因素，比如日常管理、梯队管理、外部依赖（及团队）管理等等，但是根据我的经验，相关性最强的一点还得数**需求管理**。

### 需求管理

在我待过的TW项目中，多数项目以敏捷或敏捷的某种增强/裁剪形式运行。在敏捷的方法论中，团队以迭代的方式运行，每个迭代大约1-2周，需求细化的主要场所是每周一次的需求梳理会（Backlog Grooming）。然后，团队在每个迭代的迭代计划会（IPM）上按照优先级挑选已经准备好的需求作为交付计划。

在理想的Scrum流程中，Grooming会议上由产品经理（PO）阐述需求的业务背景和业务价值，由业务分析师（BA）讲述验收标准，而具体的业务方案（可以理解为UI和交互形式）和技术方案将由开发人员在会议上**现场确定**，并现场估算点数。

乍看起来，这个过程并不需要TL花费额外的精力参与，并且也有它一定的道理：全团队均能获得所有业务细节、参与方案设计，在知识上不存在明显的孤岛效应。但是从我最近几年接触的项目来看，没有一个项目是正经这么干的。TL（以及BA、PO）或多或少都会介入到前期的需求和技术设计中。原因是现场拍方案的方式在实际运作过程，往往存在这样一些问题：

* 现场讨论并确定业务和技术方案的过程往往并不高效，非常耗时。而且团队规模越大，需求越多，低效越明显
* 有时团队往往不能自主决定技术方案，而是需要与其他团队（如架构办、对点技术主管、架构师、兄弟团队等）协商后才能确定
* 并不是每个人都知道每处业务和代码的细节，难以深入参与方案讨论。团队规模越大越明显
* ……

这背后的原因，一方面我认为是因为Scrum作为发源欧美的一项方法论对时代背景做的一些假设——团队规模相对较小（往往在6-8人左右）、团队成员成熟度均较高等——在许多项目上并不成立，一方面是需求工作与团队结构和组织环境息息相关，不同团队可能遇见的问题也不一样。

因此，在笔者待过的项目中，在进入每周需求梳理会前，往往PO、BA、UX和TL会预先进行一些业务方案和技术方案的讨论和设计，事先敲定一些方向和方案，再交给团队进行梳理。这并不是要阻碍团队参与需求的验证和方案贡献，而是为了在前期最大程度地确定下业务和（主要是）技术侧的依赖，产出高层级技术方案，以最大限度提升需求侧输入，进而提升需求梳理会的效率、以及整个团队的效能。

在敏捷团队运作上，**给团队和Grooming会议提前准备好2个迭代的需求**是一个很好的实践，有利于保持团队工作充盈、为优先级排序提供充足选择。如下图所示，对于每一个功能，这往往需要PO/BA/UX/TL首先全体从价值出发，低保真的业务方案和技术方案互相讨论、互相确定，然后各个角色着手细化工作，最后确认高保真产出。

<p>
  <a href="https://mermaid.live/edit#pako:eNqrVkrOT0lVslJKT8wrKYnJUwCClMSSVLf8otzEEoUIiEhiRWYxVES1GCJUnJpckpmfp_ByTsOzjU0BQS5P9ix42TAJIgkCAf76To76oRH6IT5P-5uedi2wUjDQUTBG1f1k1_Kn7bterp7xZP_c53PmI3QD9Tk5WikY6yhYYNPxbGrrk13dT3sXPp3U4-iM0Aa0McQHj7bp257u6n86e9_ztZ3PuhqezVn_Yt2-F-sWIgwI8dEPxmrvs44Jz-bNeb5w3Yt1S_B60kJHwVJJRyk3FRhcmSnAkK0GKY9RKslIzU2NUbICMlNS0xJLc0pilGLyaoFKE0tL8oMr85KVrEqKSlN1lEoLQDHgkpmYXpSYq2SVlphTDBRNTcksyS_yhcQWONJqAfhYqX8">
    <img 
      src="https://mermaid.ink/svg/pako:eNqrVkrOT0lVslJKT8wrKYnJUwCClMSSVLf8otzEEoUIiEhiRWYxVES1GCJUnJpckpmfp_ByTsOzjU0BQS5P9ix42TAJIgkCAf76To76oRH6IT5P-5uedi2wUjDQUTBG1f1k1_Kn7bterp7xZP_c53PmI3QD9Tk5WikY6yhYYNPxbGrrk13dT3sXPp3U4-iM0Aa0McQHj7bp257u6n86e9_ztZ3PuhqezVn_Yt2-F-sWIgwI8dEPxmrvs44Jz-bNeb5w3Yt1S_B60kJHwVJJRyk3FRhcmSnAkK0GKY9RKslIzU2NUbICMlNS0xJLc0pilGLyaoFKE0tL8oMr85KVrEqKSlN1lEoLQDHgkpmYXpSYq2SVlphTDBRNTcksyS_yhcQWONJqAfhYqX8" 
      alt="PO/BA/UX/TL核心团队Way of Working"
    /> 
  </a>
</p>

团队的结构、组织形态都可能影响这个工作方式的一个或多个环节。在理想Scrum团队中，所有角色都在同一空间和时区下工作，沟通毫无阻碍和延迟，那么需求讨论和梳理的过程可能相当顺畅。然而，在某些大企业、尤其是跨国公司背景下，Scrum团队成员组成来自多个vendor、甚至团队成员分属不同的时区皆有可能，那么整个需求细化的时间线可能就会拉长。团队规模越大，往往暗示着团队构成和组织越复杂，也往往需要占据TL更多的精力给到需求管理。

在笔者当前项目，要敲定一块中等复杂度需求大约需要2-4周时间。PO在巴西，UX在印度，Scrum团队在中国，双方每天工作交集约只有1-2个小时。也就是说，为了给团队提前准备2个迭代的需求，PO/BA/UX/TL往往需要提前1.5-2个月开始工作。读者可以比对自己项目的复杂度，预估一下自己项目的情况。

总而言之，**团队规模越大，大概率这其中的需求管理工作就越繁杂，需要占用TL更多的时间精力**。TL的一个重要的职责就是，无论是主导还是打配合，TA需要确保PO/BA/UX与TL之间的WoW顺畅，并且能够各自按时、高质地产出结果（高保真UX、含AC的故事卡、含时序图等的技术设计），以作为团队例行需求梳理的优质输入。

同时，这里也许我们可以得出的第二个启示是，**如果你是新晋TL、不清楚应该从哪里入手开展工作的时候，从“确保团队能拥有提前2个迭代需求”这件事情开始往往不会错**。~~反正我在过去的两个项目上都是被这件事情催着走，你不找它它也会找你~~

## 总结

**这篇文章中，我们通过详实的数据揭示了TL在10%编码时间之外的其他事务，并以此一窥TL日常工作内容的究竟。然后，我们通过少量的样本和访谈，感性认识了团队规模与TL编码时间的负相关关系，并草率地得出了10-12开发者规模作为TL编码时间有无的分界线。最后，我又指出受团队规模增加影响最大的是团队的需求管理事务，也指出TL的一大职责便是确保PO/BA/UX/TL团队的工作产出符合预期。**

同时，从本文的洞见中也可以为新晋TL小伙伴指出两条有用的、基于数据的建议：
1. 从一个小规模（团队6-9人规模、开发者4-6人规模）的团队开始，这样你大概率仍然有50%时间与团队一起写代码
2. 如果你不清楚应该从哪里入手开展工作，从“确保团队能拥有提前2个迭代需求”这件事情开始做起往往不会错

同时，本篇只是作为一个引子，抛出了一些有趣的数据，但并未解决一些具体的问题。比如，若果如本文所说，对于大规模团队来说TL管理事务不可避免，那么TL做些什么能为自己挤出一些技术精进时间？时间管理如何做？TL实际“管理”的是什么？有没有实实在在的KPI？作为常用的管理/杠杆手段，Feature Owner究竟是最佳实践还是反模式？……许多的话题，敬请期待。

* [Tech Lead从入门到放弃（二）：TL的KPI是什么？][My Tech Lead journey II]
* [Tech Lead从入门到放弃（三）：Feature Owner是反模式吗？][My Tech Lead journey III]
* [Tech Lead从入门到放弃（四）：浅谈时间管理][My Tech Lead journey IV]

<details>
  <summary><b>彩蛋 - PDCA</b></summary>
  数据采集的目的，一是为了寻找洞见，二是为接下来的改进指明方向。比如，在上面的饼图细分中，我就发现了我在feature owner管理、异地全团队Standup（主要是跟PO Sync）、需求准备、外部团队对接方面还可以通过更精细地利用好Feature Owner这个杠杆来将更多工作委派出去，以此为自己争取更多时间来编码、与团队结对等。同时，本文完成后我仍然打算继续采集未来三个月的数据，并在这里做不定期更新。Q2和Q3数据做对比，相信我们能从中发现颇为有趣的TL工作洞见。

  <p>
    <a href="https://mermaid.live/edit#pako:eNpFkUtLQkEUx7_KMODOzHxQuJZoYRjYYzObyXvyDl7vyNxz07hcCEIXBpWLRCoIo6BNSQRB1sdxFFd9he7DaDf8_o_hnOPRqjSAFmgi4QlbYIF4jDYFMBq9ENq4Ix2BQtohSqfyScKo68CBMNAM0fpG2g8ZmtCAfa4EP7TAWeaDprKLoCqoZP0_w2i22WbU94mfSDA7cBHHlK0iR05QoAVkt0RaUtWFXSOmdJVDVsiWqJmkBMdgMZsEFfpxsDh71rcPi-G9Hn_OLp7C6lwmlckvDZE0nZzr3iiWYj7rnc7uxrr7Pn8ZhHwtF_NN4OgqIOWWDWr-OppfdUM5m_rr63xMvwY_3zd7utuJa1enk4nuD_VlX79dh-boC5qkDVANLoxgsV4cjtYTz27AEXctZJTZfmDlLsrKiV2lBVQuJKnbNDhCUfCa4o0_CIZAqbbjW0Un838BZiSrkQ">
      <img 
        src="https://mermaid.ink/svg/pako:eNpFkUtLQkEUx7_KMODOzHxQuJZoYRjYYzObyXvyDl7vyNxz07hcCEIXBpWLRCoIo6BNSQRB1sdxFFd9he7DaDf8_o_hnOPRqjSAFmgi4QlbYIF4jDYFMBq9ENq4Ix2BQtohSqfyScKo68CBMNAM0fpG2g8ZmtCAfa4EP7TAWeaDprKLoCqoZP0_w2i22WbU94mfSDA7cBHHlK0iR05QoAVkt0RaUtWFXSOmdJVDVsiWqJmkBMdgMZsEFfpxsDh71rcPi-G9Hn_OLp7C6lwmlckvDZE0nZzr3iiWYj7rnc7uxrr7Pn8ZhHwtF_NN4OgqIOWWDWr-OppfdUM5m_rr63xMvwY_3zd7utuJa1enk4nuD_VlX79dh-boC5qkDVANLoxgsV4cjtYTz27AEXctZJTZfmDlLsrKiV2lBVQuJKnbNDhCUfCa4o0_CIZAqbbjW0Un838BZiSrkQ" 
        alt="TL working hours - high level - Q3"
      /> 
    </a>
  </p>
  
  <p>
    <a href="https://mermaid.live/edit#pako:eNqNVF1P01AY_itNk93hOj4WDXcDJDEBWZioF705sMPWsLVLd-owy5IN3IAhIuoWZDCczoAXdCCC7EP4Mfa03RV_wdOewoxhizfNOW_f53nej_ZJsnNSELLDrMuVFEQBDTNJno0JkGftE4KLyC_FBSRIohXyuL19DM8qcfhMCKKwFeof9HhSVhCFYRQ-BbIAZiMw7hAQqikFQTmAZGmhA-LZwdgiz6ZSTMrl4kWSxcTDUmIMIMAgAUUg82SCSUjygiCGmLCkyHHmHjMiQ2AHxqSEyIsMYcHVYnv5EJc-t7f3ca2uv_lK8vTCpr7x0wnmsoFJbsTH-ae4meeW9FAvZD6t79aMxpVR-oFPytpF3mgcBHwWbNB93_s_SL18rpdf4XzZHwFoXpKjFnjAPdALjOunRIcG7ZH2Ttcu1vRiXbvcM8-KHZCnN6i9V8b5fXP5l54-eDw-rZ-tm7WCcbRm6w31VCNDuMIrOVxd4fDGpnm87MAeuImgy8V016zUjZI6OvFEa-2YqsrRu_69abzN3Ui7ew4me641i9etVVwqt5dUrXnOETbOzORx9RthuG45hTitUyabQ2us43zFqt_WJgdfSIhA-m2QCeLqAXljl9DfWW0XKN0uLbwD9PQG4dYS3j0OzMlKFGedzgIIiEEl9s-SuxAEfOMPGf8jU63g1XeOptd9N8i8OtKaX_RC1opsVGjBztKcS7phqBXSAP2au4nb29Y_1PTXGbtKb7fh3O6GJuNWmugazffk-TudGVFCsyAe7uxoyCqcEo1DgBQZMlMJEcp_13Sb4VScOzWOipZU7iNpzviU4Sz-Wt1oFY3DdceP7kSMElNjpuELASY48q_olVVTPTTVBmec5ukdly6pe3VUbzramSGuQfvktEYDb23jzS18UrD_ZF5k-9golKNACBLbTFKo7X3U2IJwHigRxLO8mCKpQEFS4KU4xw4jWYF9rBILAgTHBBCSQfQmCIMCkuRJ6sS2Iaf-AAPmwnI">
      <img 
        src="https://mermaid.ink/svg/pako:eNqNVF1P01AY_itNk93hOj4WDXcDJDEBWZioF705sMPWsLVLd-owy5IN3IAhIuoWZDCczoAXdCCC7EP4Mfa03RV_wdOewoxhizfNOW_f53nej_ZJsnNSELLDrMuVFEQBDTNJno0JkGftE4KLyC_FBSRIohXyuL19DM8qcfhMCKKwFeof9HhSVhCFYRQ-BbIAZiMw7hAQqikFQTmAZGmhA-LZwdgiz6ZSTMrl4kWSxcTDUmIMIMAgAUUg82SCSUjygiCGmLCkyHHmHjMiQ2AHxqSEyIsMYcHVYnv5EJc-t7f3ca2uv_lK8vTCpr7x0wnmsoFJbsTH-ae4meeW9FAvZD6t79aMxpVR-oFPytpF3mgcBHwWbNB93_s_SL18rpdf4XzZHwFoXpKjFnjAPdALjOunRIcG7ZH2Ttcu1vRiXbvcM8-KHZCnN6i9V8b5fXP5l54-eDw-rZ-tm7WCcbRm6w31VCNDuMIrOVxd4fDGpnm87MAeuImgy8V016zUjZI6OvFEa-2YqsrRu_69abzN3Ui7ew4me641i9etVVwqt5dUrXnOETbOzORx9RthuG45hTitUyabQ2us43zFqt_WJgdfSIhA-m2QCeLqAXljl9DfWW0XKN0uLbwD9PQG4dYS3j0OzMlKFGedzgIIiEEl9s-SuxAEfOMPGf8jU63g1XeOptd9N8i8OtKaX_RC1opsVGjBztKcS7phqBXSAP2au4nb29Y_1PTXGbtKb7fh3O6GJuNWmugazffk-TudGVFCsyAe7uxoyCqcEo1DgBQZMlMJEcp_13Sb4VScOzWOipZU7iNpzviU4Sz-Wt1oFY3DdceP7kSMElNjpuELASY48q_olVVTPTTVBmec5ukdly6pe3VUbzramSGuQfvktEYDb23jzS18UrD_ZF5k-9golKNACBLbTFKo7X3U2IJwHigRxLO8mCKpQEFS4KU4xw4jWYF9rBILAgTHBBCSQfQmCIMCkuRJ6sS2Iaf-AAPmwnI"
        alt="TL working hours - breaking down - Q3"
      /> 
    </a>
  </p>
</details>

#### 参考

* [Tech Lead之路](https://insights.thoughtworks.cn/tech-lead/)

[My Tech Lead journey II]: https://ethan.thoughtworkers.me/#/post/2023-08-03-my-tech-lead-journey-ii
[My Tech Lead journey III]: https://ethan.thoughtworkers.me/#/post/2023-08-04-my-tech-lead-journey-iii
[My Tech Lead journey IV]: https://ethan.thoughtworkers.me/#/post/2023-08-05-my-tech-lead-journey-iv
