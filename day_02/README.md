# JavaScript Drum Kit(day1)
> 简介：[JavaScript30](https://javascript30.com) 是 [Wes Bos](https://github.com/wesbos) 推出的一个 30 天挑战。项目免费提供了 30 个视频教程、30 个挑战的起始文档和 30 个挑战解决方案源代码。目的是帮助人们用纯 JavaScript 来写东西，不借助框架和库，也不使用编译器和引用。现在你看到的是这系列指南的第 2 篇。

## 介绍
主要实现以javascript通过css上来实现指针走动的动态时钟。

## 具体实现步骤

### 处理css和html
给指针设置不同的样式

### 处理时间走动效果
获取当前时间，通过setInterval控制指针走动和对应时钟当前时间

## 涉及相关知识点

### JS部分
通过[new Date()]()获取当前时间，获取当前时分秒做对应处理
```js
const now = new Date()
now.getDate() //当月第几天
now.getDay() //一周的第几天，0 表示星期天
now.getSeconds() //秒数，返回一个0 到 59之间的整数值。
now.getMinutes() //分钟，返回一个0 到 59之间的整数值。
now.getHours() //小时，返回一个0 到 23之间的整数值。
```
setInterval来倒数计时执行秒针走动
```js
let intervalID = window.setInterval(func, delay[, param1, param2, ...]);
let intervalID = window.setInterval(code, delay);
```
* intervalID 是此重复操作的唯一辨识符，可以作为参数传给clearInterval()。
* func 是你想要重复调用的函数。
* code 是另一种语法的应用，是指你想要重复执行的一段字符串构成的代码(使用该语法是不推荐的，不推荐的原因和eval()一样)。
* delay 是每次延迟的毫秒数 (一秒等于1000毫秒)，函数的每次调用会在该延迟之后发生。和setTimeout一样，实际的延迟时间可能会稍长一点。
* 需要注意的是,IE不支持第一种语法中向延迟函数传递额外参数的功能.如果你想要在IE中达到同样的功能,你必须使用一种兼容代码 (查看callback arguments 一段).
具体操作和兼容查询可以参考 [setInterval](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setInterval)
### CSS部分
主要用到了transform rotate 属性来控制针的走动和显示
* CSS transform 属性允许你修改CSS视觉格式模型的坐标空间。使用它，元素可以被转换（translate）、旋转（rotate）、缩放（scale）、倾斜（skew）。 
* CSS transform 属性 , 只对 block 级元素生效！

具体操作和兼容查询可以参考 [transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)

## 延伸部分

## 参考资料
* [JavaScript 30天](https://javascript30.com/)
* 作者 Github [Wes Bos](https://github.com/wesbos)
* [Js 30 day 中文指南](https://github.com/soyaine/JavaScript30)
* allen_yu [练习Github](https://github.com/shunnien/JavaScript30day)