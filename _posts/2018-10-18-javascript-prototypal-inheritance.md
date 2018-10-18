---
title: JavaScript 原型继承之精髓
---

「继承」本质上是为了代码复用。JavaScript 没有强类型、没有类的限制，这使得它得以实现一套非常简洁的继承方案。本篇就从「复用的底层机制」、「向上查找」几个层面，以问题驱动，来深入研究一下 JavaScript 的这套继承方案。

## 目录

* 需求：继承方案的设计要求
* 被复用的对象：`prototype`
* 优雅的语法糖：ES6 `class`

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

JavaScript 的继承有多种实现方式，具体有哪些，推荐读者可阅读：【待补充】。这里，我们直接看一版比较优秀的实现：

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

---

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
* https://javascriptweblog.wordpress.com/2010/06/07/understanding-javascript-prototypes/
* https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/
* http://bonsaiden.github.io/JavaScript-Garden/#object.prototype

参考：

* JavaScript 深入之继承的多种方法：https://github.com/mqyqingfeng/Blog/issues/16
* Prototypal Inheritance in JavaScript: http://crockford.com/javascript/prototypal.html

## TODOLIST

* 补全「多种继承实现方案」的连接材料：JS 语言精髓、博客材料
* 补全「构造函数调用需要 `new` 操作符」的连接材料：
