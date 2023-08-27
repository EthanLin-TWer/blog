# TASK-4 Improve first screen performance 

* [x] 看看首先能不能用上jsDelivr的压缩+加速先，把main/vendor/runtime都应用一下缓存，要看看Webpack的配置
  * [x] `index.html`不缓存，main/vendor都可以缓存一下
* 提升一下首屏加载性能，现在加载一个首页1M太扯了 - profile一下，code splitting或者砍掉无用的资源
  * [x] highlight.js 409.61K -> 248.19K (-39.5%)
    * [x] registerLanguage
    * [x] 把用到的语言配置到配置文件里头去
    * [x] 添加.env TS类型
  * [x] react-syntax-highlighter 248.19K -> 228.52K (-8%)
  * [x] esprima 228.52K -> 187.1K(-18%) - used by front-matter  -> js-yaml -> esprima
  * parse5 - used by rehype-raw, which is used to preserve HTMLs in markdown
  * `pnpm list <dep@version> --depth Infinity` can be used to check dependencies using this library
* [x] 看看能不能缓存下vendor/main里头不常更改的部分 - 可以，但是没啥意思，总体积还有所增加：187.1K -> 204.5K (+9%)
* 然后再搞一个CI monitor，每次提交监控build size
* [x] 看图片能不能压缩之后也放到gh-pages，然后通过CDN缓存压缩加速 —— 查看Github单个仓库的上限是多少，估算一下，好处是暂时不容易丢
  * [x] 工具选用：images / imagemin+imagemin-pngquant (要装全局pnglib去你的) / tinify - 对比下压缩效果
    * [x] images: https://zhuanlan.zhihu.com/p/93882055 - png支持太差
    * tinify: https://blog.csdn.net/Danchaofan_23/article/details/125963131
      * 要上传Tinify服务器处理。但是公开的图片么，不在意。唯一缺点就是放在pre-commit里的话没网的时候就不支持压缩图片/提交了…
      * 先用着，后面再优化
    * 原理: https://www.php.cn/faq/502524.html
  * [x] 这个应该可以写个pre-commit的task直接处理一下的
* https://reeli.github.io 为何睿睿的博客加载速度那么快……

# Todo:

* https://stackoverflow.com/questions/39040108/import-class-in-definition-file-d-ts
