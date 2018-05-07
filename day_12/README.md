# Key Detection(day12)
> 简介：[JavaScript30](https://javascript30.com) 是 [Wes Bos](https://github.com/wesbos) 推出的一个 30 天挑战。项目免费提供了 30 个视频教程、30 个挑战的起始文档和 30 个挑战解决方案源代码。目的是帮助人们用纯 JavaScript 来写东西，不借助框架和库，也不使用编译器和引用。现在你看到的是这系列指南的第 12 篇。

## 介绍
给定一个字符串或者秘钥，如’terry‘ 监听输入的值来判断是否输入正确，来执行方法。

## 具体实现
* 监听键盘事件
* 把键盘所有的按键的值依次存入数组，
* 超过秘钥长度删除第一个数组的值
* 转换数组为字符串
* 通过includes()方法查找是否输入正确
* 

## 扩展
* [splice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)splice() 方法通过删除现有元素和/或添加新元素来更改一个数组的内容，会改变原数组的值(副作用)。
* [join](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。
* [includes](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。

## 参考资料
* [JavaScript 30天](https://javascript30.com/)
* 作者 Github [Wes Bos](https://github.com/wesbos)
* [Js 30 day 中文指南](https://github.com/soyaine/JavaScript30)
* allen_yu [练习Github](https://github.com/shunnien/JavaScript30day)