---
title: Feature Toggle最佳实践
---

大纲

* 为什么要搞feature toggle？
  * 上线的时候可以随时打包master上的最新代码，而不用revert或者全部用拉分支开发（为啥甭分支请见另一篇TBD）
  * wip
* toggle的类型（按什么分类？），以及什么时候选用什么类型的toggle？
  * 支持CD的feature类toggle（最常见、数量最多，一般功能默认用这款，在于支撑开发和部署）
  * 支持系统降级的开关类toggle（也用，一般用于大功能、三方集成等可能产生不稳定的部分，在于支撑运行时降级）
  * 支持A/B测试的实验类toggle（不常见）
  * 支持权限类的toggle等（不常见）
* 什么时候增加feature toggle？
  * 默认所有的feature都要加。除了以下加起来很不方便（成本高）但影响又小的：
    * 样式、配置改动、重构（默认应该是不改变系统行为的）、快速修bug（本来就有修了就修了）
  * 加起来不方便（成本高）但是影响又大的怎么办？项目上没有遇到这样的情况。
  * 命名规范。考虑全局唯一 + 加`feature`/`killswitch`前缀方便快速区分
* 如何重命名一个feature toggle？旧的不变，新的创建。一步切换，旧的再见。
  * 以上口诀，适用于代码和toggle都已经部署到生产环境的场景。如果没有，操作起来则简单得多
  * 新的创建，要求你创建一个新toggle并且各环境值都跟原toggle保持一致，然后在新代码中引用新的toggle，并部署到prod
  * 旧的再见，必须在新代码和新toggle都上到生产环境后，才允许在T+n最快下次上线中删除老toggle
* 与上线配合起来的流程是什么样的？
  * PO和QA（所有上线关键approver）均同意有些没加toggle的东西会上去。这些也可以在低环境测试到，并且release owner会把卡号全扒拉出来，加上TL一起review人工一遍。后面的就是take risk。出了问题再retro
  * 含代码和toggle部署到上产环境后，第T+m(m>0)次上线才能删含toggle的代码，第T+m+n(n>1)次上线后才能删toggle
  * toggle的创建、description编辑等所有角色都可以做（对所有环境生效），toggle的修改、归档所有角色都可以在非prod环境下做，prod环境下需要另一个不同角色者的审批。这个审批者一般是项目的PO。
  * 搞一个时间图吗
* 实践层面的问题
  * [如何确定“一组”功能应该归属于一个toggle下？](#feature-toggle合并与隔离)
  * toggle之间有依赖应该怎么办？
* 用什么工具搞？有用Firebase的，有用Unleash的。需要有身份登录、角色管理、审批管理。

## feature toggle合并与隔离

来金提到，建feature toggle如何控制“一组”相关的feature呢？怎么判断这组feature“相关联”？他说，要从业务上来看才是更长期和稳定的，比如从epic/story的角度，或者上线release的角度。这是个新鲜的角度。我提出，也可以从日常沟通中判断出这组东西会不会一起上线，从而判断相关性或独立性。
