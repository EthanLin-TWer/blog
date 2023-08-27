# TASK-4 Improve first screen performance 

* [x] 看看首先能不能用上jsDelivr的压缩+加速先，把main/vendor/runtime都应用一下缓存，要看看Webpack的配置
  * [x] `index.html`不缓存，main/vendor都可以缓存一下
* 提升一下首屏加载性能，现在加载一个首页1M太扯了 - profile一下，code splitting或者砍掉无用的资源
  * [x] highlight.js 409.61K -> 248.19K (-39.5%)
    * [x] registerLanguage
    * [x] 把用到的语言配置到配置文件里头去
    * [x] 添加.env TS类型
  * parse5
  * react-syntax-highlighter
  * esprima
* 看看能不能缓存下vendor/main里头不常更改的部分
* 然后再搞一个CI monitor，每次提交监控build size
* !!low 看图片能不能压缩之后也放到gh-pages，然后通过CDN缓存压缩加速 —— 查看Github单个仓库的上限是多少，估算一下，好处是暂时不容易丢
  * 工具选用：images / imagemin+imagemin-pngquant / tinify - 对比下压缩效果
    * images: https://zhuanlan.zhihu.com/p/93882055
    * imagemin+imagemin-pngquant: http://www.taodudu.cc/news/show-5120881.html?action=onClick
    * imagemin+imagemin-pngquant: http://aihongxin.com/4627.html
    * tinify: https://blog.csdn.net/Danchaofan_23/article/details/125963131
    * 原理: https://www.php.cn/faq/502524.html
  * 这个应该可以写个precommit的task直接处理一下的
