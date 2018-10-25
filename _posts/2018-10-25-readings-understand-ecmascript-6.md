---
title: 读书笔记：《深入理解 ES6》
category: 读书笔记
---

JS 语言精髓已读，接下来读现代 JavaScript 代码应该如何写的书。也就是 ES6。

## 目录

* 导读

## 导读

## 章节

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
