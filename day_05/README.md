# Flex Panels Image Gallery(day05)
> 简介：[JavaScript30](https://javascript30.com) 是 [Wes Bos](https://github.com/wesbos) 推出的一个 30 天挑战。项目免费提供了 30 个视频教程、30 个挑战的起始文档和 30 个挑战解决方案源代码。目的是帮助人们用纯 JavaScript 来写东西，不借助框架和库，也不使用编译器和引用。现在你看到的是这系列指南的第 5 篇。

## 介绍
主要通过flex实现网页布局，通过动画监听设置对应切换class达到效果。

## 具体实现步骤
* 给.panels设置为flex弹性盒
* 给.panel设置为flex，横向排列（flex-direction: column;）,内容水平居中(justify-content: center;align-items: center;)
* 设置.panel点击展开效果以及动画（ transform: translateY）
* 监听点击事件切换class，监听[transitionend](https://developer.mozilla.org/zh-CN/docs/Web/Events/transitionend)切换active效果
## 涉及相关知识点
## CSS部分
主要涉及到flex布局
* flex-direction
* justify-content
* align-items
* flex-grow
[flex有关属性简介](http://www.592php.com/2018/02/26/flexbox%E5%B8%83%E5%B1%80%E9%80%9F%E8%AE%B0%E6%95%B4%E7%90%86/#more)
[另一篇flex布局详解](http://www.592php.com/2017/12/25/flex%E5%AD%A6%E4%B9%A0%E7%90%86%E8%A7%A3/)
## JS部分
* 事件监听click和transitionend
* 通过event.propertyName获取过渡效果的CSS属性
* 通过includes判断属性是否包含切换open-active
## 参考资料
* [JavaScript 30天](https://javascript30.com/)
* 作者 Github [Wes Bos](https://github.com/wesbos)
* [Js 30 day 中文指南](https://github.com/soyaine/JavaScript30)
* allen_yu [练习Github](https://github.com/shunnien/JavaScript30day)