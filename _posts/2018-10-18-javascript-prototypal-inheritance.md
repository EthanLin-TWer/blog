---
title: JavaScript 原型继承之精髓
---

很多小伙伴表示不明白 JavaScript 的继承，说是原型链，看起来又像类，究竟是原型还是类？只要明白继承的本质就很能理解，继承是为了代码复用。复用并不一定得通过类，JS 就采用了一种轻量简明的原型方案来实现。所以真相是，JS 的继承跟类完全没有半毛钱关系。

## 目录

* 需求：继承方案的设计要求
* 被复用的对象：`prototype`
* 优雅的语法糖：ES6 `class`
* 简单的向上查找：`__proto__`

## 继承方案的设计要求

前面我们讲，继承的本质是为了更好地实现代码复用。再仔细思考，可以发现，这里的「代码」指的一定是「数据+行为」的复用，也就是把一组数据和数据相关的行为进行封装。为什么呢？因为，如果只是复用行为，那么使用函数就足够了；而如果只是复用数据，这使用 JavaScript 对象就可以了：

```javascript
const parent = {
  some: 'data',
}
const child = {
  ...parent,
  uniq: 'data',
}
```

因此，只有数据+行为（已经类似于一个「对象」的概念）的封装，才是继承技术所必须出现的地方。为了满足这样的代码复用，一个继承体系的设计需要支持什么需求呢？

* [ ] 存储公用的数据和函数
* [ ] 覆盖被继承对象数据或函数的能力
* [ ] 向上查找/调用被继承对象函数的数据或函数的能力
* [ ] 优雅的语法（API）
* [x] 增加新成员的能力
* [-] 支持私有数据

「支持私有数据」，这个基本所有方案都没实现，此阶段我们可以不用纠结；而「增加新成员的能力」，基本所有的方案都能做到，也不再赘述，主要来看前四点。

## 被复用的对象：`prototype`

JavaScript 的继承有多种实现方式，具体有哪些，推荐读者可阅读：[JavaScript 语言精髓][]一书 和 [这篇文章](https://github.com/mqyqingfeng/Blog/issues/16)。这里，我们直接看一版比较优秀的实现：

```javascript
function Animal(name) {
  this.name = name
  this.getName = function() {
    return this.name
  }
}

function Cat(name, age) {
  Animal.call(this, name)
  this.age = age || 1
  this.meow = function() {
    return `${this.getName()}eowww~~~~~, I'm ${this.age} year(s) old`
  }
}

const cat = new Cat('Lily', 2)
console.log(cat.meow()) // 'Lilyeowww~~~~~, I'm 2 year(s) old'
```

这个方案，具备增添新成员的能力、调用被继承对象函数的能力等。一个比较重大的缺陷是：对象的所有方法 `getName` `meow`，都会随每个实例生成一份新的拷贝。这显然不是优秀的设计方案，我们期望的结果是，继承自同一对象的子对象，其所有的方法都共享自同一个函数实例。

怎么办呢？想法也很简单，就是把它们放到同一个地方去，并且还要跟这个「对象」关联起来。如此一想，用来生成这个「对象」的函数本身就是很好的地方。我们可以把它放在函数的任一一个变量上，比如：

```javascript
Animal.functions.getName = function() {
  return this.name
}
Cat.functions.meow = function() {
  return `${this.getName()}eowww~~~~~, I'm ${this.age} year(s) old`
}
```

但这样调用起来，你就要写 `animal.functions.getName()`，并不方便。不要怕，JavaScript 这门语言本身已经帮你内置了这样的支持。它内部所用来存储公共函数的变量，就是你熟知的 `prototype`。当你调用对象上的方法时（如 `cat.getName()`），它会自动去 `Cat.prototype` 上去帮你找 `getName` 函数，而你只需要写 `cat.getName()` 即可。兼具了功能的实现和语法的优雅。

最后写出来的代码会是这样：

```javascript
function Animal(name) {
  this.name = name
}
Animal.prototype.getName = function() {
  return this.name
}

function Cat(name, age) {
  Animal.call(this, name)
  this.age = age || 1
}
Cat.prototype.meow = function() {
  return `${this.getName()}eowww~~~~~, I'm ${this.age} year(s) old`
}
```

## 优雅的语法糖：ES6 `class`

然鹅，上面这个写法仍然并不优雅。在何处呢？一个是 `prototype` 这种暴露语言实现机制的关键词；一个是要命的是，这个函数内部的 `this`，依靠的是作为使用者的你记得使用 `new` 操作符去调用它才能得到正确的初始化（具体原因请参见【待补充】）。但是这里没有任何线索告诉你，应该使用 `new` 去调用这个函数，一旦你忘记了，也不会有任何编译期和运行期的错误信息。这样的语言特性，与其说是一个「继承方案」，不如说是一个 bug，一个不应出现的设计失误。

而这两个问题，在 ES6 提供的 `class` 关键词下，已经得到了非常妥善的解决，尽管它叫一个 class，但本质上其实是通过 prototype 实现的：

```javascript
class Animal {
  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name)
    this.age = age || 1
  }

  meow() {
    return `${this.getName()}eowww~~~~~, I'm ${this.age} year(s) old`
  }
}
```

* 如果你没有使用 `new` 操作符，编译器和运行时都会直接报错。为什么呢，看一下 babel 编译后的源码就知道了
* `extends` 关键字，会使解释器直接在底下完成基于原型的继承功能

现在，我们已经看到了一套比较完美的继承 API，也看到其底下用以存储公共变量的地点和原理。接下来，我们要来深入一下它的向上查找机制：JavaScript 是如何通过 `prototype` 找到上层定义的函数和变量的。

## 简单的向上查找：`__proto__`

* 这样讲，`prototype` 用来存储公共的东西，`__proto__` 用来指向 `prototype` 以实现向上查找。之所以不直接用 `prototype` 来向上查找，一是不方便（比如 `typeof()Function.prototype).prototype`，这个 `typeof().prototype` 操作正是 `__proto__` 的作用），二是原型链的下游不能影响上游
* 用来实现向上查找的，正是这个 `__proto__` 将整套原型继承的继承链串起来。它的终点是 null
* 还有 `constructor` 这个东西，它指向的是用来生成对象的那个构造函数
* `__proto__` 是个内部实现，不是标准，不应该在代码中显式地依赖它
* 什么是真正的原型式继承？实现一个 `inherits` 函数，不要显式依赖于 `new` 操作符来操作一个函数
* `instanceof` 操作符也是通过 `obj.__proto__.__proto__ === Constructor.prototype` 实现的

```javascript
function inherits(child, parent) {
  function F() {}
  F.prototype === parent
  return new F()
}

function New(func) {
  const intermediate = {
    __proto__: func.prototype,
  }

  return function(...args) {
    func.apply(intermediate, ...args)
    return intermediate
  }
}
```

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
* https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance

## 参考

* JavaScript 深入之继承的多种方法：https://github.com/mqyqingfeng/Blog/issues/16
* 一张图理解 JS 的原型：https://juejin.im/post/5b729c24f265da280f3ad010
* Prototypal Inheritance in JavaScript: http://crockford.com/javascript/prototypal.html
* How Prototypal Inheritance really works http://blog.vjeux.com/2011/javascript/how-prototypal-inheritance-really-works.html
* [MDN `__proto__`][]

## TODOLIST

* 补全「构造函数调用需要 `new` 操作符」的连接材料：

[javascript 语言精髓]: http://??
[mdn `__proto__`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
