# Fun with HTML5 Canvas(day08)
> 简介：[JavaScript30](https://javascript30.com) 是 [Wes Bos](https://github.com/wesbos) 推出的一个 30 天挑战。项目免费提供了 30 个视频教程、30 个挑战的起始文档和 30 个挑战解决方案源代码。目的是帮助人们用纯 JavaScript 来写东西，不借助框架和库，也不使用编译器和引用。现在你看到的是这系列指南的第 8 篇。

## 介绍
主要实现用canvas实现一个跟随鼠标移动的变色笔工具，按住鼠标拖动实现变色绘图笔

## 具体实现步骤
### 用canvas 创建画布并指定画布大小，创建画布上下文环境
```js
const canvas = document.querySelector('#draw')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')
```
### 给画布添加属性
添加线条颜色，和线条转折处样式和线条的端点样式,并创建变量值lastX和lastY，和isDrawing来控制绘图状态
```js
ctx.strokeStyle = '#BADA55' // 线条的颜色，默认为”#000000”
ctx.lineJoin = 'round' // 线条的转折处样式 默认miter（尖角
ctx.lineCap = 'round' // 线条的端点样式 butt（无）、round（圆头）、square（方头）
let lastX = 0
let lastY = 0
```
### 给画布添加绘图事件控制
给画布添加鼠标经过事件开始绘图，鼠标释放或者鼠标离开关闭绘图状态，当鼠标按下开始绘图
```js
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]
})
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)
```
### 画布绘图具体事件
* 通过isDrawing判断是否是绘图状态
* 设置变量hue，通过动态设置[hsl](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value)来设置绘图笔的渐变
* 通过设置direction来动态设置 lineWidth线条的宽度，来判断变细变粗
* 通过Event时间获取x和y坐标
## 涉及相关知识点
文章详情可见我的blog[canvas基础梳理](https://github.com/terry-ice/blog/edit/master/Canvas/)觉得对你有帮助记得点star哟
### canvas 基础梳理
相关内容
* 理解<canvas>元素
* 绘制简单的 2D 图形
## 基本用法
### 标签
首先要是使用<canvas>，需要先设置绘图画布的大小。之后可在不标签中设置浏览器不支持的提示信息。
```html
<canvas id="drawing" width=" 200" height="200">您的浏览器不支持，请给更新您的浏览器版本！</canvas>
```
### 绘图上下文对象
想要画布上画图，必须取得绘图上下文对象引用，通过getContext()方法传入字符串“2d”
```js
 var drawing = document.getElementById("drawing");
//确定浏览器支持<canvas>元素
 if (drawing.getContext){
   var context = drawing.getContext("2d"); //更多代码
 }else{
   alert("您的浏览器不支持，请给更新您的浏览器版本！");
 }
```
### 导出绘制的图像
使用 toDataURL()方法，可以导出在<canvas>元素上绘制的图像。这个方法接受一个参数，即图 像的 MIME 类型格式，而且适合用于创建图像的任何上下文。
```js

var drawing = document.getElementById("drawing");
//确定浏览器支持<canvas>元素 if (drawing.getContext){
//取得图像的数据 URI
var imgURI = drawing.toDataURL("image/png");
//显示图像
var image = document.createElement("img"); image.src = imgURI; document.body.appendChild(image);
}
```
### 形状
#### 矩形
与矩形有关的方法包括 fillRect()、 strokeRect()和 clearRect()。这三个方法都能接收 4 个参数:矩形的 x 坐标、矩形的 y 坐标、矩形 宽度和矩形高度。这些参数的单位都是像素。
```js
var drawing = document.getElementById("drawing");
//确定浏览器支持<canvas>元素 if (drawing.getContext){
    var context = drawing.getContext("2d");
//绘制红色矩形
context.fillStyle = "#ff0000"; context.fillRect(10, 10, 50, 50);
//绘制半透明的蓝色矩形
context.fillStyle = "rgba(0,0,255,0.5)"; context.fillRect(30, 30, 50, 50);
}
```

### 标签详解
* beginPath() 表示要开始 绘制新路径
* moveTo(x, y):将绘图游标移动到(x,y)，不画线。
* lineTo(x, y):从上一点开始绘制一条直线，到(x,y)为止。
* lineWidth 描边线条的宽度
* strokeStyle 线条的颜色，默认为”#000000”，其值可以设置为CSS颜色值、渐变对象或者模式对象。
* fillStyle 填充的颜色，默认为”#000000”，与strokeStyle一样，值也可以设置为CSS颜色值、渐变对象或者模式对象。
* stroke() 用于按照已有的路径绘制线条。
* fill()用于使用当前的填充风格来填充路径的区域。
* clip() 用于按照已有的路线在画布中设置剪辑区域。调用clip()方法之后，图形绘制代码只对剪辑区域有效而不再影响区域外的画布。如调用之前没有描绘路径（即默认状态下），则得到的剪辑区域为整个Canvas区域。
* lineCap 线条的端点样式，有butt（无）、round（圆头）、square（方头）三种类型可供选择，默认为butt。
* lineJoin 线条的转折处样式，有round（圆角）、bevel（平角）、miter（尖角）三种；类型可供选择，默认为miter。
* rect(x, y, width, height):从点(x,y)开始绘制一个矩形，宽度和高度分别由 width 和height 指定。这个方法绘制的是矩形路径，而不是 strokeRect()和 fillRect()所绘制的独立的形状。
* arcTo(x1, y1, x2, y2, radius):从上一点开始绘制一条弧线，到(x2,y2)为止，并且以 给定的半径 radius 穿过(x1,y1)。
* quadraticCurveTo(cx, cy, x, y):从上一点开始绘制一条二次曲线，到(x,y)为止，并且以(cx,cy)作为控制点。
* miterLimit 线条尖角折角的锐利程序，默认为10。
* clearRect()方法用于清除画布上的矩形区域

## 参考资料
* [JavaScript 30天](https://javascript30.com/)
* 作者 Github [Wes Bos](https://github.com/wesbos)
* [Js 30 day 中文指南](https://github.com/soyaine/JavaScript30)
* allen_yu [练习Github](https://github.com/shunnien/JavaScript30day)