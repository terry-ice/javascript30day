# Hold Shift to Check Multiple Checkboxes(day10)
> 简介：[JavaScript30](https://javascript30.com) 是 [Wes Bos](https://github.com/wesbos) 推出的一个 30 天挑战。项目免费提供了 30 个视频教程、30 个挑战的起始文档和 30 个挑战解决方案源代码。目的是帮助人们用纯 JavaScript 来写东西，不借助框架和库，也不使用编译器和引用。现在你看到的是这系列指南的第 10 篇。

## 介绍
通过shift键实现多选功能,当选取一个checkbox后，按住shift不放，在选取另一checkbox ，此两个checkbox中间的checkbox皆会选取。
## 具体实现步骤
### 取出所有的checkbox元素并且监听点击事件
```js
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
checkboxes.forEach(checkbox =>checkbox.addEventListener('click',handleCheck))
```
### 通过事件Event判断shiftKey状态和当前选中状态，声明选中判断变量
e.shiftKey && this.checked
### 遍历所有的checkboxes,根据变量inBetween判断是否选中
完整代码:
```js
    const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
    let lastChecked;

    function handleCheck(e) {
      //console.log(e.shiftKey); //shift是否按住
      //console.log(this.checked); //是否选中
      let inBetween = false
      if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
          if (checkbox === this || checkbox === lastChecked) {
            inBetween = !inBetween;
          }
          if (inBetween && lastChecked) { //解决直接shift点击选中的bug
            checkbox.checked = true;
          }
        })
      }
      lastChecked = this
    }
    checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
```
## 相关知识点
### JS
[forEach](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)方法对数组的每个元素执行一次提供的函数。
* 注意: 没有返回一个新数组! & 没有返回值!
* 应用场景：为一些相同的元素，绑定事件处理器！
[KeyboardEvent.shiftKey](https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/shiftKey)只读属性返回一个 Boolean 值，表示事件触发时 shift 键是 (true) 否(false)按下。



## 参考资料
* [JavaScript 30天](https://javascript30.com/)
* 作者 Github [Wes Bos](https://github.com/wesbos)
* [Js 30 day 中文指南](https://github.com/soyaine/JavaScript30)
* allen_yu [练习Github](https://github.com/shunnien/JavaScript30day)