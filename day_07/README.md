# Array Cardio Day 2(day07)
> 简介：[JavaScript30](https://javascript30.com) 是 [Wes Bos](https://github.com/wesbos) 推出的一个 30 天挑战。项目免费提供了 30 个视频教程、30 个挑战的起始文档和 30 个挑战解决方案源代码。目的是帮助人们用纯 JavaScript 来写东西，不借助框架和库，也不使用编译器和引用。现在你看到的是这系列指南的第 7 篇。

## 介绍
这一节课程比较简单，简单介绍了数组的操作的some，every，find，slice，splice
## 具体实现步骤
### 判断是否有人超过 19 岁
```js
const now = new Date()
const some = people.some((item) => (now.getFullYear() - item.year) > 19)
console.log(some, 'some')
```
### 判断是否所有人都是成年人
```js
const every = people.every((item) =>
  (now.getFullYear() - item.year) > 19
)
console.log(every, 'every')
```
### 返回 id 为 823423 的数据
```js
const find = comments.find(item => item.id === 823423)
console.log(find, 'find')
```
### 找到 id为 823423 的数据下标
```js
const findIndex = comments.findIndex(item => item.id === 823423)
console.log(findIndex, 'findIndex')
```
### 删除 id为 823423 的数据
```js
comments.splice(findIndex, 1)
```
## 涉及相关知识点
* [some](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)方法测试数组中的某些元素是否通过由提供的函数实现的测试。
* [every](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)every() 方法测试数组的所有元素是否都通过了指定函数的测试。
* [find](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
* [findIndex](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
* [slice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
* [splice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)方法通过删除现有元素和/或添加新元素来更改一个数组的内容。
### 扩展
splice() 方法与 slice() 方法的作用是不同的，splice() 方法会直接对数组进行修改。

## 参考资料
* [JavaScript 30天](https://javascript30.com/)
* 作者 Github [Wes Bos](https://github.com/wesbos)
* [Js 30 day 中文指南](https://github.com/soyaine/JavaScript30)
* allen_yu [练习Github](https://github.com/shunnien/JavaScript30day)