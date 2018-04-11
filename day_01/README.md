# JavaScript Drum Kit(day01)
> 简介：[JavaScript30](https://javascript30.com) 是 [Wes Bos](https://github.com/wesbos) 推出的一个 30 天挑战。项目免费提供了 30 个视频教程、30 个挑战的起始文档和 30 个挑战解决方案源代码。目的是帮助人们用纯 JavaScript 来写东西，不借助框架和库，也不使用编译器和引用。现在你看到的是这系列指南的第 1 篇。

## 介绍
第一天课程比较简单，主要实现是监听键盘操作按键，提示并且播放不同的声音，用到监听事件[addEventListener](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)中的‘keydown’和‘keyup’,(transitionend)来触发事件和提示操作等

## 具体实现步骤

### 实现css，class，play
* 使用transform进行缩放

### 接触keycode和html,class效果
* 参考[key code](keycode.info)按键对应code
* 通过data-key准备对应的声音和按键css效果

### 监听键盘按键操作
* 监听网页的按键事件

### 建立键盘按键的处理事件
* 获取目前触发的按键keyCode
* 获取该keyCode 对应的文字div DOM
* 获取该keyCode 对应的声音audio DOM
* 每次按下播放重置 audio.currentTime = 0
* 播放对应声音audio.play()
* 当前按键增加palying(增加class)

### 建立按键离开处理事件
* 移除按键的对应css样式
* 通过transitionend或者keyup来做移除样式都可以

## 涉及相关知识点

### JS部分
querySelector和querySelectorAll 获取DOM object并非数组
```js
var matches = document.querySelectorAll（"div"）;
Array .isArray（matches）;
// false
```
Element.classList 来操作class
```js
var div = document.querySelectorAll（"div"）;
div.classList.remove（"foo"）;
div.classList.add（"anotherclass"）;
//如果可见，设置删除它，否则添加它
div.classList.toggle（"visible"）;
//添加/删除可见，取决于测试条件，我小于10
div.classList.toggle（"可见"，我< 10）;
alert（div.classList.contains（"foo"））;
div.classList.add（"foo"，"bar"）; //添加多个类
```
具体操作和兼容查询可以参考 [Element.classList](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList)
EventTarget.addEventListener() 方法将指定的监听器注册到 EventTarget 上，当该对象触发指定的事件时，指定的回调函数就会被执行。
target.addEventListener(type, listener);
* type监听事件名称
* listener触发的事件，接收 Event 接口对象   

下面这个例子用来展示如何使用 addEventListener() 监听鼠标点击一个元素。
```html
<table id="outside">    
    <tr><td id="t1">one</td></tr>
    <tr><td id="t2">two</td></tr>
</table>
```
```js
// 改变t2的函数
function modifyText() {
  var t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue == "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
  }
}

// 为table添加事件监听器
var el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);
```
[Array.from()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from) 方法从一个类似数组或可迭代对象中创建一个新的数组实例。
在此范例中使用了Array.from来转换querySelectorAll的结果，在此范例中，没有使用此转换也不影响；所以才使用Array.from来转换
```js
const bar = ["a", "b", "c"];
Array.from(bar);
// ["a", "b", "c"]

Array.from('foo');
// ["f", "o", "o"]
```

### HTML部分
键盘操作提示音效部分 [HTML audio](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio)

### CSS部分
* 为DOM CSS transitions变换完成后触发
* 介绍CSS3的新单位vh、vw，其浏览器的支援程度可以参考  

## 延伸部分


## 参考资料
* [JavaScript 30天](https://javascript30.com/)
* 作者 Github [Wes Bos](https://github.com/wesbos)
* [Js 30 day 中文指南](https://github.com/soyaine/JavaScript30)
* allen_yu [练习Github](https://github.com/shunnien/JavaScript30day)