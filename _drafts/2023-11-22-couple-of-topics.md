---
title: 项目管理实录
---

几个实践总结一下吧，在当前项目的一些管理实践。然后Feature Toggle、Release Owner本质上是更快上线的辅助。这里又会引出一个问题：对于一个团队来说，上线频率多少是一个可以接受的值？对于2周一次的上线来说，基本的feature toggle、拆卡实践等似乎已经足够。会有什么项目的成败，真正依赖于更加频繁的上线吗？Martin Fowler说的这个是不是骗人的？其实没有这样的场景？至少，我从事交付8年，没有见过一个项目的成功是由少于2周的上线来支撑的。

* Feature Toggle Best Practices-最佳实践
  * 涉及了toggle的创建原则、豁免原则、命名规范、清理时机、清理步骤、DoR、上线相关等
* Tech Debt Management-技术债管理
  * 估点方法（找朋友看然后CR分享方案+再过grooming+timebox兜底）、优先级原则（重要-工作量四象限，但是会排大量小effort但是不那么重要的债，可能让TDM失去意义，所以结论是：重要性稍微优于工作量。近期债稍微优于老债。高-中-低优先级的确定基本依靠玄学）、召开方式（每周一次，15-30分钟）、组织方式（建专门的Jira board+打label+parent-child issue这样好分类管理）
* Release Owner & Roster-上线管理和轮值
* Solution Review Board-被动方案管理
* Release最佳实践：单团队&多团队
