# Ajax Type Ahead(day06)
> 简介：[JavaScript30](https://javascript30.com) 是 [Wes Bos](https://github.com/wesbos) 推出的一个 30 天挑战。项目免费提供了 30 个视频教程、30 个挑战的起始文档和 30 个挑战解决方案源代码。目的是帮助人们用纯 JavaScript 来写东西，不借助框架和库，也不使用编译器和引用。现在你看到的是这系列指南的第 6 篇。

## 介绍
通过监听input输入框，返回输入过滤的条件列表，并高亮输入的字符
## 具体实现步骤
* 通过fetch获取拿到josn数据
* 关键字输入框绑定change与keyup事件
* 通过filter筛选含有输入字符的列表
* 通过正则(RegExp)给关键字高亮并且拼接字符串插入suggestions列表
## 涉及相关知识点
* [Fetch API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)Fetch API 提供了一个获取资源的介面（包括跨域）。任何使用过XMLHttpRequest 的人都能轻松上手，但新的API 提供了更强大和灵活的功能集。
* [RegExp](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)RegExp 构造函数创建了一个正则表达式对象，用于将文本与一个模式匹配。
* [match](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match)当一个字符串与一个正则表达式匹配时， match()方法检索匹配项。
* [replace](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)replace() 方法返回一个由替换值替换一些或所有匹配的模式后的新字符串。模式可以是一个字符串或者一个正则表达式, 替换值可以是一个字符串或者一个每次匹配都要调用的函数。

## 参考资料
* [JavaScript 30天](https://javascript30.com/)
* 作者 Github [Wes Bos](https://github.com/wesbos)
* [Js 30 day 中文指南](https://github.com/soyaine/JavaScript30)
* allen_yu [练习Github](https://github.com/shunnien/JavaScript30day)