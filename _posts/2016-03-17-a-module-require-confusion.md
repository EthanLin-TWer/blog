---
layout: post
title: 从项目上一个模块疑惑说开去
---

> 出于商业机密保护，本博客中出现的所有代码与文字均已隐去所有与客户相关的信息。若仍有泄露请第一时间联系博主我：linesh.simpcity@gmail.com。

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

然后在外部引用的时候只需要使用`module.name.bainianlaodian.isValidRequest()`就可以调用模块内的函数了，而且可以引用任意路径下的js文件。我就有点好奇，什么时候JavaScript有模块了？而且引用时的路径是在哪里指定的？虽然靠猜也可以大概猜到，这个只需要通过维护一个全局的map记录模块名和对应的函数即可做到，不过还是挺有兴趣看一下具体的实现。于是问了一下项目组的同事，大家也表示不太清楚这个东西。那就`Ctrl+B`一下，看一下`module`这个变量的定义点吧，Intellij给出的提示是：

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

### 

有意思。由于搜索的名字太过宽泛，所以必然有很多不相关的结果，应该选择性忽略。比如`pom.xml`、`build.gradle`、`npm-debug.log`、test/`node_modules`/`bower_components`/java代码文件夹下的一切东西，最后发现了两个挺有可能相关的文件，一个在`bainianlaodian-libraries.generated.js`文件中，另一个在`js/common`文件夹下的一个`module.js`文件里。前者一看就是生成的代码，代码如下：

```javascript
  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }
```

看起来好像有点关系，其实并没有。但是又增长了见识，这段代码是在检测是否运行在nodejs的服务端环境，若是就把`_`注册到`module.exports`变量中作为模块暴露出去，若是在浏览器端，则把`_`注册到全局对象`root`中去，这个`root`在某处其实也是被赋予全局变量`window`的值的。

但是在`js/common/module.js`这个文件里，





