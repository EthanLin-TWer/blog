---
title: JavaScript 原型继承之精髓
---

## 目录

### 继承

继承的本质是为了实现「代码复用」，而且通常是对象（数据 + 行为）的复用。因为如果仅仅是数据的复用，JSON 对象就能满足。在 Java 这种强类型的语言下，一切都是类和对象，继承也必然只能从类级别来实现。类继承体系既实现了代码复用，也能获益于类型系统带来的安全保障。不同于 Java，JavaScript 是一种弱类型语言，这使得它有机会抛弃类型，采用更轻量的方式来实现一套继承方案。如你所知，在 JS 中这套方案就是原型继承。

继承方案的设计有三个要点：**支持私有数据**、**简洁的语法**、**访问 `super` 的能力**。数据复用是简单的，而要实现基于数据的方法的复用，主要是实现两个东西：公共的方法存储区间；查找方案。在原型继承中，实现复用的载体是 `function`，而这个公共的空间，就是函数上的 `prototype`。查找方案，其实就是基于 `prototype` 的 lookup 机制。

为了实现一个满足这三个优势的继承方案，有三个比较有代表性的方案：伪类继承、对象继承、函数模式。ES6 出来后有个 `class` 的语法，其本质上是伪类继承的语法糖。做个表格比较如下。结论是，在不在意 `private` 私有数据的前提下，使用 ES6 的新语法糖是最佳方案。

|     方案     | 伪类继承 | 对象继承 | 函数模式 | ES6 `class` |
| :----------: | :------: | :------: | :------: | :---------: |
|   私有成员   |    无    |    无    |    有    |     无      |
|  语法复杂度  |   复杂   |   简单   |   中等   |    简单     |
|  访问 super  |    无    |    无    |    有    |     有      |
| 共享方法内存 |    有    |    无    |    ?     |     有      |

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
* https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
* https://hackernoon.com/understanding-javascript-prototype-and-inheritance-d55a9a23bde2
* https://www.google.com/search?q=javascript+prototype+hierarchy&newwindow=1&tbm=isch&tbo=u&source=univ&sa=X&ved=2ahUKEwiw65n6x_TdAhUlBMAKHTGXDEQQsAR6BAgBEAE&biw=1097&bih=572
* https://medium.com/javascript-scene/3-different-kinds-of-prototypal-inheritance-es6-edition-32d777fa16c9
* https://www.google.com/search?q=javascript+%E5%8E%9F%E5%9E%8B%E7%BB%A7%E6%89%BF+%E5%9B%BE&newwindow=1&tbm=isch&tbo=u&source=univ&sa=X&ved=2ahUKEwj45vGMzfTdAhVlIcAKHbYCDgoQsAR6BAgAEAE&biw=1097&bih=572
* https://github.com/creeperyang/blog/issues/9
* https://github.com/mqyqingfeng/Blog/issues/16
* http://www.ituring.com.cn/article/56184
* https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014344997013405abfb7f0e1904a04ba6898a384b1e925000
* https://juejin.im/post/5b729c24f265da280f3ad010
* http://crockford.com/javascript/prototypal.html
* https://javascriptweblog.wordpress.com/2010/06/07/understanding-javascript-prototypes/
* https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/
* http://bonsaiden.github.io/JavaScript-Garden/#object.prototype

参考：

* JavaScript 深入之继承的多种方法：https://github.com/mqyqingfeng/Blog/issues/16
