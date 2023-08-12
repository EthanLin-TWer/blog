# TASK-4 Improve first screen performance 

* 看看首先能不能用上jsDelivr的压缩+加速先，把main/vendor/runtime都应用一下缓存，要看看Webpack的配置
  * https://github.com/EthanLin-TWer/blog/tree/gh-pages
* 看看图片能不能压缩之后也放到gh-pages，然后同样通过CDN缓存压缩加速 —— 查看Github单个仓库的上限是多少，估算一下，有个好处是暂时不容易丢
  * 这个应该可以写个precommit的task直接处理一下的
* 提升一下首屏加载性能，现在加载一个首页1M太扯了 - profile一下，code splitting或者砍掉无用的资源
* 看看能不能缓存下vendor/main里头不常更改的部分
* 然后再搞一个CI monitor，每次提交监控build size
