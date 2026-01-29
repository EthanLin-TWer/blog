# TASK-5 Make sure the site is accessible in China  

* [x] 找一个墙内能用的CDN，现在环境上博客详情用的CDN还是会指向被墙的`raw.githubusercontent`API
* [x] 修几个博客访问不了的问题
* 把缓存和Details也换成国内CDN
* 换成国内的域名
* 图片可访问性。GitHub的图片渲染走raw.usercontent API，国内被墙，现在暂时直接通过CDN来代理输出了。但是影响我写markdown。最好的方案是，我markdown还是用相对路径的语法写，跟部署没有关系，本地也能渲染，然后渲染markdown的时候做一下rewrite，代理到CDN
