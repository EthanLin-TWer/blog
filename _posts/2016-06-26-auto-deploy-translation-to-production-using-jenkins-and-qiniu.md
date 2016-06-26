---
layout: post
title: 使用Jenkins和七牛云自动化翻译文档发布流程
---

由gitbook迁移到七牛。其实就是将gitbook生成的静态站点`_book`文件夹拷贝到七牛的空间里，然后使用`index.html`作为入口。其中，主要就是两步工作：

1. 确保使用正确的gitbook和gitbook-cli版本进行`gitbook build`构建，生成`_book`目录：
  * 使用npm引入最新的gitbook和gitbook-cli：`npm install gitbook gitbook-cli --save`
  * 在`book.json`中指定要使用的gitbook版本：` "gitbook": ">=3.1.0" `
2. 将生成的`_book`目录同步到七牛云。七牛提供了相应的开发者工具，只需要调用其API即可：`./qrsync ./conf.json`

其中第二步，最容易想到的就是利用`git hook`的方式，在提交前调用七牛的API接口。但这个过程可能需要持续3~5分钟，这是我等不起的，这会让我尽量避免去push，进而使得我无法频繁提交。并且，提交就是提交，构建过程并不是我所需要关心的，也不需要让它占用我的时间。那么，很自然地想到， **是否能将这个过程放到远端来执行呢？**

这不就是CI的作用嘛！想到这里，马上安装一个Jenkins撸起

* 安装Jenkins
* 新建一个free-style的项目
* 配置git仓库地址、配置credential、配置Poll SCM
* 安装Hudson Post Build插件：用于在构建完成后、七牛同步前执行一些脚本
* 安装七牛云-jenkins插件：用于完成目录到七牛的自动同步
* 注册一个七牛云开发者账号（如果要自定义域名，必须实名认证~~简直是坑~~并且账户里10元以上人民币）
* 写点脚本

## Ant Glob Pattern

先上最后的成果图：

![](http://7xqu8w.com1.z0.glb.clouddn.com/mvc-translation-with-new-domain-hosted-in-qiniu.png)

![](http://7xqu8w.com1.z0.glb.clouddn.com/jenkins-pipeline-final-success.png)
