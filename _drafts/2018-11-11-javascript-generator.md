---
title: JavaScript 生成器之精髓
---

summary...

## 目录

* 迭代器 - Iterator

## 迭代器 - Iterator

迭代器和生成器是你天天在用但又感知不到的东西。生成器是用来生成迭代器的东西，其基础还是迭代器。让我们先从迭代器入手。

迭代器是一类**特殊对象**，它具有用来**访问迭代过程**的**专用接口**。迭代者，循环也。可以这样理解，它是专门用来处理循环过程的一类接口，最终达到简化循环的目的。任何具备这类接口特征的对象，都认为具有了迭代器的特征。先来看看手写循环过程的痛点在哪里：

```javascript
const colors = ['blue', 'green', 'red']
for (let i = 0; i < colors.length; i++) {
  doSomething(colors[i])
}
```

这可能是你每天都会写的代码。但看完这篇文章后，希望这样的代码不要再出现于你的手下。2018 年，不应该再用这么命令式的方式写代码了。命令式有什么毛病呢？

1.  对于每类数组，其循环结构的模板代码都是重复的。代码量较大，重复多，不优雅
2.  需要手动管理索引，以获得对应元素的值
3.  对于多重循环，不同层之间的索引值可能相互引用修改，难以调试

相反，我们至少应该以更加「声明式」一些的思路来写。比如，以下的方式：

```javascript
for (color of colors) {
  doSomething(color)
}
```

这是 ES6 提供的 `for..of` 语法。当然，你可以说它就是把循环过程封装在关键字下，但试想一下，如果它处理的不是数组呢？你就不能以索引的方式来访问元素了，对不？你也就不能用 `length` 的方式来判断循环结束了，对不？于是我们想到，为了使我们对命令式循环的处理流程更加通用，我们需要为所谓的「可迭代对象」规定一个统一的接口，然后就能在 `for..of` 底下使用一套统一的算法来迭代它们了。

```javascript
function createIterator(items) {
  let index = 0
  return {
    next() {
      const done = index >= items.length
      const value = done ? undefined : items[index]
      index += 1

      return { value, done }
    },
  }
}
```

如上所示，迭代器其实就是一个拥有 `next()` 接口的对象，该接口被调用时，返回两个值：迭代是否已经结束，以及当前的元素值。它将索引操作封装在迭代器内部，从而避免了我们手动去管理索引。实际上，ES6 提供的 `for..of`，就是应用了这样一个迭代器后得到的语法糖，我们可以直接拿到值：

```javascript
const colors = ['blue', 'green', 'red']
for (let color of colors) {
  console.log(color)
}
```

在 ES6 中，这个迭代器函数被保存到原型上的 `[Symbol.iterator]` 键上。**也即是说，所有提供了这个键的对象，都能被当成可迭代对象被访问（如 `for..of` 运算符、展开运算符等 `...object`）**。在内建类型中，`Array`、`Map`、`Set`、`String` 都是可迭代对象，其内建迭代器分别是：

<!-- prettier-ignore-start -->
```javascript
Array.prototype[Symbol.iterator]  // [Function: values]
Set.prototype[Symbol.iterator]    // [Function: values]
Map.prototype[Symbol.iterator]    // [Function: entries]
String.prototype[Symbol.iterator] // [Function: [Symbol.iterator]]
```
<!-- prettier-ignore-end -->

这个东西到目前为止，看起来都还没什么价值（当然，它是一种十分常见的编程模式）。再来看看生成器，它本质上是一个迭代器（因为每一次执行都返回一个迭代器），也可以用来生成迭代器，只不过它返回的迭代器除了可以 `next()`，还可以 `throw()`。看到这里，我觉得，`next()` 这个过程如果不能恰好自动化地解决一些问题，那就没什么作用。

逛了一圈知乎，提到有这个几个作用：

* 懒求值 lazy evaluation
* 异步流程控制 `async` / `await`

能用来实现 `async` / `await` 自然是神奇的，我准备再写一篇文章来总结。懒求值这个事情我看来好像就是瞎扯，因为如果 generator 函数最终被自动化，你哪里有手动「懒」一把的地方？还不是一把全执行完。当然，可能是我没有理解到它的场景。

像 `redux-saga` 就利用了 generator。其精华就在利用了 `yield take(action)` 这个异步等待的事件来达到实现上的暂停，同一个业务不同阶段的代码可以都写在一块，更加内聚。然而，对于很多只是把它当同步副作用来使的开发者（包括我），懒求值形同虚设，还不都是跟同步一样一把求完。

其他的还有：向生成器传递参数、生成器的组合、用于实现异步流程控制等。大概代码如下：

```javascript
function* run(generator) {
  let result = null
  let value = null

  do {
    result = generator.next(value)
    value = result.value

    if (typeof value === 'function') {
      value(function(error, data) {
        if (error) {
          return generator.throw(error)
        }

        result = generator.next(data)
        value = result.value
      })
    }
  } while (!result.done)
}

function readFile(filename) {
  return function(callback) {
    fs.readFile(filename, callback)
  }
}

run(function*() {
  let content = yield readFile('package.json')
  console.log(content)
})
```

这个方案比较完美地解决了异步变同步的问题，也能解决嵌套回调的问题。不过它是通过契约这么做的，有一定的毛病：最主要一个是，你要改造所有返回异步的函数，包装一下将后续流程包装在 `callback` 里面。这个东西可以通过 `thunkify` 轻松做到，但是，从调用端来看，是没有任何「契约」的。我既不知道你那边返回的是啥，你重构了以后也很难想象所有调用点都会收到影响，没有运行时的提示。

* http://www.dabeaz.com/finalgenerator/
* http://www.dabeaz.com/finalgenerator/FinalGenerator.pdf
