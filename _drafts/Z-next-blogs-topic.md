---
title: 下篇博客的内容
---

* CSS迁移记可以写成一篇文章
* CSS modules: css module, css in js 
* V-DOM
* hand craft a React
* 写一些 generator / promise / await 的 babel 解析代码
* 为什么 for i 循环就能 wait for async，否则就不行
* 想学 TDD 看什么入门书籍？
* 入职时希望养成的技能和意识？/ 《入行时我希望有人早点告诉我的 8 件事》
* 处理下单元测试这篇文章的 todolist：https://github.com/linesh-simplicity/linesh-simplicity.github.io/issues/200
* Angular 在實現控件的某些簡單狀態時，經常需要變量來做，這樣介面變量就會與邏輯變量混合在一起。如果解决：`component`/`directive`和组件化思想
* 项目的多品牌 less import 体系及最佳实践
* Javascript 的事件系统
* markdown 渲染引擎的主要产品、优劣对比，及简要实现
* 什么是好的 API？如何设计、实现一个好的 API？
* 一个 HTTP 请求完整的生命流程（到我能满意的低抽象层级）？AJAX 的使用与原理，是否是 HTTP 请求的一个子集而已？CORS 是啥？JSONP 又是啥？
* Versioning syntax(semver short as semantic versioning, & gem:lock)
* Angular best practices for folder structuring/organization, Angular 项目结构的最佳实践
* font 等的加载和渲染原理，如 font-awesome/google fonts 等
* promise 的工作原理与实现？callback 被执行的时机（我知道理论时机，就想看看实现）
* responsive testing in agile？若最后总总测，则最后交付才能产生价值（对于 responsive 是 AC 一部分的卡来说）；若中间测，则每做新的卡时，又需要对之前测过的 responsive 的卡再测一遍。
* T-shirt sizing？估点的意义？对 business 的感觉？
* Webpack 的 sourcemap 选项如何配置？有何区别？loader 的原理？
* 翻墙的原理？DNS 原理？在 Windows 上 Mac 上如何查看？如何配置？实操？
* 开发者体验：out-of-box 的模板：项目配置模板、CI 模板；配置（dot files）全自动化；快捷键系统；全系统一键管理 - ??
* 整理一下霖灏的tasking，产出成文章
* 如何写出好的提交信息:
  * 写好提交卡号：这样可以回溯卡的上下文
  * 写好提交类型：refactor和test的应该没有功能变更；feature一般必须TDD；fix是修复功能或lint/test
    * 当然如果团队成员能力足够可以保证原子提交，那么提交前缀是啥都没关系，直接二分即可。这对项目开发、测试、部署的反馈速度有要求
  * 简单描述干了啥：如何干的、具体实现细节，由该原子性的提交去注释。为了达到此目的，我们鼓励小步提交
  * 详细描述为啥这样干：方案的选择理由、限制、改进方向。主要便于日后查询业务或技术上下文。如果有参考资料（比如bugfix的方案来源），给出链接
    * 特别是revert提交，为啥又revert了（临时性本来就该revert的提交应该由原提交信息指出），这次revert有无修改什么东西以修复前电
* **n种`if-else`及其处理方法**。条件分支是程序实现功能多样性的基本结构，但如果用得不好，就会给维护带来额外成本甚至困难。详细的讨论见《实现模式》读书笔记，这里我先总结一下现象和模式
  * 
  * 在数据模型上添加flag以实现分支（通常需要在对应的流程代码或模型代码上做相应逻辑）（例子`requireAdditionalInfo`, `hasUpstreamData`），通常还需要冗余的数据结构。这其实就是把部分逻辑体现到了数据模型上，做得不好，容易使通用逻辑受特殊逻辑侵入，影响阅读和维护
  * 
* Tasking by Example：几种做到“完全穷尽、各自独立”手段的优劣比较；要不要提前设计；粒度如何；业务-技术层级矩阵；
* 项目的测试实践，React单元测试策略（二）：更注重uiUnitAcceptance测试，好处是可以将页面内容用接近单元测试的effort来做到、修改的时候可以TDD了、写新UI的时候搭好框架以后也很容易继续TDD。
* 好像有必要写一篇专门关于英语命名的文章
