# TASK-2 

## 选型

翻看以前的 Angular 代码时，发现早已看不懂，原因之一是层级有点混乱。于是想到，代码所谓的可读性，还不止在于代码自注释，它还需要一个更高层的「结构」，它需要符合人的思考、概念模型，这样才能一下就读懂这个应用的结构和各部分的功能。因此它最好是一个业界通用的模型。那就是架构了。那就是设计模式了。

* UI：React 16.4.+
* 转译器：babel 7 + env / ...
* 二次封装框架：dva / rematch - 不用
* Immutable：seamless-immutable
* 数据管理：Contexts / Mobx / Redux / ...
* 副作用管理：考察下 saga 外的其他选择
  * https://github.com/redux-observable/redux-observable
  * https://github.com/redux-utilities/redux-promise
  * https://github.com/redux-loop/redux-loop
* API：
  * axios
  * GraphQL https://developer.github.com/v4/
* 路由：navigation / ... https://reacttraining.com/react-router/web/guides/philosophy
* 数据存储：firebase / ...
* 类型系统：TS
* 埋点：GA / ...
* 样式工具：less / stylus / ...
* UX：material / ...
  * antd
  * https://github.com/FormidableLabs/radium
  * http://rscss.io/
* 构建工具：webpack / rollup / ...
* 测试
  * [x] 单元测试 #200
  * AT
  * Storybook?
  * 其他层级：https://storybook.js.org/testing/react-ui-testing/
* 架构上，要不要用 monorepo，怎么用，这些是很需要探索的
  * https://twitter.com/dan_abramov/status/1008131488481730561
  * https://github.com/babel/babel/blob/master/doc/design/monorepo.md
* eslint
* prettier
* testing & coverage: jest
* commit message & emoji
  * basic pattern: [#issue-number] [emoji][prefix]: commit message
  * emojis: only pre-configured emojis are accepted
  * lines should not exceed 70 characters
  * do not allow modify multiple drafts at one time
  * do not allow modify multiple posts at one time
* CI

用 dva 的话，一下子就不需要选择数据、路由和副作用工具了。像博客这种简单的 app，应该也没啥很复杂的定制化需求吧 —— dva 踩了个坑，死活没爬出来，只能靠自己看文档。不想折腾了，换成 webpack + router 手动搞呗。

## 构建

dev server & hot reloading

## 部署

* production bundle
* package script

## monorepo

* 被 monorepo 的是啥？
* 为啥会出现 monorepo？啥时候出现的？为了解决啥迫在眉睫的问题？没它如何惨？
* 它是如何解决的？
* 它带来了啥新的问题？
* 它适用于什么项目？
* 涉及什么问题域？最佳实践是什么？

## webpack && rollup

* https://github.com/webpack/webpack
* webpack 啥时候出现的？为了解决什么问题？比之竞品 gulp, grunt, browserify 它解决了什么问题？
* 它现在能解决什么问题？通常被用来解决什么问题？
* 前端工程化最佳实践？
* 前端为啥要工程化？提高效率？
* 它带来了啥新的问题或痛点？
* rollup 相比 webpack 的优势在哪？劣势在哪？
* 什么项目适合用 rollup？为啥？

## dva

> dva 是个啥？

看 github 首页就知道了。是基于 React, Redux, redux-saga, react-router 封装的轻量级框架。不过看这个介绍可以知道，它的假设是，你要用 redux, redux-saga, react-router，可能还要用 umi。或者可以这样讲，作者认为这三个库是数据管理、副作用管理、路由管理的最佳实践或默认配置（在 官方文档 可以看到，这个假设是基于数据的）。

所以这么说吧：

`dva = React-Router + Redux + Redux-Saga`

> 解决了啥问题？

特性部分。讲到4点：

* 易学。作为进阶用户，我就忽略易学部分。提到配合 umi 后 0 API。那么是要增加一个假设/依赖
* elm 概念。暂且理解为是，更加「模块化」？这可能是一个优点
* 插件机制和 HMR。这是默认延续 redux middleware 和 HMR 的配置，是做产品的细活，但可能算不上竞争优势。而且 HMR 还需要另外配置？

所以，让我们关注在 效率提升 和 API 简单 这两点优点上。看了一下官方 demo，通过很多约定优于配置，将模板代码减少到了最少。节省的效率确实很爽！

> 生态圈问题咋解决？

可以看到，三大块：数据、路由、副作用分别只是包装了社区的最佳实践。

> 带来了啥新的问题？

我会考察的一些点：

* 社区支持程度：对 Alipay 团队的依赖。这个团队的响应力会不会成为产品的瓶颈？
* 现成方案搜索🔍
* 假设变动的可能性和应对方案：通过约定优于配置，这在目前看来是个很好的提高效率的方案。但如果放在「时间演化」和「团队项目」（当然后者不存在）这个向度上去检验，当其中一者依赖发生更新，它需要这个产品团队去更新 dva；当其中一者不再是社区最佳实践时，这个项目还怎么办？换个角度考虑，不用 dva 而自己引入这三种依赖，是否能让你在同样变化来临时，具备迁移应用的路径？

> 更具体的一些问题

* 文件结构：简化了，通过把 actions/reducers/saga 写到一块，不仅导航起来方便一些，还形成了「业务模型」的概念
* 文件即路由：简化了 router 的配置
* 最佳实践：它定位是框架而非 library，这是设计思想，非常好
* 高级定制：可能会有一些很细微的场景是没法 100% out of the box 支持的，但对于简单应用来说应该还好

> 竞品是啥？

rematch

> 学习资料。带着问题去看。写写评论

* https://dvajs.com/guide
* https://umijs.org/guide

总的来说，看完一些简介，目前对 dva 的认识是说：它纯粹是为了提高开发效率而创造，没有新的东西，是对前端三大框架的封装。它怎么达到这个目标呢？通过约定式、框架本身隐含最佳实践的方式。
