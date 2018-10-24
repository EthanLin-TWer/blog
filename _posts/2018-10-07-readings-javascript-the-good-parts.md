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
* ESLint && prettier

## 导读

这次读这本书可谓是带着目的而来。国庆在家给自己接下来定了学习计划：要深入了解 JavaScript 这门语言。另外，我也不是编程语言圣战中的一名教徒，工作三年之余，除了胜任手上的工作以外，也有更高的学习要求：**了解技术本质**、**了解技术价值观**、**了解技术史**。所以，除了了解 JavaScript 这门语言的好坏外，也是要从编程语言这个视角，了解一门语言的基本要素，以及不同语言间的异同，为日后打好基础。基于这个思路，这本书尝试回答的问题正是我所需要的：

1.  JavaScript 的基本语言要素
2.  JavaScript 的精华
3.  JavaScript 的毒瘤和糟粕（以下统称糟粕，区分其差异不是本次阅读的目的）

精华和糟粕可以用一份 ESLint/prettier 规则一言以蔽之。而在语言基本要素一节，其主要的三个部分：弱类型、函数、原型继承——也是其精华——我将在「精华」一节中简要展开。

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

很遗~~jing~~憾~~xi~~，在 JS 中一个函数可能有很多的调用方式。函数体反正都是要执行的，**唯一区别在于 this 引用如何被初始化**的问题。我们一共有 4 种方案，由于太多，废弃掉第三种和第四种。一般写业务代码，第一二种调用是最常见的。

|  函数调用模式  |               形式                |          this 绑定           |                       适用场景                       |
| :------------: | :-------------------------------: | :--------------------------: | :--------------------------------------------------: |
|    方法调用    |         `object.method()`         |   被调用的对象 `object` 上   | 对象实例的方法调用。既成其对象，说明必维护了内部状态 |
|    函数调用    |            `method()`             | 全局对象 `window` / `global` |        不需要对象状态的函数。应全采用箭头函数        |
|  构造函数调用  |      `new Object().method()`      |  被创建的 `Object` 实例对象  |                  bug 之源，应当抛弃                  |
| apply 模式调用 | `method.apply(target, arguments)` |   绑定到传入的 `target` 上   |                似乎有用，其实完全没用                |

其中：

* 第二种方案，由于 `this` 引用不会被正确初始化，因此一是尽量用于不维护内部状态的函数，二是应全部应用箭头函数，它修复了 `this` 引用的 bug
* 抛弃第三种方案，一是因为一旦忘记用 `new` 运算符，`this` 会直接绑定到全局对象，并且无任何编译期和运行期的提示；二是因为没有任何使用场景。做类继承时应该全用 ES6 的 `class` API 
* 第四种方案，一开始以为有两个场景会用到：写框架代码时、做柯里化时。后来自己一写，发现实现柯里化不需要使用 `apply`；而框架代码，至今未见使用场景，故留作疑问

#### 函数式

函数式是一种高阶的声明式编程范式，相对于「怎么做」，它让你得以以「做什么」的方式写代码，既有强的表达力，又有低的编写成本。当然，对维护者的代码能力提出了要求。

使用函数式的目标就是，看到 `for-in`、`for-of`、`forEach` 就要考虑是否可以用函数式去代替。

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
  let count = 0
  return () => {
    return ++count
  }
})()
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

一个通用的柯里化函数实现如下。第 6 行的代码参考了[这个写法](https://github.com/mqyqingfeng/Blog/issues/42#issuecomment-411428875)，其余是自己写的。

```javascript
const curry = (func) => {
  return function continueCurry(...args) {
    if (args.length >= func.length) {
      return func(...args)
    }
    return (...next) => continueCurry(...args, ...next)
  }
}
```

### 继承

继承的本质，是为了实现「代码复用」，并且通常是数据+行为的复用。不同于 Java 这样的强类型语言，JavaScript 没有类，也没有强类型的束缚，因此它得以实现一套更加清爽、更加简洁的继承体系。当然，这套方案就是大家所熟知的原型继承。

就方案来讲，ES6 提供的 `class` 语法糖是目前最完美的 API 了。不过虽然它长得很像 Java 的类，但其实它根本就不是类，底下的实现还是完全用的原型继承。关于继承相关的东西，另起了两篇博客进行了详尽的探究：

* https://blog.linesh.tw/#/post/2018-10-18-javascript-prototypal-inheritance
* https://blog.linesh.tw/#/post/2018-10-21-deep-dive-into-babel-inheritance

## 糟粕

原书中把 JavaScript 不好的东西分两种：毒瘤和糟粕。简而言之，毒瘤就是一无是处的特性，应该用都不用；糟粕是那些有时很有用，有时又很坑的特性，这样的特性更要规避，因为你只有深入思考阅读才能知道功能正常还是坑，这违反编程语言应该直接、表达力强的价值观。在这里，具体区分不是重点，我列出来，这些特性**都不要用**就对了。并且，最好通过 ESLint 等工具加以固定。

|       糟粕       | 建议 |                      规避方法                       |
| :--------------: | :--: | :-------------------------------------------------: |
|     全局变量     |  ❌  |   NodeJS 每个文件都有自己的作用域，部分解决此问题   |
|   自动插入分号   |  ❌  |                  使用 ESLint 禁止                   |
|      伪数组      |  ❌  |          用 ES6 的参数解构代替 `argument`           |
|      `eval`      |  ❌  | 缺点：运行时代码、lint 工具无效；注入攻击；降低性能 |
|    `continue`    |  ❌  |            任何 `continue` 都应该重构掉             |
|   缺少块的语句   |  ❌  |                  使用 ESLint 禁止                   |
|  类型的包装对象  |  ❌  |            使用基本类型、`{}`、`[]`替代             |
|      `void`      |  ❌  |                       没场景                        |
| `new Function()` |  ❌  |  一旦忘记，`this`就会绑定到全局对象，且无任何提示   |
|      无模块      |  --  | 已有 import/export、CommonJS、UMD 等模块化解决方案  |
|  `==` && 假值表  |  🌵  | 一律用 `===`/`!==` 避免类型转换，除了极少量特殊场合 |
|     `typeof`     |  🌵  |                        无解                         |

## ESLint & prettier

本书中关于 JavaScript 的精华与糟粕，说白了最后就是一个 ESLint 规则，强制必须使用哪些好的写法，哪些坏的写法一定不让用。关于编程风格方面的东西，现在已经有 prettier 这样的工具，提供一个唯一的格式化方案，可以杜绝团队内部的风格争论，提高工作效率和代码整体统一性。经过试用，它的这个唯一的格式化方案还相当完美，我可以毫不夸张的说，在我工作过的项目中，99.9%的场景使用 prettier 格式化出来的风格都是完美的。

关于代码风格这事，作为一个洁癖患者我必须多说两句。我一直是把代码当程序员的「作品」来看，就好像小说之于其作者、音乐词曲之于作曲者，都是精雕细琢、明心见性的东西，容不得半点马虎。就好比《黄金时代》之于王小波，好比《燕窝》之于吴青峰。它的美，不仅来源于内容，而且在于内容的表达形式、在于用词美、韵律美、格式美。那么代码的韵律美比较玄幻咱就不说了，说说其他美。

> 写出《黄金时代》前，我从未觉得自己写得好。——王小波
>
> 完美一字不差。——《燕窝》，吴青峰

用词美，当然是指命名。该讲究的得讲究，`item`、`element`、`result` 这样的东西，偶尔达意，但大多数时候，还是可以根据业务含义讲究讲究的。用词到位的一个体现是：不多一义，也不少一义，但意思直观明白，一眼即懂。

格式美，主要是指代码的格式。只说一点：让结构相似、联系紧密、层次相同的东西放到一起。位置上的紧密体现关系上的紧密，这是美学观点。过几天找具体例子来贴。

* [x] https://github.com/airbnb/javascript
* https://standardjs.com/
* https://google.github.io/styleguide/jsguide.html
* https://eslint.org/docs/4.0.0/rules/
* https://github.com/bendc/frontend-guidelines

### ESLint 规则

https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base/rules

1.  (general) use single quotes, tab size, print width, semicolons, arrow parens, trailing commas
2.  (values) no-var && no-undef
3.  (references) prefer-const & no-const-assign
4.  (object) no-new-object
5.  (object) object-shorthand
6.  (object) quote-props: only when they are invalid identifiers
7.  ?(object) no-prototype-builtins
8.  prefer object spread operator
9.  (array) no-array-constructor
10. prefer array spread operator
11. (array) array-callback-return `[1,2,3].map(x => x + 1)`
12. (array&object) prefer-destructuring
13. use object destructuring instead of array destructuring because adding new item is easy without breaking existing ones for order issue
14. (templates) prefer-template template-curly-spacing
15. no-eval
16. no-useless-escape
17. (function) wrap-iife
18. (function) no-loop-func
19. (function) prefer-rest-params
20. use default parameters syntax rather than mutating the function arguments
21. avoid side effects with default parameters `function (a = b++) {}`
22. always put default parameters last
23. (function) no-new-func
24. (function) no-params-reassign never mutate/reassign parameters
25. (function) prefer-spread - this disables most the usage of `apply` regards function arguments spreading
26. (function) function-paren-newline - conflicts with prettier?
27. (arrow-function) prefer-arrow-callback arrow-spacing - go with prettier
28. (arrow-function) arrow-parens arrow-body-style
29. wrap function in parentheses when the body spans over multiple lines for readability
30. (arrow-function) implicit-arrow-linebreak - handled by prettier
31. (classes) always use `class`
32. (classes) always use `extends` for inheritance
33. (constructor) no-useless-constructor
34. (classes) no-dupe-class-members
35. (modules) no-duplicate-imports
36. (modules) no-mutable-exports
37. (modules) import/first
38. (modules) import/no-webpack-loader-syntax
39. (iterators) no-iterator -> best! enforces functional programming!
40. (generators) generator-star-spacing!
41. (properties) dot-notation
42. (properties) no-restricted-properties `const binary = 2 ** 10`
43. (variables) one-var
44. (variables) group all your consts and all your lets
45. (variables) no-multi-assign -> creates global variables
46. (variables) no-plusplus
47. (variables) no-unused-vars
48. (equality) eqeqeq
49. (comparison) use shortcuts for booleans, but explicit comparisons for strings and numbers
50. (comparison) no-nested-ternary, styles will be handled by prettier
51. (comparison) no-unneeded-ternary
52. (comparison) no-mixed-operators
53. (blocks) nonblock-statement-body-position
54. (blocks) brace-style, should be handled by prettier
55. (blocks) no-else-return
56. (comments) use `/* */` for multi-line comments
57. (comments) use `//` for single-line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment unless it’s on the first line of a block.
58. (comments) spaced-comment
59. (spaces) all airbnb rules are covered by prettier
60. (casts) no-new-wrappers
61. (naming) camelcase
62. (naming) new-cap for only constructors and classes
63. (naming) no-underscore-dangle
64. (naming) constant naming rules

arguable:

1.  func-style
2.  space-before-function-paren space-before-blocks
3.  no-confusing-arrow
4.  always use `import`/`export`
5.  import/prefer-default-export -> prevents refactoring?
6.  no-case-declarations
7.  func-call-spacing
8.  do not use JavaScript getters/setters 24.2
