---
layout: post
title: 前端测试框架相关Jasmine/Karma/Mocha/Grunt小记
---

> 如何搭建前端测试框架？


> karma/jasmine/mocha的区别与各自作用？


> requirejs普及及配置


> 使用Karma或Grunt跑jasmine测试的区别


> 如下一堆npm插件`grunt-contrib-jasmine`/`grunt-jasmine-task`/`jasmine`/`jasmine-core`/`karma-jasmine`的区别？


> trouble shooting?
> 
> * `TypeError: Object#<Object> has no method...`

不要使用`require('load-grunt-tasks')(grunt)`，而是使用`grunt.loadNpmTasks('grunt-contrib-jasmine')`的方式来加载npm插件

> 为什么？