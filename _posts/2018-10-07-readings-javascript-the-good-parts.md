---
title: 读书笔记：《JavaScript 语言精髓》
category: 读书笔记
---

重温经典。这本书告诉你，什么是不好的 JavaScript，这与知道什么是精华的 JavaScript 一样重要。正所谓非彼无我，非我无所取。

## 目录

* 导读
* 语言基本要素
* 精华
* 糟粕

## 导读

这次读这本书可谓是带着目的而来。国庆在家给自己接下来定了学习计划：要深入了解 JavaScript 这门语言。另外，我也不是编程语言圣战中的一名教徒，工作三年之余，除了胜任手上的工作以外，也有更高的学习要求：**了解技术本质**、**了解技术价值观**、**了解技术史**。所以，除了了解 JavaScript 这门语言的好坏外，也是要从编程语言这个视角，了解一门语言的基本要素，以及不同语言间的异同，为日后打好基础。基于这个思路，这本书尝试回答的问题正是我所需要的：

1.  JavaScript 的基本语言要素
2.  JavaScript 的精华
3.  JavaScript 的毒瘤和糟粕（以下统称糟粕，区分其差异不是本次阅读的目的）

精华和糟粕可以用一份 ESLint 规则一言以蔽之。而在语言基本要素一节，其主要的三个部分：弱类型、函数、原型继承——也是其精华——我将在「精华」一节中简要展开。

## 语言基本要素

* 语法要素：空格、注释、标识符、数字、字符串、语句、表达式、字面量等
* 三大编程结构（顺序、条件、循环）
* 数据结构：
  * 类型：弱类型
  * 种类：基本类型 / 对象 / 数组
* 函数：代码复用、组合、模块化、信息隐藏
* 继承：代码复用
* API
* 元编程

语法要素不详细讲，在学习其他编程语言时可以迁移；三大编程结构应该是任何编程语言都应该具备的功能了；弱类型、函数、继承都是 JavaScript 的精华所在，放在精华一节说；至于 API，揉在弱类型一节讲；元编程是大学毕业设计的时候种下的一个种子，可惜这本书中这个主题体现不多，故也略去为敬。

## 精华

看完书，总结了一下，JS 的精华大概就这三点：

* 弱类型 & JSON/array literal
* 函数
* 继承

### 弱类型

弱类型意味着很多事，一是写代码的时候你可以不用在意类型了，开发快；二是更优雅的表达力；三是更有表达力的继承方案的可能性（在继承一小节谈）。当然，类型系统对于编译期的问题发现也是很有价值的，在重构的时候也能给 IDE 提供更多的帮助。但作者认为，靠类型系统发现的 bug，不多也不大，相比起来类型系统就太重量，而弱类型是兼顾表达力和项目价值的优雅方案。

JS 有哪些类型呢？一言以蔽之，最重要的有三类八种：**基本类型**、**对象**和**函数**。基本类型有 `string`、`boolean`、`number` 三种类型；函数包含一般函数和构造函数等；对象就是 `object` 类型，除了对象，它还包含数组、正则表达式、日期对象等。也就是说，以下所有东西都是 `object` 类型：

```javascript
typeof {} // 'object'
typeof [] // 'object'
typeof /s/ // 'object'
typeof new Date() // 'object'
```

而以下东西是函数类型：

```javascript
typeof function() {} // 'function'
typeof class Door {} // 'function'
```

另外还有一些奇葩类型：

```javascript
typeof null // 'object'
typeof undefined // 'undefined'
typeof NaN // 'undefined'
typeof void 0 // 'undefined'
```

![JavaScript Data Types](https://i.stack.imgur.com/L1tYe.png)

与 Java 这门强类型语言做对比，它的 String、Array、Map 都是类型，为了具有类型的方法，不得不使用一个类，有时仅需要存取数据时就显得多余。相比之下，JS 创建字符串、对象和数组就简单得多了，见下面代码段。可不要习以为常，直接写 `{}` `[]` 创建对象和数组的写法是 JS 所支持，带来了极度轻量的便利。其中起源于 JS 的对象结构 JSON（JavaScript Object Notation）更是成了一种通用的数据交换格式。

```javascript
const human = {
  name: 'Lao Wang',
  age: 35,
  ready: true,
}
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]
```

### 函数

JavaScript 里面函数是一等公民。这意味着啥呢？一等公民表示，函数也与普通数据类型一样了，可以作函数参数被传递、可以做返回值。这意味着函数式编程变得可能了（为啥呢？），意味着闭包技术这种基于函数级别的轻量级数据封装方案变得可能了，柯里化也变得可能了，这一切带来的是更灵活的封装、数据操作能力。这也是我当时喜欢上 JavaScript 的原因。

函数也是其他任意语言中的基本要素，下面从**基本语法要素**以及上面提到的**函数式**、**闭包**、**柯里化**等方面提一下精华点。

#### 基本要素

* 语法（`function` 关键字、函数名、函数参数、函数体、返回值）
* 函数调用模式：JS 里复杂且灵活的地方，下面详述
* 参数对象 `argument`：它只是个伪数组，有点毛病，ES6 以后就应该弃用了
* 作用域：有函数作用域，ES6 以后才有块作用域。现在基本完美
* 递归：[ES6 以后将部署尾递归优化写入规范](http://www.ruanyifeng.com/blog/2015/04/tail-call.html)
* 闭包：函数级别的信息隐藏、模块化方案。在 Java 中同样的事必须用一个静态内部类才能实现
* 回调：延伸到 `callback`、`Promise`、`async/await` 等一些东西。书里没讲，我也不讲
* 柯里化：业务应用常见模式

#### 函数调用模式

很遗~~jing~~憾~~xi~~，在 JS 中一个函数可能有很多的调用方式。函数体反正都是要执行的，**唯一区别在于 this 引用如何被初始化**。我们一共有 4 种方案，由于太多，废弃掉第三种和第四种。一般写业务代码，第一二种调用是最常见的。

|  函数调用模式  |               形式                |          this 绑定           |                       适用场景                       |
| :------------: | :-------------------------------: | :--------------------------: | :--------------------------------------------------: |
|    方法调用    |         `object.method()`         |   被调用的对象 `object` 上   | 对象实例的方法调用。既成其对象，说明必维护了内部状态 |
|    函数调用    |            `method()`             | 全局对象 `window` / `global` |                 不需要对象状态的函数                 |
|  构造函数调用  |      `new Object().method()`      |  被创建的 `Object` 实例对象  |                  bug 之源，应当抛弃                  |
| apply 模式调用 | `method.apply(target, arguments)` |   绑定到传入的 `target` 上   |                似乎有用，其实完全没用                |

其中：

* 抛弃第三种方案，原因是一旦忘记用 `new` 运算符，`this` 会直接绑定到全局对象，并且无任何编译期和运行期的提示
* 第四种方案，一开始以为有两个场景会用到：写框架代码时、做柯里化时。后来自己一写，发现不需要 `apply` 也是可以实现柯里化的；而框架代码，至今未见使用场景，故留作疑问

#### 函数式

函数式是一种高阶的声明式编程范式，相对于「怎么做」，它让你得以以「做什么」的方式写代码，既有强的表达力，又有低的编写成本。当然，对维护者的代码能力提出了要求。不过既然说到，不妨再说下我的观点：团队能力是选型时考虑的因素，不是技术本身的考虑因素。如果真是好的东西，好不好学是不考虑的。只有不用学的又有钱的才会流行，好与流行通常负相关。

目标是，看到 `for (let i = 0; i > array.length; i++)`、`array.forEach(() => {})`、`for (let key in object)` 等出现 `for` 关键字的代码，一律考虑用函数式代码替换掉。用 for，无非是要做 `map`、`reduce`、`filter` 的操作，更加复杂的就用 lodash/ramda 等工具库，兼顾表达力和性能。

```javascript
// from:
let result = []
for (let i = 0; i > people.length; i++) {
  const person = people[i]
  result.push({ age: person.age, name: person.name })
}
// to:
let persons = people.map(({ age, name }) => ({ age, name }))

// from:
let teenagers = []
for (let person in people) {
  if (person.age < 25) {
    teenagers.push(person)
  }
}
// to:
const teenagers = people.filter(({ age }) => age < 25)

// from:
const people = {
  Jack: { age: 25, gender: 'male' },
  Maria: { age: 20, gender: 'female' },
}
const result = []
Object.keys(people).forEach((name) => {
  result.push({
    name,
    age: people[name].age,
    gender: people[name].gender,
  })
})
// to:
const result = Object.entries(people).map(([name, { age, gender }]) => ({
  name,
  age,
  gender,
}))
```

#### 闭包

闭包实质上是留存变量、可访问性控制的一个方案，它比 Java 类级别的 private 控制粒度更小。在 JS 中只能利用函数级作用域来做访问控制：

```javascript
const incrementer = (function() {
  let count = 0;
  return () => {
    return ++count
  }
})();
```

#### 柯里化

假定读者有一定 JS 基础，都已经知道柯里化是啥了。这里回答有啥用的问题：对于多个参数的方法，可先部分应用相同的参数，然后再对不同的部分进行定制、调用，以达到复用、定制的目的。项目出现过这样的场景，可以认为是一个二阶柯里化：

```javascript
const sendTrackRequest = (userId, siteId, generalParams, extraParams) => {}
const trackPageView = (userId, siteId, generalParams) => {
  return (action, url) => {
    const pageViewParams = { action, url }
    return sendTrackRequest(userId, siteId, generalParams, pageViewParams)
  }
}
const trackEvent = (userId, siteId, generalParams) => {
  return (category, action, eventName, eventArgs = {}) => {
    const eventParams = { category, action, eventName, eventArgs }
    return sendTrackRequest(userId, siteId, generalParams, eventParams)
  }
}
```

一个通用的柯里化函数实现如下，并不需要用到 `Function.prototype.apply`：

```javascript
const curry = (func) => {
  const args = []
  return function continueCurry(...next) {
    args.push(...next)

    if (args.length >= func.length) {
      return func(...args)
    }
    return continueCurry
  }
}
```

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
* https://github.com/creeperyang/blog/issues/9
* https://www.google.com/search?q=javascript+%E5%8E%9F%E5%9E%8B%E7%BB%A7%E6%89%BF+%E5%9B%BE&newwindow=1&tbm=isch&tbo=u&source=univ&sa=X&ved=2ahUKEwj45vGMzfTdAhVlIcAKHbYCDgoQsAR6BAgAEAE&biw=1097&bih=572
* https://github.com/mqyqingfeng/Blog/issues/2
* http://www.ituring.com.cn/article/56184
* https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014344997013405abfb7f0e1904a04ba6898a384b1e925000
* https://juejin.im/post/5b729c24f265da280f3ad010
* http://crockford.com/javascript/prototypal.html
* https://javascriptweblog.wordpress.com/2010/06/07/understanding-javascript-prototypes/
* https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/
* http://bonsaiden.github.io/JavaScript-Garden/#object.prototype

## 糟粕

## ESLint

* https://github.com/airbnb/javascript
* https://standardjs.com/
* https://google.github.io/styleguide/jsguide.html
* https://eslint.org/docs/4.0.0/rules/
