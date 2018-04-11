# JavaScript Drum Kit(day1)
> 简介：[JavaScript30](https://javascript30.com) 是 [Wes Bos](https://github.com/wesbos) 推出的一个 30 天挑战。项目免费提供了 30 个视频教程、30 个挑战的起始文档和 30 个挑战解决方案源代码。目的是帮助人们用纯 JavaScript 来写东西，不借助框架和库，也不使用编译器和引用。现在你看到的是这系列指南的第 3 篇。

## 介绍
用 JavaScript 和 CSS3 实现拖动滑块时，实时调整图片的内边距、模糊度、背景颜色，同时标题中 JS 两字的颜色也随图片背景颜色而变化。

## 具体实现步骤

### 设置基本html布局和css实现
### 通过事件监听input调整框
改变css对应参数，实现滤镜和表框大小改变和颜色值替换

## 涉及相关知识点
### JS部分
addEventListener事件的‘change’和‘mousemove’
es2015的[模板字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings)
[HTMLElement.dataset](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/dataset)

### CSS部分
[使用CSS变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_variables)
[:root](https://developer.mozilla.org/zh-CN/docs/Web/CSS/%3Aroot)
:root这个CSS伪类匹配文档树的根元素。对于HTML来说，:root表示<html>元素，除了优先级更高之外，与html选择器相同
### HTML部分

## 延伸部分
* NodeList 和 Array 的区别
可以打开 proto 查看它的方法，其中有 forEach()、item()、keys() 等。而 Array 的 prototype 中有 map()、pop() 等数组才有的方法。
* CSS滤镜（filter）
[CSS滤镜（filter）](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)属提供的图形特效，像模糊，锐化或元素变色。过滤器通常被用于调整图片，背景和边界的渲染。

## 参考资料
* [JavaScript 30天](https://javascript30.com/)
* 作者 Github [Wes Bos](https://github.com/wesbos)
* [Js 30 day 中文指南](https://github.com/soyaine/JavaScript30)
* allen_yu [练习Github](https://github.com/shunnien/JavaScript30day)