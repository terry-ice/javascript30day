# JS Reference VS Copy(day14)
> 简介：[JavaScript30](https://javascript30.com) 是 [Wes Bos](https://github.com/wesbos) 推出的一个 30 天挑战。项目免费提供了 30 个视频教程、30 个挑战的起始文档和 30 个挑战解决方案源代码。目的是帮助人们用纯 JavaScript 来写东西，不借助框架和库，也不使用编译器和引用。现在你看到的是这系列指南的第 14 篇。

## 介绍
这一章节主要介绍了数组和对象值的一些引用和拷贝方法，浅拷贝和深拷贝

## 实现
### 普通变量
```js
let a = 'aaa'
let b = a
console.log(a, b) // aaa aaa
a = 'bbb'
console.log(a, b)// bbb aaa 
```
当改变a的值的时候，b依然是原来的aaa这里并非引用的
### 数组
```js
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy']
let players1 = players
players.push('terry')
console.log(players, 'players') //引用
console.log(players1, 'players1')//引用
```
这个时候players和players1的值都是引用的。
#### 拷贝
```js
let players2 = players.slice()
let players3 = [].concat(players)
let players4 = [...players]
```
### 对象
```js
let obj = {
  name: 'terry',
  id: '1',
  like: {
    eat: '吃',
    play: '玩'
  }
}
let obj2 = Object.assign({}, obj) // 浅拷贝
let obj4 = { ...obj} // 浅拷贝
obj2.like.game = '666'
let obj3 = JSON.parse(JSON.stringify(obj)) // 深拷贝
obj3.like.game = '999'
obj4.like.pic = '0000'
console.log(obj)
console.log(obj3)
console.log(obj4)
```
## 扩展
* [Object.assign](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
* [JSON.parse](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象。提供可选的reviver函数用以在返回之前对所得到的对象执行变换(操作)。
* [JSON.stringify](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)方法是将一个JavaScript值(对象或者数组)转换为一个 JSON字符串，如果指定了replacer是一个函数，则可以替换值，或者如果指定了replacer是一个数组，可选的仅包括指定的属性。

## 参考资料
* [JavaScript 30天](https://javascript30.com/)
* 作者 Github [Wes Bos](https://github.com/wesbos)
* [Js 30 day 中文指南](https://github.com/soyaine/JavaScript30)
* allen_yu [练习Github](https://github.com/shunnien/JavaScript30day)