---
title: 深入 JavaScript 原型继承原理——解读 babel 编译码
---

在[上一篇文章][]中，我们提到 ES6 的 `class` 语法糖是个近乎完美的方案，并且讲解了实现继承的许多内部机制，如 `prototype`/`__proto__`/`constructor` 等等。这篇，我们就以 babel 编译过后的代码为例子，来验证上节所言不虚。

## 无继承——简单的 `class` + 字段声明

先来看个最简单的例子，我们仅仅使用了 `class` 关键字并定义了一个变量：

```javascript
class Animal {
  constructor(name) {
    this.name = name || 'Kat'
  }
}
```

最后 [babel 编译出来][babel used]的代码如下。这里笔者用的是 Babel 6 的稳定版 6.26，不同版本编译出来可能有差异，但不至于有大的结构变动。

```javascript
'use strict'

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

var Animal = function Animal(name) {
  _classCallCheck(this, Animal)

  this.name = name || 'Kat'
}
```

确实十分简单，对吧。这段代码值得留意的点有两个：

一个是，使用 `class` 声明的 `Animal` 最后其实是被编译为一个函数。证明 `class` 跟类没关系，只是个语法糖。

另一个地方是，编译器帮我们插入了一个 `_classCallCheck` 函数调用，它会检查你有没有用 `new Animal()` 操作符来初始化这个函数。若有，则 `this` 会是被实例化的 `Animal` 对象，自然能通过 `animal instanceof Animal` 检查；若是直接调用函数，`this` 会被初始化为全局对象，自然不会是 `Animal` 实例，从而抛出运行时错误。这个检查，正解决了[上一篇文章][]提到的问题：如果忘记使用 `new` 去调用一个被设计构造函数的函数，没有任何运行时错误的毛病。

## 无继承——简单的 `class` + 方法声明

让我们再扩展一下例子，给它加两个方法。

```javascript
class Animal {
  constructor(name) {
    this.name = name || 'Kat'
  }

  move() {}
  getName() {
    return this.name
  }
}
```

```javascript
'use strict'

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps)
    if (staticProps) defineProperties(Constructor, staticProps)
    return Constructor
  }
})()

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

var Animal = (function() {
  function Animal(name) {
    _classCallCheck(this, Animal)

    this.name = name || 'Kat'
  }

  _createClass(Animal, [
    {
      key: 'move',
      value: function move() {},
    },
    {
      key: 'getName',
      value: function getName() {
        return this.name
      },
    },
  ])

  return Animal
})()
```

例子长了不少，但其实主要的变化只有两个：一是 `Animal` 被包了一层而不是直接返回；二是新增的方法 `move` 和 `getName` 是通过一个 `_createClass()` 方法来实现的。它将两个方法以 `key`/`value` 的形式作为数组传入，看起来，是要把它们设置到 `Animal` 的原型链上面，以便后续继承之用。

为啥 `Animal` 被包了一层呢，这是个好问题，但答案我们将留到后文揭晓。现在，我们先看一下这个长长的 `_createClass` 实现是什么：

```javascript
var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }

  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps)
    if (staticProps) defineProperties(Constructor, staticProps)
    return Constructor
  }
})()
```

它是个立即执行函数，执行又返回了另一个函数。说明啥，一定用了闭包，说明里面要封装些「私有」变量，那就是 `defineProperties` 这个函数。这很好，一是这个函数只会生成一次，二是明确了这个函数只与 `_createClass` 这个事情相关。

再细看这个返回的函数，接受 `Constructor`、`protoProps` 和 `staticProps` 三个参数。`staticProps` 我们暂时不会用到，回头再讲；我们传入的数组是通过 `protoProps` 接受的。接下来，看一下 `defineProperties` 做了啥事。

它将每一个传进来的 props 做了如下处理：分别设置了他们的 `enumerable`、`configurable`、`writable` 属性。而传进来的 `target` 是 `Animal.prototype`，相当于，这个函数最后的执行效果会是这样：

```javascript
function defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    // 前面处理其实得到这样这个 descriptor 对象：
    var descriptor = {
      ...props[i],
      enumerable: false,
      configurable: true,
      writable: true,
    }
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}
```

看到这里就很明白了，它就是把你定义的 `move`、`getName` 方法通过 `Object.defineProperty` 方法设置到 `Animal.prototype` 上去。[前面][上一篇文章]我们说过，`prototype` 是用来存储公共属性的。也就是说，这两个方法在你使用继承的时候，可以被子对象通过原型链上溯访问到。也就是说，我们这个小小的例子里，声明的两个方法已经具备了继承能力了。

至于 `enumerable`、`configurable`、`writable` 属性是什么东西呢，查一下[语言规范][ecmascript 2015(es6) specification]就知道了：

## 简单继承——一层继承 + 字段覆盖

```javascript
class Animal {
  constructor(name) {
    this.name = name || 'Kat'
  }
}

class Tiger extends Animal {
  constructor(name, type) {
    super(name)
    this.type = type || 'Paper'
  }
}
```

加一层继承和字段覆盖能看到啥东西呢？能看到继承底下的实现机制是怎么样的，以及它的 `constructor` 和 `__proto__` 属性将如何被正确设置。带着这两个问题，我们一起来看下编译后的源码：

```javascript
'use strict'

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass
    )
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  })
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass)
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

var Animal = function Animal(name) {
  _classCallCheck(this, Animal)

  this.name = name || 'Kat'
}

var Tiger = (function(_Animal) {
  _inherits(Tiger, _Animal)

  function Tiger(name, type) {
    _classCallCheck(this, Tiger)

    var _this = _possibleConstructorReturn(
      this,
      (Tiger.__proto__ || Object.getPrototypeOf(Tiger)).call(this, name)
    )

    _this.type = type || 'Paper'
    return _this
  }

  return Tiger
})(Animal)
```

精华在 `_inherits(Tiger, Animal)` 这个函数，我们按顺序来读一下。首先是一段异常处理，简单地检查了 `superClass` 要么是个函数，要么得是个 null。也就是说，如果你这样写那是不行的：

```javascript
const Something = 'not-a-function'
class Animal extends Something {}
```



```javascript
function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass
    )
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  })
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass)
}
```
## todo

* 解释为啥 `Animal` 需要用一个函数包一下
* 加一下 static function 的例子
* 加一下 static variable 的例子
* 加一下 arrow function as variable 的例子
* 查下规范 `writable` `configurable` `enumerable` 是啥

[上一篇文章]: https://blog.linesh.tw/#/post/2018-10-18-javascript-prototypal-inheritance
[babel used]: https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Ces2017%2Creact%2Cstage-0%2Cstage-3&prettier=false&targets=&version=6.26.0&envVersion=
[ecmascript 2015(es6) specification]: https://www.ecma-international.org/ecma-262/6.0/
