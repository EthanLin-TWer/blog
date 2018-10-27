---
title: 读书笔记：《深入理解 ES6》
category: 读书笔记
---

《JS 语言精粹》已读，接下来读一本如何写完美的现代 JavaScript 代码的书——也就是 ES6。

## 目录

* 导读
* 拾遗
  * 函数
* 增广

## 导读

感觉现在个人已有一定的 JavaScript 功底，接下来应该更加专注于如何解决前端的问题。因此，这本书后，《你不知道的 JavaScript》、《JavaScript 语言精髓与编程实践》不是短期的阅读目标了。

这个书应该分两个部分来读：工作常用部分和不常用部分。工作常用部分，如 ES6 的解构、箭头函数等常用特性；不常用部分，如 `Map`、`Set`、`generator` 等。因此，本书按目录来分阅读次序应该是这样：

* 工作常用部分：已经用得麻溜的，补充一下遗漏
  * 第 1 章 块级作用域绑定
  * 第 3 章 函数
  * 第 4 章 扩展对象的功能性
  * 第 5 章 结构：使数据访问更便捷
  * 第 9 章 JavaScript 中的类
  * 第 10 章 改进的数组功能
  * 第 13 章 用模块封装代码
  * 附录 A ECMAScript 6 中较小的改动
  * 附录 B ECMAScript 7(2016)
  * 索引 学英语
* 工作不常用部分：日常少用到的，补充一下见闻
  * 第 2 章 字符串和正则表达式
  * 第 6 章 Symbol 和 Symbol 属性
  * 第 7 章 Set 集合与 Map 集合
  * 第 8 章 迭代器（Iterator）和生成器（Generator）
  * 第 11 章 Promise 与异步编程
  * 第 12 章 代理（Proxy）和反射（Reflection）API

## 拾遗

* 第 1 章 块级作用域绑定
* [x] 第 3 章 函数
* 第 4 章 扩展对象的功能性
* 第 5 章 结构：使数据访问更便捷
* [x] 第 9 章 JavaScript 中的类
* 第 10 章 改进的数组功能
* 第 13 章 用模块封装代码
* 附录 A ECMAScript 6 中较小的改动
* 附录 B ECMAScript 7(2016)
* 索引 学英语

### 函数

* 默认参数 -> 默认参数的临时死区（TDZ）
* 无命名参数 -> ...args over arguments[index]
* arguments 参数被完全移除：这已经通过 ESLint 固化下来
* 调试信息：[function].name
* new.target：判断是不是通过 `new` 调用
* 箭头函数
  * 修正了 this 指向：所谓指向最近一个有 this 作用域的函数
  * 没有 [[Constructor]]，因此不能 new，也因此没有 prototype，因此引擎可以做优化
  * 没有 this、super
  * 没有 arguments 参数对象
  * 可以说，是一个 JavaScript 函数本来应该是的样子：更明确的 this 绑定；没有继承；无状态函数（没有 this）
* 尾调用优化

### 类

* [JavaScript 原型继承之精髓](https://blog.linesh.tw/#/post/2018-10-18-javascript-prototypal-inheritance)
* [深入 JavaScript 原型继承原理——babel 编译码解读](https://blog.linesh.tw/#/post/2018-10-21-deep-dive-into-babel-inheritance)

由于对 JavaScript 的原型继承原理已经整的几近完美，这节从内容上没有太多的惊喜。不过倒是提到了两个小细节：

* 可以利用 `extends Mixin` 模拟接口
* 可以利用 `new.target` 模拟抽象基类

## 增广

* 第 2 章 字符串和正则表达式
* 第 6 章 Symbol 和 Symbol 属性
* 第 7 章 Set 集合与 Map 集合
* 第 8 章 迭代器（Iterator）和生成器（Generator）
* 第 11 章 Promise 与异步编程
* 第 12 章 代理（Proxy）和反射（Reflection）API
