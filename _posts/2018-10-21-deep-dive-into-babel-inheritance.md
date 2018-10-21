---
title: 深入 JavaScript 原型继承原理——解读 babel 编译码
---

[前文说过](https://blog.linesh.tw/#/post/2018-10-18-javascript-prototypal-inheritance)，ES6 的 `class` 语法糖是个近乎完美的方案，你还不信？这篇补遗。

```javascript
class Animal {
  constructor(name) {
    this.name = name || 'Kat'
  }
}
```

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
