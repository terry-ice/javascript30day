# LocalStorage(day15)
> 简介：[JavaScript30](https://javascript30.com) 是 [Wes Bos](https://github.com/wesbos) 推出的一个 30 天挑战。项目免费提供了 30 个视频教程、30 个挑战的起始文档和 30 个挑战解决方案源代码。目的是帮助人们用纯 JavaScript 来写东西，不借助框架和库，也不使用编译器和引用。现在你看到的是这系列指南的第 15 篇。

## 介绍
本demo主要实现了一个添加列表并实现实时存储在本地的小程序，利用了localStorage来实现状态储存


## 实现
* 事件  
事件监听提交按钮，通过e.preventDefault() 阻止事件
* 获取值  
获取input输入的值 
* 存储  
通过localStorage 实时存储到本地
* 添加标签  
通过拼接字符串添加标签元素
* 读取缓存  
通过判断读取本地缓存
JSON.parse(localStorage.getItem('item')) || [] // 判断是否本地有存储
* 监听每次点击更改的checked
存储同步每次更改的状态


## 扩展
* [preventDefault](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault)阻止默认事件
* [stopPropagation](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopPropagation) 阻止事件传播，如冒泡
* [localStorage.setItem](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/setItem)setItem() 作为 Storage 接口的方法，接受一个键名和值作为参数，将会把键名添加到存储中，如果键名已存在，则更新其对应的值。
* [localStorage.getItem](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/getItem)getItem() 作为 Storage 接口的方法，接受一个键名（key name）作为参数，并返回对应键名的值（key's value）。
* [JSON.stringify](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)方法是将一个JavaScript值(对象或者数组)转换为一个 JSON字符串，如果指定了replacer是一个函数，则可以替换值，或者如果指定了replacer是一个数组，可选的仅包括指定的属性。
* [JSON.parse](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)JSON.parse() 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象。提供可选的reviver函数用以在返回之前对所得到的对象执行变换(操作)。

## 参考资料
* [JavaScript 30天](https://javascript30.com/)
* 作者 Github [Wes Bos](https://github.com/wesbos)
* [Js 30 day 中文指南](https://github.com/soyaine/JavaScript30)
* allen_yu [练习Github](https://github.com/shunnien/JavaScript30day)