---
layout: post
tags: github, 七牛, jekyll, ci, gitbook, markdown
categories: 翻译
title: 我是如何进行Spring MVC文档翻译项目的环境搭建、项目管理及自动化构建工作的
---

> 感兴趣的同学可以关注这个[翻译项目](https://github.com/linesh-simplicity/translation-spring-mvc-4-documentation) 、 [我的博客原文](http://blog.linesh.tw/#/posts/2016-06-26-auto-deploy-translation-to-production-using-jenkins-and-qiniu) 和 [我的Github](https://github.com/linesh-simplicity)

![](http://7xqu8w.com1.z0.glb.clouddn.com/spring-mvc-translation-project-final-representation.png "Final website of MVC translation project")

前段时间翻译的Spring MVC官方文档完成了第一稿，相关的文章和仓库可以点击以下链接。这篇文章，主要是总结一下这个翻译项目自开始到上线发布，完整的一个生命流程。内容包括 **翻译环境搭建** 、**项目管理** 与 **自动化构建** 三部分。

* [博客首页声明：Spring MVC官方文档翻译稿发布](http://blog.linesh.tw/#/posts/2016-06-23-spring-mvc-documentation-reference)
* [托管在七牛上的翻译文档](http://mvc.linesh.tw)
* [Github仓库](https://github.com/linesh-simplicity/translation-spring-mvc-4-documentation)

## 环境搭建

翻译与写作一样，首要之事均为专注于翻译/写作本身，而不考虑样式等方面。而章节之间的联系，自然也不想过多操心，这部分与样式一起，都可交由工具去处理。然后版本管理，不用说一定要上，后面也会看到github的生态圈使得它与其他工具做到了无缝集成。那么总结起来，我们需要的工具大体是：

* markdown
* markdown编辑器 Atom
* 版本管理 Git
* 代码托管平台 Github
* 写书专用工具 Gitbook
* HTML转markdown工具

### Markdown

Markdown是一种近乎完美的写作标记语言，其最大的功劳便是将写作从内容中分离出来，这个分离使你只专注于写作内容本身，极大地提高了效率及工作愉悦度。没有markdown的话，会是怎样一种情况？想想HTML和写论文经常使用的word。你在HTML中为内容混入各种各样的样式，写论文时最痛苦的莫过于调样式（不过笔者当年写论文时通过Office Word的样式窗也是完美地解决了内容和格式的问题）。

比如说，上面这段文字在markdown中写出来是这样的：

```
## 环境搭建

翻译与写作一样，首要之事均为专注于翻译/写作本身，而不考虑样式等方面。而章节之间的联系，自然也不想过多操心，这部分与样式一起，都可交由工具去处理。然后版本管理，不用说一定要上，后面也会看到github的生态圈使得它与其他工具做到了无缝集成。那么总结起来，我们需要的工具大体是：

* markdown
* markdown编辑器 Atom
* 版本管理 Git
* 代码托管平台 Github
* 写书专用工具 Gitbook
* HTML转markdown工具
```

说起来markdown这个名字也有点意思，一般的标记语言叫markup language。这里将up改成down，寓意着将标记语言中与内容本身无关的标记全部剔除，形成一个精简子集。本篇不是markdown用法记，所以更多的语法请自行~~百度~~Google。我这里可以提供几个链接：

* [Wikipedia: Markdown](https://en.wikipedia.org/wiki/Markdown)
* [Markdown overview](https://daringfireball.net/projects/markdown/)
* [Github上最有名的Markdown Cheat Sheet仓库](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### Markdown编辑器 Atom

![](http://7xqu8w.com1.z0.glb.clouddn.com/atom-as-translation-project-editor.png "Use Atom as the translation project's editor")

编辑器的选择并无定式，打造一个完全符合自己操作习惯的编辑器也是每个程序员应做的一个工作，这里我不赘述。在Mac上，不错的markdown编辑器有Sublime 3、Atom、MacDown、Mark Editor、Gitbook Editor、Mou等，可挑选适合自己的，我选择的是Atom，是因为有一个刚性的需求它能够满足：

* **与终端（terminal）的集成**。由于使用了版本管理，同时有时有拷贝文件、查看目录等需求，命令行肯定是必须随时在手的。终端方面我的选择是iTerm2+zsh，关于它们的配置和特性，可以查看博客的这两篇文章 [Mac优雅的工具集——iTerm2篇](http://blog.linesh.tw/#/posts/2016-03-11-elegant-mac-iterm2) 和 [Mac优雅的工具集——oh-my-zsh篇](http://blog.linesh.tw/#/posts/2016-03-13-elegant-mac-oh-my-zsh)。对如何在Mac上构建一个优雅的工具集有兴趣的同学，也可以前往Gitbook看看我正在写的这个系列：[关于优雅地使用Mac OS的理念、想法、工具与实践集](https://linesh.gitbooks.io/gitbook-elegant-mac-tools-system-closure/content/index.html)，不过还没写完就是了。

### 版本管理 Git

![](http://7xqu8w.com1.z0.glb.clouddn.com/git-logo.png "Git Logo")

Git作为版本管理的意义也不赘言。你肯定不想自己的工作区最后变成这样：

![](http://7xqu8w.com1.z0.glb.clouddn.com/word-as-version-manager.jpeg "Word As version control will suck")

同样本小节也不是Git入门的命令集，这部分请自行查阅学习。当然我还是可以给出一些链接，虽然没有太多的意义~~我真的不知道为什么我还要给~~。基本的几个命令能熟悉就可以满足日常的需要了。另外，zsh下的Git可以配一下 快捷键(alias) 和 自动补全，具体配置非常简单，可以来这篇文章[Mac优雅的工具集——oh-my-zsh篇](http://blog.linesh.tw/#/posts/2016-03-13-elegant-mac-oh-my-zsh)看一下最终的效果。

* [Git - 简易指南](http://www.bootcss.com/p/git-guide/)
* [A Visual Git Reference](http://marklodato.github.io/visual-git-guide/index-en.html)
* [廖雪峰的官方网站：史上最浅显易懂的Git教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/)~~这浮夸的标题收视率果然好~~

### 代码托管平台 Github

![](http://7xqu8w.com1.z0.glb.clouddn.com/github-homepage.png "Github Homepage")

Github是~~世界上最大的同性交友平台~~目前最大~~我并无依据~~的代码托管平台，其生态圈之繁荣与力量令人震惊，几乎你需要的所有工具和资源都可以在上面找到。它与Git不是一个层级的概念~~`git=github.substring(0, 3)`~~，这部分请自行搜索。在这个平台上，我可以给翻译项目一个`README.md`文件，为阅读的人做简单的介绍以及引流，同时它可与CI（持续集成）、Gitbook等工具完美集成，其内置的issue、pull-request功能还能与Zenhub结合，直接当成trello来进行项目管理之用。相关的工具下一节会介绍。

### 写书专用工具 Gitbook

上文提到了翻译内容与样式的分离。实际上在这里样式这部分就是由Gitbook自带的渲染引擎来负责的。此外，Gitbook还能帮助你管理整个书的目录结构、章节生成、搜索、词汇表、站点构建与生成等，同时它也有丰富的插件生态。这一切只需要你进行少量的配置（其实，就只是在书的根目录下运行`gitbook init`命令，它会生成下图所示的一个目录结构），其低学习成本与高效益，使它成为了写书最易入门的趁手工具。

```
.
├── README.md
└── SUMMARY.md
```

## 项目管理

项目管理方面的需求，主要是有时会有想法出现，希望增加什么特性，或者想到什么问题不想马上修，那么最好是有一个TODOLIST可以随时记录下来，并且能被方便地检索到。这方面的需求，怎么解决呢？

### issue + zenhub

![](http://7xqu8w.com1.z0.glb.clouddn.com/zenhub-as-issue-tracker.png "Use Zenhub As Issue tracker")

Github内置的issue功能已经好用到爆，再加上专为Github issue功能定制的[Zenhub](https://www.zenhub.com/)简直就是活生生把issue当成trello来用。一些内置特性如下，稍加体验即可满足所有小型项目管理上的需求：

* issue可以通过commit sha直接与相关的单次提交关联，还可以 [通过提交信息来引用、关闭issue](https://help.github.com/articles/closing-issues-via-commit-messages/)
* issue中支持GFM(Github Flavored Markdown)，可以直接使用todolist的语法
* 通过Command/Ctrl+V可以直接在留言中上传截图
* 可以为issue添加标签（tag）、类别（pipeline, 如正在做、还没做、已完成等）
* 可以为issue估点、指定负责人、燃尽图，简直就是为敏捷实践而生，不过在这个翻译项目中用不到这些，毕竟自己给自己估点没什么意思

![](http://7xqu8w.com1.z0.glb.clouddn.com/github-flavored-markdown-todolist.png "Github flavored markdown todolist")

## 自动化构建

自动化什么的构建？这还要从本翻译稿的托管平台——Gitbook——说起。gitbook是一个绝好的写作平台，官方也通过Webhooks提供了与Github的集成，只要你把代码`git push`到远端仓库，Gitbook就会自动拉取仓库中的内容，按照特定的格式为书本构建站点。过大概2到3分钟，你就可以在[Gitbook](https://linesh.gitbooks.io/spring-mvc-documentation-linesh-translation/content/)上看到自己最新的更新已经到书上了。一切看起来都十分美好，一键提交与部署。但是有一个最大的问题：**Gitbook在国内的速度不行，轻则卡顿，重则整站被墙刷不出页面**。

这种情况下，我决定将整个翻译同时迁移到七牛上。七牛的CDN在国内速度名声在外，用来托管静态站点再好不过~~只需要拍两张身份证正反双面的照片上传等待审核即可~~。迁移也很简单，因为gitbook生成的静态站点其实就是`_book`文件夹，只需要把这个文件夹下的全部东西放到七牛空间上去，在使用`index.html`作为入口就可以了。但是，问题又来了：

* 七牛网站上无法上传文件夹。就算可以，我也无法忍受每次都要手动将文件夹拖上去
* 每次仓库有更新，都需要将最新的内容同步到七牛空间上，并覆盖旧版本的同名文件
* 第二步的操作还不能通过githook+shell的方式来做，因为整个过程的耗时会使`git push`的反馈周期变长，从而使得我更不倾向于频繁提交，影响翻译体验

解决方案也很简单：

* 第一条，寻找七牛的[SDK](http://developer.qiniu.com/resource/official.html#tool)，通过命令行进行上传
* 第二条，既然不能，[细想]也没必要在本地做，那么就在远端做好了。远端在哪里呢？**CI/Pipeline**啊，这样构建站点、同步文件等工作都可以并行进行了，既不会阻碍本地开发速度，也不是翻译时需要考虑的问题，我还是只需要像以前一样`git push`提交代码即可，站点从构建到最终上线，都有CI在负责

想法出来了，在实施的时候还是走了一些弯路的。这些折腾过程在此无法深表，只有可能带过~~程序员们都懂的~~。在CI的选择上，我选择了Jenkins 2.0，原因比较纯粹，最近项目上在使用Jenkins 2.0，我刚好当是练手。至此文章成笔之时，我仍在考察其他选择，比如travis-ci，看起来UI和配置都简单许多，这部分可能是后文了。下面会简单介绍~~折腾~~搭建Jenkins 2.0作为本翻译项目CI的步骤和关键节点。

### Jenkins下载、安装与启动

话说Jenkins不愧为CI/CD领域的先锋，这个产品每周都会发一个小版本（目前最新是2.11）。Jenkins 2.0的安装，可以通过直接下载安装包的方式下载，在Mac上也可以通过`brew install jenkins`来下载安装。安装完成后，运行`jenkins`即可在`localhost:8080`启动一个本地的jenkins。

![](http://7xqu8w.com1.z0.glb.clouddn.com/jenkins-pipeline-home-page.png "Jenkins home page")

### 注册一个七牛开发者账号

![](http://7xqu8w.com1.z0.glb.clouddn.com/qiniu-home-page.png "Qiniu Home Page")

流程十分简单，免费用户可以有一个空间，有一定的流量限制，不过通常来说对于只有一个空间需求的用户来说，这样的流量应该不会超吧。由于我已经超过了一个空间的需求，同时我又有配置独立域名的需求，所以需要更多的权限。流程也很简单，进行实名认证、填写身份证、上传本人及身份证正反面照片各一张~~本人不需拍反面~~，最后保证账户里有最少10元即可。

### Jenkins：新建一个类型为pipeline的项目

pipeline搭建起来了，接下来我们需要捋一捋前面说到的两个步骤：构建站点、上传站点文件到七牛空间。细分下来，主要是有以下的task要做：

* 引入必要的依赖
* 构建站点
* 同步到七牛

#### 使用NPM，引入gitbook/gitbook-cli/qiniu

![](http://7xqu8w.com1.z0.glb.clouddn.com/npm-home-page.png "Npm home page")

我们想要构建站点，必然使用gitbook的命令行工具；要使用七牛的命令行，也必然引入相应的工具。这里我走过一些弯路，比如尝试将七牛工具以插件形式引入到Jenkins job中来，但是2.0以后，我们更倾向于使用脚本来描述构建工作，而非将Jenkins单纯当作一个转存/转储的工作区间并为该workspace零散地写一些适配脚本。因此，在pipeline类型的项目就不存在每个job特定的配置空间，若想使用插件，配置起来有些麻烦。于是，最后我决定使用七牛的npm包（肯定是有的），并通过NPM来管理所有依赖。以下是一个`package.json`文件需引入的依赖：

```json
{
   ...
   "devDependencies": {
        "gitbook": "^3.1.1",
        "gitbook-cli": "^2.3.0",
        "qiniu": "^6.1.11"
    },
    ...
}
```

另外，需要注意的是，Gitbook的渲染引擎已经升级到v3.1.1版本，与Legacy v2.6.7版引擎相比，主要的区别是[v3支持多个部分(part)的文章](https://github.com/GitbookIO/gitbook/blob/master/docs/pages.md)、默认关闭了目录中章节前的数字等。其中multipart的部分有些[小bug](https://github.com/GitbookIO/gitbook/issues/1301)但还可以忍受，但是默认关闭的目录数字则需要通过以下的配置给设置回来。在`book.json`文件中：

```json
{
   "gitbook": ">=3.1.0",
   "pluginsConfig": {
      "theme-default": {
         "showLevel": true
      }
   }
}
```

#### 构建站点

简单地运行命令`gitbook build`即可生成站点目录。最后的构建脚本[Jenkinsfile.groovy](https://github.com/linesh-simplicity/translation-spring-mvc-4-documentation/blob/master/Jenkinsfile.groovy)如下所示：

```groovy
node ('main') {
    stage 'Pull latest changes from SCM'
    git([
        url: 'git@github.com:linesh-simplicity/translation-spring-mvc-4-documentation.git',
        branch: 'master'
    ])

    stage 'Download dependencies: Gitbook/Gitbook-cli/Qiniu'
    sh 'npm install'

    stage 'Build book serving directory through Gitbook'
    sh 'gitbook build --gitbook=3.1.1'

    stage 'Upload production _book to Qiniu through their API'
    sh './jenkins/sync-book-to-qiniu.sh'
}
```

#### 上传文件到七牛

使用七牛的命令行工具进行文件上传，需要配置一些东西，主要是要同步的本地目录、七牛的Access key和Secret Key等，示例代码则可以从七牛SDK的官网上参考。我最后完成的这份同步脚本[sync-book-to-qiniu.js](https://github.com/linesh-simplicity/translation-spring-mvc-4-documentation/blob/master/jenkins/sync-book-to-qiniu.js)如下所示，其中完成了 **准备本地同步目录** 、 **排除不同步文件** 、 **指定覆盖上传策略**等工作：

```js
const qiniu  = require("qiniu");
const glob   = require('glob');
const crypto = require('crypto-js')

const ignoredFiles = [
    'Jenkinsfile.groovy',
    'sync-book-to-qiniu.js',
    'sync-book-to-qiniu.sh',
    'mvc-origin.md',
    'package.json'
];

// node ./jenkins/sync-book-to-qiniu.js $ACCESS_KEY $SECRET_KEY
let qiniuAccessKey = process.argv.slice(2, 3);
let qiniuSecretKey = process.argv.slice(3);

// Prepare Qiniu configuration options
qiniu.conf.ACCESS_KEY = qiniuAccessKey.toString(crypto.enc.Utf8);
qiniu.conf.SECRET_KEY = qiniuSecretKey.toString(crypto.enc.Utf8);
bucket = 'mvc-linesh-tw';

glob.sync('_book/**/*.*', {}).filter(filename => {
    for (let ignored of ignoredFiles) {
        if (filename.endsWith(ignored)) return false;
    }
    return true;
}).forEach(filepath => {
    const resource_key_in_qiniu_api = filepath.substring('_book/'.length, filepath.length);
    // ':' means allow override upload. For further details refer to offical API docs
    const policyToken = new qiniu.rs.PutPolicy(bucket + ":" + resource_key_in_qiniu_api).token();
    uploadFile(policyToken, resource_key_in_qiniu_api, filepath)
})

function uploadFile(uptoken, key, localFile) {
    let extra = new qiniu.io.PutExtra();
    qiniu.io.putFile(uptoken, key, localFile, extra, function(error, response) {
        if(!error) {
            console.log('[Success] File uploaded: ' + response.key);
        } else {
            console.log(error);
        }
    });
}
```

同行们求review代码啊～

### 避免提交七牛的AK和SK

AK(Access Key)和SK(Secret Key)是七牛分配给注册开发者的一对密钥，不能泄露，否则其他人得到了就可以对你的七牛空间进行任意操作。但是，你要把构建工作自动化，就必须这段脚本提交到github上，同时CI还要能从你的代码中读出正确的AK和SK，这要如何做到呢？回答是，通过CI提供的接口，由pipeline将参数注入到你的代码中。这样，AK和SK就被保存在了pipeline上，别人无权对其进行访问。在Jenkins CI上，这是通过一个[EnvInject插件](https://wiki.jenkins-ci.org/display/JENKINS/EnvInject+Plugin)来做到的，在travis-ci中则更加简单，直接设置。

![](http://7xqu8w.com1.z0.glb.clouddn.com/jenkins-envinject-plugin.png "Jenkins EnvInject Plugin")

![](http://7xqu8w.com1.z0.glb.clouddn.com/travis-ci-env-setting.png "Travis CI environment variables settings")

## 总结

![](http://7xqu8w.com1.z0.glb.clouddn.com/jenkins-build-final-success-view.png "Jenkins build final success view")

呼呼，最后看到这个图的时候还是很激动的，所有的部署工作都成功了。那么也是时候结束了，本篇文章总结起来，先是提到如何准备和搭建让翻译工作更加专注和高效的环境和工具，如markdown/atom/gitbook/git/github等，然后讲到如何使用github的issue和zenhub来辅助管理翻译项目中的待办事项和协作，最后一节讲述了如何使用CI工具将整个站点的构建和发布自动化，提高翻译和部署效率。任何有疑问或说错的地方，也请各位给我指出。

—— 2016-07-01 

## Bonus：Marketing
