---
title: JavaScript 原型继承之精髓
---

一篇文章让你搞清楚 JavaScript 继承、`prototype`、`__proto__`、`constructor` 都是什么。

很多小伙伴表示不明白 JavaScript 的继承，说是原型链，看起来又像类，究竟是原型还是类？各种 `prototype`、`__proto__`、`constructor` 内部变量更是傻傻搞不清楚。其实，只要明白继承的本质就很能理解，继承是为了代码复用。复用并不一定得通过类，JS 就采用了一种轻量简明的原型方案来实现。Java/C++ 等强类型语言中有类和对象的区别，但 JS 只有对象。它的原型也是对象。只要你完全抛开面向对象的继承思路来看 JS 的原型继承，你会发现它轻便但强大。

## 目录

* 继承方案的设计要求
* 被复用的对象：`prototype`
* 优雅的 API：ES6 `class`
* 简明的向上查找机制：`__proto__`
* 构造函数又是个啥玩意儿
* 双链合璧：终极全图
* 参考

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

* 存储公用的数据和函数
* 覆盖被继承对象数据或函数的能力
* 向上查找/调用被继承对象函数的数据或函数的能力
* 优雅的语法（API）
* 增加新成员的能力
* 支持私有数据

「支持私有数据」，这个基本所有方案都没实现，此阶段我们可以不用纠结；而「增加新成员的能力」，基本所有的方案都能做到，也不再赘述，主要来看前四点。

## 被复用的对象：`prototype`

JavaScript 的继承有多种实现方式，具体有哪些，推荐读者可阅读：[JavaScript 语言精粹][]一书 和 [这篇文章](https://github.com/mqyqingfeng/Blog/issues/16)。这里，我们直接看一版比较优秀的实现：

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

请注意，**只有函数才有 `prototype` 属性**，它是用来做原型继承的必需品。

## 优雅的 API：ES6 `class`

然鹅，上面这个写法仍然并不优雅。在何处呢？一个是 `prototype` 这种暴露语言实现机制的关键词；一个是要命的是，这个函数内部的 `this`，依靠的是作为使用者的你记得使用 `new` 操作符去调用它才能得到正确的初始化。但是这里没有任何线索告诉你，应该使用 `new` 去调用这个函数，一旦你忘记了，也不会有任何编译期和运行期的错误信息。这样的语言特性，与其说是一个「继承方案」，不如说是一个 bug，一个不应出现的设计失误。

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

* 如果你没有使用 `new` 操作符，编译器和运行时都会直接报错。为什么呢，我们将在下一篇文章讲解
* `extends` 关键字，会使解释器直接在底下完成基于原型的继承功能

现在，我们已经看到了一套比较完美的继承 API，也看到其底下使用 `prototype` 存储公共变量的地点和原理。接下来，我们要解决另外一个问题：`prototype` 有了，实例对象应该如何访问到它呢？这就关系到 JavaScript 的向上查找机制了。

## 简明的向上查找机制：`__proto__`

```javascript
function Animal(name) {
  this.name = name
}
Animal.prototype.say = function() {
  return this.name
}
const cat = new Animal('kitty')

console.log(cat) // Animal { name: 'kitty' }
cat.hasOwnProperty('say') // false
```

看上面 👆 一个最简单的例子。打出来的 `cat` 对象本身并没有 `say` 方法。那么，被实例化的 `cat` 对象本身，是怎样向上查找到 `Animal.prototype` 上的 `say` 方法的呢？如果你是 JavaScript 引擎的设计者，你会怎样来实现呢？

我拍脑袋这么一想，有几种方案：

* 在 `Animal` 中初始化实例对象 `cat` 时，顺便存取一个指向 `Animal.prototype` 的引用
* 在 `Animal` 中初始化实例对象时，记录其「类型」（也即是 `Animal`）

```javascript
// 方案1
function Animal(name) {
  this.name = name
  // 以下代码由引擎自动加入
  this.__prototype__ = Animal.prototype
}

const cat = new Animal('kitty')
cat.say() // -> cat.__prototype__.say()

// 方案2
function Animal(name) {
  this.name = name
  // 以下代码由引擎自动加入
  this.__type__ = Animal
}

const cat = new Animal('kitty')
cat.say() // -> cat.__type__.prototype.say()
```

究其实质，其实就是：**实例对象需要一个指向其函数的引用（变量）**，以拿到这个公共原型 `prototype` 来实现继承方案的向上查找能力。读者如果有其他方案，不妨留言讨论。

无独有偶，这两种方案，在 JavaScript 中都有实现，只不过变量的命名与我们的取法有所差异：第一种方案中，实际的变量名叫 `__proto__` 而不是 `__prototype__`；第二种方案中，实际的变量名叫 `constructor`，不叫~~俗气的~~ `__type__`。实际上，用来实现继承、做向上查找的这个引用，正是 `__proto__`；至于 constructor，则另有他用。不过要注意的是，[尽管基本所有浏览器都支持 `__proto__`][mdn `__proto__`]，它并不是规范的一部分，因此并不推荐在你的业务代码中直接使用 `__proto__` 这个变量。

![JavaScript Prototypal Inheritance](https://user-images.githubusercontent.com/11895199/47256895-7a423e00-d4b9-11e8-93a7-076259912244.png)

从上图可以清楚看到，`prototype` 是用来存储类型公共方法的一个对象（正因此每个类型有它基本的方法），而 `__proto__` 是用来实现向上查找的一个引用。任何对象都会有 `__proto__`。`Object.prototype` 的 `__proto__` 是 null，也即是原型链的终点。

## 构造函数又是个啥玩意儿？

再加入 constructor 这个东西，它与 `prototype`、`__proto__` 是什么关系？这个地方，说复杂就很复杂了，让我们尽量把它说简单一些。开始之前，我们需要查阅一下[语言规范][ECMAScript 2015(ES6) Specification]，看一些基本的定义：

* [对象][Specification: object]：[对象是一组集合，其中可包含零个或多个属性。对象都有一个原型对象（译者注：即 [[Prototype]]/`__proto__`）][Specification: overview]
* 函数：[是对象类型的一员][Specification: function] 
* 构造函数：[构造函数是个用于创建对象的**函数对象**。每个构造函数都有一个 `prototype` 对象，用以实现原型式继承，作属性共享用][Specification: constructor]

这里说明了什么呢？说明了构造函数是函数，它比普通函数多一个 `prototype` 属性；而函数是对象，对象都有一个原型对象 `__proto__`。这个东西有什么作用呢？

上节我们深挖了用于继承的原型链，它链接的是原型对象。而对象是通过构造函数生成的，也就是说，普通对象、原型对象、函数对象都将有它们的构造函数，这将为我们引出另一条链—— 

![JavaScript Constructor Chain](https://user-images.githubusercontent.com/11895199/47259006-082c2200-d4d6-11e8-8abb-460b51719c50.png)

在 JavaScript 中，谁是谁的构造函数，是通过 `constructor` 来标识的。正常来讲，普通对象（如图中的 `cat` 和 `{ name: 'Lin' }` 对象）是没有 `constructor` 属性的，它是从原型上继承而来；而图中粉红色的部分即是函数对象（如 `Cat` `Animal` `Object` 等），它们的原型对象是 `Function.prototype`，这没毛病。关键是，它们是函数对象，对象就有构造函数，那么函数的构造函数是啥呢？是 `Function`。那么问题又来了，`Function` 也是函数，它的构造函数是谁呢？是它自己。由此，`Function` 即是构造函数链的终结。

## 双链合璧：终极全图

好了，是时候进入最烧脑的部分了。前面我们讲了两条链：

* 原型链。它用来实现原型继承，最上层是 `Object.prototype`，终结于 `null`，没有循环
* 构造函数链。它用来表明构造关系，最上层循环终结于 `Function`

把这两条链结合到一起，你就会看到~~一条双螺旋 DNA~~这几张你经常看到却又看不懂的图：

[![constructor/prototype/proto](https://user-gold-cdn.xitu.io/2018/8/14/16537b65ee6785a9?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)](https://juejin.im/post/5b729c24f265da280f3ad010)

[![constructor/prototype/proto](http://www.mollypages.org/tutorials/jsobj_full.jpg)](http://www.mollypages.org/tutorials/js.mp)

图都是引用自其它文章，点击图片可跳转到原文。其中，第一篇文章 [一张图理解 JS 的原型][] 是我见过解析得最详细的，本文的很多灵感也来自这篇文章。

## 参考

* [一张图理解 JS 的原型](https://juejin.im/post/5b729c24f265da280f3ad010)
* [Prototypal Inheritance in JavaScript](http://crockford.com/javascript/prototypal.html)
* [How Prototypal Inheritance really works](http://blog.vjeux.com/2011/javascript/how-prototypal-inheritance-really-works.html)
* [ECMAScript 2015(ES6) Specification](https://www.ecma-international.org/ecma-262/6.0/)
* [从__proto__和prototype来深入理解JS对象和原型链](https://github.com/creeperyang/blog/issues/9)
* [JavaScript 深入之继承的多种方法](https://github.com/mqyqingfeng/Blog/issues/16)
* [MDN: Inheritance in JavaScript][]
* [MDN: Inheritance and the prototype chain][]
* [MDN: Details of the object model][]
* [MDN: `__proto__`][]

[javascript 语言精粹]: https://book.douban.com/subject/3590768/
[mdn: inheritance and the prototype chain]: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
[mdn: inheritance and the prototype chain]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
[mdn: details of the object model]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
[mdn: `__proto__`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
[Specification: overview]: https://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-overview
[Specification: object]: https://www.ecma-international.org/ecma-262/6.0/#sec-terms-and-definitions-object
[Specification: function]: https://www.ecma-international.org/ecma-262/6.0/#sec-terms-and-definitions-function
[Specification: constructor]: https://www.ecma-international.org/ecma-262/6.0/#sec-constructor
