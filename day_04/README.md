# JavaScript Drum Kit(day1)
> 简介：[JavaScript30](https://javascript30.com) 是 [Wes Bos](https://github.com/wesbos) 推出的一个 30 天挑战。项目免费提供了 30 个视频教程、30 个挑战的起始文档和 30 个挑战解决方案源代码。目的是帮助人们用纯 JavaScript 来写东西，不借助框架和库，也不使用编译器和引用。现在你看到的是这系列指南的第 4 篇。

## 介绍
主要实现了数组的一些处理方法filter,map,sort,reduce实现下列需求
* 筛选 16 世纪出生的发明家 
* 展示他们的姓和名
* 把他们按照年龄从大到小进行排序
* 计算所有的发明家加起来一共活了多少岁
* 按照他们活了多久来进行排序
* 筛选出一个网页里含有某个词语的标题
* 按照姓氏来对发明家进行排序
* 统计给出数组中各个物品的数量

## 具体实现步骤
* 筛选 16 世纪出生的发明家 
返回一个新数组是条件筛选后的数组
```js
const years = inventors.filter(item => item.year >= 1500 && item.year < 1600)
console.table(years)
```
* 展示他们的姓和名
通过map循环返回姓和名并通过模板字符串连接
```js
const name = inventors.map(item => `${item.first}-${item.last}`)
console.table(name)
```
* 把他们按照年龄从大到小进行排序
sort传入年龄来排序sort() 方法用就地（ in-place ）的算法对数组的元素进行排序，并返回数组。
```js
const sortYear = inventors.sort((a, b) => a.year > b.year ? 1 : -1)
    console.table(sortYear)
```
* 计算所有的发明家加起来一共活了多少岁
传入total，计算每个人的寿命并且相加
Array.prototype.reduce() 方法对累加器和数组中的每个元素（从左到右）应用一个函数。
```js
const yearsAll = inventors.reduce((total, item) => {
  return total + (item.passed - item.year)
}, 0)
console.log(yearsAll)
```
* 按照他们活了多久来进行排序
首先计算每个人的寿命，通过sort排序
```js
const sortLived = inventors.sort((a, b) => (a.passed - a.year) > (b.passed - b.year) ? 1 : -1)
console.table(sortLived)
```
* 筛选出一个网页里含有某个词语的标题
- NodeList其中有 forEach()、item()、keys() 等。
- 而 Array 的 prototype 中有 map()、pop() 等数组才有的方法。
- 这里通过[Array.from](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)做了层转换
- [includes()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/includes) 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回true或false。
- 通过map和filter给传的字符做筛选返回新的数组
```js
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const list = document.querySelector('.mw-category')
const link = list.querySelectorAll('a')
const links = Array.from(link)
const de = links.map(item => item.textContent)
const res = de.filter(item => item.includes('de'))
console.table(res)
```
* 按照姓氏来对发明家进行排序
切割数组，取出last的值来进行默认的排序
Array.prototype.[split()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split) 方法使用指定的分隔符字符串将一个String对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。
```js
const sortName = people.sort((a, b) => {
const [aLast] = a.split(',')
const [bLast] = b.split(',')
return aLast > bLast ? 1 : -1
})
console.table(sortName)
```
* 统计给出数组中各个物品的数量 
通过reduce判断在内部计算每个值出现的次数
```js
const dataName = data.reduce((obj, item) => {
if (item in obj) {
obj[item]++
} else {
obj[item] = 1
}
return obj
}, {})
console.table(dataName)
```

## 涉及相关知识点
首先是es6的[箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
箭头函数表达式的语法比函数表达式更短，并且不绑定自己的this，arguments，super或 new.target。这些函数表达式最适合用于非方法函数，并且它们不能用作构造函数。
[Array.prototype](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
数组相关的一些操作方法
Array.prototype.concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
```js
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```
Array.prototype.filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
```js
function isBigEnough(value) {
  return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
// ES6 way
const isBigEnough = value => value >= 10;
let [...spread]= [12, 5, 8, 130, 44];
let filtered = spread.filter(isBigEnough);
// filtered is [12, 130, 44]
```
Array.prototype.map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
```js
// ES6
let numbers = [1, 5, 10, 15];
let doubles = numbers.map( x => x ** 2);

// doubles is now [1, 25, 100, 225]
// numbers is still [1, 5, 10, 15]
```

Array.prototype.sort() 方法用就地（ in-place ）的算法对数组的元素进行排序，并返回数组。 sort 排序不一定是稳定的。默认排序顺序是根据字符串Unicode码点。
```js
var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); 
// ['apples', 'bananas', 'cherries']
var scores = [1, 10, 21, 2]; 
scores.sort(); 
// [1, 10, 2, 21]
// 注意10在2之前,
// 因为在 Unicode 指针顺序中"10"在"2"之前
var things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); 
// ['1 Word', '2 Words', 'Word', 'word']
// 在Unicode中, 数字在大写字母之前,
// 大写字母在小写字母之前.
```
Array.prototype.reduce() 方法对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值。
```js
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```
Array.prototype.[split()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split) 方法使用指定的分隔符字符串将一个String对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。 
* str.split([separator[, limit]])
* Tip: 如果空字符串("")被用作分隔符，则字符串会在每个字符之间分割。
* separator
指定表示每个拆分应发生的点的字符串。separator 可以是一个字符串或正则表达式。 如果纯文本分隔符包含多个字符，则必须找到整个字符串来表示分割点。如果在str中省略或不出现分隔符，则返回的数组包含一个由整个字符串组成的元素。如果分隔符为空字符串，则将str原字符串中每个字符的数组形式返回。
* limit
一个整数，限定返回的分割片段数量。当提供此参数时，split 方法会在指定分隔符的每次出现时分割该字符串，但在限制条目已放入数组时停止。如果在达到指定限制之前达到字符串的末尾，它可能仍然包含少于限制的条目。新数组中不返回剩下的文本。
* 返回源字符串以分隔符出现位置分隔而成的一个 Array 

## 参考资料
* [JavaScript 30天](https://javascript30.com/)
* 作者 Github [Wes Bos](https://github.com/wesbos)
* [Js 30 day 中文指南](https://github.com/soyaine/JavaScript30)
* allen_yu [练习Github](https://github.com/shunnien/JavaScript30day)