# Console Tricks(day09)
> 简介：[JavaScript30](https://javascript30.com) 是 [Wes Bos](https://github.com/wesbos) 推出的一个 30 天挑战。项目免费提供了 30 个视频教程、30 个挑战的起始文档和 30 个挑战解决方案源代码。目的是帮助人们用纯 JavaScript 来写东西，不借助框架和库，也不使用编译器和引用。现在你看到的是这系列指南的第 9 篇。

## 介绍
开发工具Console 的使用
* log
* warn 
* error
* info
* clear
* dir
* groupCollapsed
* groupEnd
* count 
* time 
* timeEnd
## 具体实现步骤
可在控制台中输入查看具体作用
```js
   const dogs = [{
            name: 'Snickers',
            age: 2
        }, {
            name: 'hugo',
            age: 8
        }];

        function makeGreen() {
            const p = document.querySelector('p');
            p.style.color = '#BADA55';
            p.style.fontSize = '50px';
        }
        // Regular  //基本
        console.log('consoe.log test')
        // Interpolated 替换字符串
        console.log("Hello I am a %s string!", "💩");
        // Styled  设置样式
        console.log('%c 我的字体变大啦', 'font-size:50px;');
        console.log("I am a string: %s ", "log"); //log
        console.log("I am a float number: %f ", 1.23); //1.23
        console.log("I am a object: %o ", {
            name: "allen"
        }); // {name:"allen"}
        console.log("I am a int number: %d ", 1); //1
        console.log("%c other style", "color: #00fdff; font-size: 2em;");

        // 各式不同的訊息類型
        // warning!
        console.warn("OH NOOO");
        // Error :|
        console.error("OH NOOO");
        // Info
        console.info("OH NOOO");

        // Testing
        const p = document.querySelector("p");
        console.assert(p.classList.contains("ouch"), "That is wrong!");

        // clearing 清除 console
        console.clear();

        // Viewing DOM Elements
        console.log(p);
        console.dir(p);
        console.clear();

        // Grouping together
        dogs.forEach(dog => {
            // 此是分组标题文字
            console.groupCollapsed(`${dog.name}`);
            console.log(`This is ${dog.name}`);
            console.log(`${dog.name} is ${dog.age} years old`);
            console.log(`${dog.name} is ${dog.age * 7} dog years old`);
            console.groupEnd(`${dog.name}`);
        });

        // counting
        console.count("Wes");
        console.count("Wes");
        console.count("Steve");
        console.count("Steve");
        console.count("Wes");
        console.count("Steve");
        console.count("Wes");
        console.count("Steve");
        console.count("Steve");
        console.count("Steve");
        console.count("Steve");
        console.count("Steve");

        // timing
        console.time("fetching data"); //启动一个计时器
        fetch("https://api.github.com/users/wesbos")
            .then(data => data.json())
            .then(data => {
                console.timeEnd("fetching data");//毫秒为单位 显示
                console.log(data);
            });
```

## 涉及相关知识点

## 参考资料
* [JavaScript 30天](https://javascript30.com/)
* 作者 Github [Wes Bos](https://github.com/wesbos)
* [Js 30 day 中文指南](https://github.com/soyaine/JavaScript30)
* allen_yu [练习Github](https://github.com/shunnien/JavaScript30day)