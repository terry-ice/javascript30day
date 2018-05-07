# HTML Video Player(day11)
> 简介：[JavaScript30](https://javascript30.com) 是 [Wes Bos](https://github.com/wesbos) 推出的一个 30 天挑战。项目免费提供了 30 个视频教程、30 个挑战的起始文档和 30 个挑战解决方案源代码。目的是帮助人们用纯 JavaScript 来写东西，不借助框架和库，也不使用编译器和引用。现在你看到的是这系列指南的第 11 篇。

## 介绍
主要实现一个播放器的一些控制效果，播放/暂停，音量，播放速率，播放位置。

## 具体实现
获取播放器对应操作按钮的元素

* 给播放按钮和video元素添加点击事件来切换视频播放暂停
* 给快进快退按钮增加控制播放时间位置事件video.currentTime
* 通过按钮改变来触发播放的速率
* 通过按钮控制播放器的声音大小
* 通过e.offsetX计算控制的进度条，完成换算。

## 扩展
* [currentTime](https://developer.mozilla.org/zh-CN/docs/Web/API/Animation/currentTime)Animation.currentTime属性返回或设置动画的当前时间值（以毫秒为单位），无论动画正在运行还是已暂停。
* [volume](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement/volume)播放的音量
* [duration](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement/duration)HTMLMediaElement.duration 属性以秒为单位给出媒体的长度，如果没有媒体数据可用，则为零。

## 参考资料
* [JavaScript 30天](https://javascript30.com/)
* 作者 Github [Wes Bos](https://github.com/wesbos)
* [Js 30 day 中文指南](https://github.com/soyaine/JavaScript30)
* allen_yu [练习Github](https://github.com/shunnien/JavaScript30day)