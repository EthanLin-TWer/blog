---
title: React Native运行机制
tags: react-native internal
---

这个主题其实还是很浅地涉及一下而已。以Android一个apk为例，这个打出来的包包含了什么东西？运行的时候有多少进程或者线程互相合作？

apk里面，有几个比较重要的部分，一个就是`index.bundle.js`，这个主要就是你写的JavaScript/TypeScript最后编译完成一个文件；一个是`*.dex`文件，这些是Java/Kotlin文件编译而成，里面包含了你写的原生代码（包括`MainActivity`等）、以及React Native部分的引擎等；一个是`libs/*.so`下的这些文件，这些似乎是C++文件，可能是构成RN Bridge（或者新版的JSI）、JavaScript引擎（Hermes或者JavaScriptCore）等需要高性能的代码。

到了运行时，一个apk似乎就一条主进程，然后会有几条明显的线程：Native主线程，这条好像就是Android UI渲染的主线程，由ART（Android RunTime负责启动和运行）；JavaScript引擎是一条单独线程，应该是由React Native部分的原生代码所启动，负责单独执行你的JS逻辑和代码，timer逻辑也在这条线程内；另外不知道React Native Bridge（或者新版的JSI）是不是也有一条独立的线程；另外还有啥别的线程吗？

> 有没有什么Android `adb`命令可以看到App打开后实际运行的进程和线程？
> 
> 为什么C++代码比Java什么的更加高效？
