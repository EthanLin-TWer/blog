---
title: React测试策略及最佳实践
tags: react unit-test tdd rtl react-testing-library jest design-system
---

5年前我写了[React单元测试策略及落地][react单元测试策略]，这几年以来的持续实践，以及读者的反馈，让我有了这版新的最佳实践和总结。主要解决了之前的版本存在的两个难点：如何给，如何让测试能够真正地支持重构。

## 大纲

* 跟前版比的区别
  * 可以后补测试——适用于遗留代码、中途学习TDD/测试的团队。
  * 支持重构，改动功能的时候测试不会大范围挂。
* 为什么……
  * 要做测试？因为项目一定会变大导致依据个人经验的手动测试在人力上不可行、人员一定会流动而导致上下文丢失。任何项目都这样
  * 是这个策略？MVVM分离为什么不行？不实际。有了Hooks以后，现代React组件其实就是个组合所有逻辑的地方，所有协调都在这里
  * 有什么好处？支持重构：改功能时测试能有效保障行为、不需要改动相应的测试；越写越顺手，组合式，写新测试相当容易；测试断言声明式。
* 架构（黑马简介）
  * hook：hook的单元测试
  * 其他层的测试：契约测试
  * 使用React Query等global statement management的库
  * 其他hook的测试：副作用，如windows、analytics等。
* 测试架构&例子
  * API mock
  * 组件层
* 
* 有什么弊端？
  * 有一定的开发成本——相比纯函数而言。
  * 有一定的维护成本——需要保证测试间独立性（因为引入了API mock而不是组件级别的mock）、等
  * 定位问题的能力相对“绝对的单元测试”有所降低。

## 内容

## References 

* testing pyramid 
* series from Jimmy

[react单元测试策略]: https://blog.linesh.tw/#/post/2018-07-13-react-unit-testing-strategy
