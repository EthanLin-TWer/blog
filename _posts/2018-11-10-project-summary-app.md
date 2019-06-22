---
title: 项目总结——一个 7 万行代码、多种技术栈的 APP 项目
category: project-review
---

这是一个令我成长许多，第一次跟项目成员 retro 到晚上 10 点的项目：多个代码库、多个技术栈交互、60 多个页面、接近 7 万行代码的项目…要不是其自身所决定的技术卓越之匮乏，或许我也不会早早离开。

## 目录

* 项目背景
* 技术栈
* 技术架构
  * 页面与路由
  * 数据管理
  * 路由系统
  * 埋点系统
* 项目流程与管理
* 展望
  * 项目优秀处
  * 不足与规划
  * 曾经失败的实践：主干开发、TDD、单发布分支、快照测试

## 项目背景

项目做的是一个偏金融性质的 app，可以预留额度但不能直接交易，后期加入了金融资讯等更社交化的功能。项目本身从 2015 年开始，使用 Angular 1.4 + cordova 的技术栈开发了该 app 的 1.0 版本，包含了至今为止 app 流量依然最大的理财产品查询与预留功能。我进入项目时已经 2017 年 8 月，出于技术栈及人员发展的考虑，项目打算使用 React Native 进行新功能的开发，我们称之为 2.0 版本。截止 1 年以后，项目仍处在两个技术栈共存的渐进迁移过程。

该 app 是一个偏重前（移动）端的项目，前后端人员配比一般在 4/5 : 1。前端人数时多时少，多时可有 5-6 人，少时只有 2-3 人。

项目采用的是瀑布+敏捷的开发方式：需求到开发阶段采用敏捷；迭代验收完的卡统一进入瀑布阶段的测试：SYS 测试、UAT 测试，提单部署上线。迭代在 2018 年以前是四周一迭代，两周开发两周测试；2018 年以后项目申请走敏捷流程，缩短为三周一迭代，一周半开发一周半测试。敏捷是请我司帮忙做的转型，是个金融行业对标互联网行业的尝试。尽管如此，我还是深刻体会到仅仅实现流程敏捷与真正敏捷的不同：很多团队抄了敏捷的三大会，缩短了发布周期，就宣称自己已经敏捷了。但往往忽略敏捷的核心是：快速反馈、互相信任。其结果往往使得敏捷只是沦为了另一种流程。

开发和代码质量分别通过分支开发 + code review 的方式进行。前期还有一些 PR 的方式。当然，我一直是坚定反对分支开发的，直至离开项目也只能取得一个半主干开发的平衡。

测试只有单元测试，并且只有少数开发者写。项目有 800 个左右的测试，单元测试覆盖率大概 62%。由于缺少类型系统、端到端测试、代码集体所有制等条件，单元测试对持续重构持续改进贡献绵薄，但对质量特别是重逻辑的分支还是起到了不错的保护作用。

## 技术栈

项目 2.0 开始主要使用 React Native 开发，而 1.0 的代码仍然是 Angular 1.4，同时整个项目有 10% 左右的原生代码。数据和副作用管理上，分别使用了 redux 和 `redux-saga`，路由系统则是使用的 `react-native-router-flux`。

* UI：react 16.2 + `react-native-elements` 1.7
* 数据管理：redux + `reselect` + local storage
* 副作用管理：`redux-thunk` + `redux-saga`
* 路由：`react-native-router-flux`
* 构建工具：Gradle 4 + fastlane + bash
* 单元测试：jest 23 + enzyme 3
* 持续集成：Jenkins 2 + fir + 内部流水线
* 数据采集：Piwik

## 技术架构

* 页面与路由
* 数据管理
* 路由系统
* 埋点系统
* 持续集成与部署
* 单元测试与质量
* 开发者体验 eslint + prettier + gradle

### 单元测试与质量

这个项目的单元测试实践，我已经总结成详尽的 [React 单元测试策略][]，并在保持单元测试的简单、快速和稳定上做了许多努力。这个策略产出不早，一直是我做的比较多，有点遗憾的事情是没能在项目时期将测试本身方法和原理传递到组里。

另外回顾一下[测试金字塔][]，我的感受是「应该有尽量多的低层次测试」，不意味着「有了单元测试就万事大吉」以及「有了单元测试就可以放心重构」。单元测试写起来快，对单元保障稳固，确实增强了信心，但是没有其他层级的测试，你一样不敢随意重构；如果团队没有敏捷之核心所需求的安全与信任，出了问题先想到甩锅和恶评重构者，团队一样不敢随意重构。真相就是，敏捷诸多技术实践是相辅相成、互相加强的，任何一环的缺失都会导致全局效率阻塞。仅仅抄了敏捷三大会，而不愿意投入资源做技术实践，只能说是假敏捷。

如果加入其它层级的测试，必然要有好的策略和维护。它是需要技术能力和投入的。大熊在新书中讲得已经十分透彻：历史证明，任何妄图通过傻瓜化测试的方式已经失败。唯一正道是提高团队写测试的能力，并持续维护之。其核心在人才。因此说，以测试策略一窥团队面目全貌，也可说是团队成熟度的一个试金石。

## 项目流程与管理

## 展望

## TODOLIST

* 将技术架构的目录抄到主目录

[测试金字塔]: https://insights.thoughtworks.cn/practical-test-pyramid/
[react 单元测试策略]: https://blog.linesh.tw/#/post/2018-07-13-react-unit-testing-strategy