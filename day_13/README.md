# Slide in on Scroll(day13)
> 简介：[JavaScript30](https://javascript30.com) 是 [Wes Bos](https://github.com/wesbos) 推出的一个 30 天挑战。项目免费提供了 30 个视频教程、30 个挑战的起始文档和 30 个挑战解决方案源代码。目的是帮助人们用纯 JavaScript 来写东西，不借助框架和库，也不使用编译器和引用。现在你看到的是这系列指南的第 13 篇。

## 介绍
往下滚动图片，动画显示的效果

## 具体实现
* 编写一个debounce延时函数，解决触发scroll频率过快问题，提高性能
* 获取所有的图片列表，用forEach执行方法
* 判断图片加载的位置和高度，通过之后添加class
```js
  const cliderImages = document.querySelectorAll('.slide-in')
    function checkSlide (e) {
      cliderImages.forEach(e => {
        // 获取图片的一半高度
        const slideInAt = (window.scrollY + window.innerHeight) - e.height / 2
        // 底部距离图片的高度
        const imgageBottom = e.offsetTop + e.offsetHeight
        const isHalfShown = slideInAt > e.offsetTop
        const isNotScrolledPast = window.scrollY < imgageBottom
        if (isHalfShown && isNotScrolledPast) {
          e.classList.add('active')
        }
      })
    }
    window.addEventListener('scroll', debounce(checkSlide))
```
## 扩展
* [offsetTop](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetTop)HTMLElement.offsetTop 为只读属性，它返回当前元素相对于其 offsetParent 元素的顶部的距离。
* [offsetHeight](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetHeight) HTMLElement.offsetHeight 是一个只读属性，它返回该元素的像素高度，高度包含该元素的垂直内边距和边框，且是一个整数。
* [scrollY](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollY)返回文档在垂直方向已滚动的像素值。
* [innerHeight](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/innerHeight)浏览器窗口的视口（viewport）高度（以像素为单位），如果存在水平滚动条，则包括它。

## 参考资料
* [JavaScript 30天](https://javascript30.com/)
* 作者 Github [Wes Bos](https://github.com/wesbos)
* [Js 30 day 中文指南](https://github.com/soyaine/JavaScript30)
* allen_yu [练习Github](https://github.com/shunnien/JavaScript30day)