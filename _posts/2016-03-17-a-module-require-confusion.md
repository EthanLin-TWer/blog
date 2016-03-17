---
layout: post
title: 从项目上一个模块疑惑说开去
---

## JavaScirpt也有模块化？
起因是这样的，今天发现项目上的每个js文件基本都是这样的写法：

```javascript
module("module.name.bainianlaodian", (function() {
   function isValidRequest() {
      // implementation;
   }
   return {
      isValidRequest: isValidRequest
   }
}()))
```

然后在外部引用的时候只需要使用`module.name.bainianlaodian.isValidRequest()`就可以调用模块内的函数了，而且可以引用任意路径下的js文件。我就有点好奇，什么时候JavaScript有模块了？而且引用时的路径是在哪里指定的？问了一下项目组的同事，大家也表示不太清楚这个东西。那就`Ctrl+B`一下，看一下`module`这个变量的定义点吧，Intellij给出的提示是：

```
module (externs.js, src/main/webapp/.../bower_components/xdate/build)
module (colors.js, node_modules/grunt/node_modules/colors)
module (cli.js, node_modules/grunt-contrib-jslint/node_modules/jslint/node_modules/cli)
module Window (qunit.js, src/main/webapp/.../bower_components/modernizr/test/qunit)
module Window (qunit.js, src/main/webapp/.../bower_components/underscore/test/vendor)
...
```

看着都不像，而且都是通过`npm`或者`bower`引进来的工具。我所期待的结果，应该是类似于nodejs或者类似的框架或环境所提供的变量和加载方式，类似于[这篇文章](http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434502419592fd80bbb0613a42118ccab9435af408fd000)讲到的模块加载的方式。嗯，既然蛮干无用，那就求助一下程序员的良师益友Google吧：

### Google也解决不到的问题

* `javascript module`
* `jquery module`
* `javascript module("", function() {`
* `commonjs module`
* `nodejs module`
* `amd javascript module`

用以上的方式作为关键词，均没有找到什么有价值的线索。nodejs中虽然存在`module`这么一个变量，但是js代码没有在服务端执行的可能。Google了一下也没有发现是jQuery或者CommonJS规范里的内容。这下可没有线索了，我更加怀疑这个`module`是项目里自己定义实现的了。但是从定义处入手并不能找到有价值的线索，那怎么办呢？既然IDE也无法给出有效的提示，那我就做一下人肉搜索咯，`Ctrl+Shift+F`全文搜索一下`module`这个关键词！过了两秒钟，IDE弹出一个对话框说"1,001 occurrences found so far. Are you sure you wish to continue?"额的神啊，看来这个刨根问底还真不容易，不过既然这是唯一的线索了，那果断还是要Continue的。于是我拍下了Continue，一共有7455出地方出现了`module`这个词。茫茫词海中，该如何捞到有价值的线索呢……？