---
highlight: xt256
theme: github
---

# 简介

## 安装

### 通过npm


```js
npm i --save warblerJS
```

## 什么是warblerJS

`warblerJS` 是一个 `JavaScript` 实用工具库。

## 开发者

**一尾流莺**

👉👉 [掘金](https://juejin.cn/user/4099422807393901/posts)

👉👉 [github](https://github.com/alanhzw)

👉👉 [gitee](https://gitee.com/hzw_0174)

👉👉 [个人博客](https://www.duwanyu.com/)

👉👉 [流莺起始页](http://warbler.duwanyu.com/)


# 数组

## 删除数组中的重复元素



### 语法

```js
const result = arrWithoutDupli(arr)
```

### 参数

- `arr` (**Array**) ： 要去重的数组。

### 返回值

**Array** ： 返回一个去重后的新数组。

### 源码


```js
const arrWithoutDupli = (arr) => [...new Set(arr)];
```

### 例子


```js
import { arrWithoutDupli } from 'warblerJS'

const fruits = ["apple", "mango", "orange", "apple", "pineapple", "pineapple", "peach", "mango"]

const result = arrWithoutDupli(fruits);

console.log(result) //=> ['apple', 'mango', 'orange', 'pineapple', 'peach']
```

## 删除对象数组中的重复元素

### 语法

```js
const result = arrObjectWithoutDupli(arr，key)
```
### 参数

- `arr` (**Array**) ： 要去重的数组。
- `key` (**String**) ： 根据对象的 `key` 去重。

### 返回值

**Array** ： 返回一个去重后的新数组。

### 源码

```js
const arrObjectWithoutDupli = (arr, key) => arr.reduce((cur, next) => {
  if (!obj[next[key]]) {
    obj[next[key]] = cur.push(next);
  }
  return cur;
}, []);
```
### 例子


```js
import { arrObjectWithoutDupli } from 'warblerJS'
const fruits = [
    {name: 'Grapes', quantity: 2},
    {name: 'Bananas', quantity: 5},
    {name: 'Apples', quantity: 10},
    {name: 'Grapes', quantity: 4},
    {name: 'Grapes', quantity: 6},
  ];
  const result = arrObjectWithoutDupli(fruits,'name');
  console.log(result)  // =>
  // [
  //     {name: 'Grapes', quantity: 2},
  //     {name: 'Bananas', quantity: 5},
  //     {name: 'Apples', quantity: 10},
  // ];
```

## 根据对象的键值在数组中查找对象

### 语法

```js
const result = findObjectInArray(arr, key, value)
```

### 参数

- `arr` (**Array**) ： 待查找的目标数组。
- `key` (**String**) ： 需要查找的对象的 `key` 。
- `value` (**String**) ： 需要查找的对象的 `value` 。

### 返回值

**Obj** ： 返回查找到的对象。

### 源码

```js
const findObjectInArray = (arr, key, value) => arr.find((obj) => obj[key] === value);
```

### 例子

```js
import { findObjectInArray } from 'warblerJS'
let fruits = [
  {name: 'Bananas', quantity: 5},
  {name: 'Apples', quantity: 10},
  {name: 'Grapes', quantity: 2}
];
let result = findObjectInArray(fruits,'name','Apples');
console.log(result) //=> {name: 'Apples', quantity: 10}
```

# 对象

### 语法

### 参数

### 返回值

### 源码

### 例子

# 字符串

## 反转字符串

### 语法

```js
const result = reverseString(str)
```

### 参数

- `str` (**String**) ： 需要反转的字符串 。

### 返回值

**String** ： 返回反转后的字符串。

### 源码

```js
const reverseString = (str) => str.split('').reverse().join('');
```

### 例子

```js
import { reverseString } from 'warblerJS'
const initStr = 'hello,world'
const finallyStr = reverseString(initStr)
console.log(finallyStr) //=> dlrow,olleh
```

# 数字

## 求平均值

### 语法

```js
const result = getAverage(...args)
```

### 参数

- `args` (**Number**) ： 目标数字，不限制参数数量。

### 返回值


**Number** ： 所有参数的平均数。

### 源码

```js
const getAverage = (...args) => args.reduce((a, b) => a + b) / args.length;
```

### 例子

```js
import { getAverage } from 'warblerJS'
const result1 = getAverage(1,2,3,4)
const result2 = getAverage(1,2,3,4,5,6,7,8)
console.log(result1) //=> 2.5
console.log(result2) //=> 4.4
```

## 判断奇偶

### 语法

```js
const result = isEvenNumber(num)
```

### 参数

- `num` (**Number**) ： 需要判断奇偶的数字。

### 返回值

**Boolean** ： `true` 偶数， `false` 奇数。

### 源码

```js
const isEvenNumber = (num) => num % 2 === 0;
```

### 例子

```js
import { isEvenNumber } from 'warblerJS'
const result1 = isEvenNumber(4)
const result2 = isEvenNumber(5)
console.log(result1) //=> true
console.log(result2) //=> false
```

# 函数

# 布尔值

## 获得一个随机的布尔值

### 语法

```js
const result = randomBoolean()
```

### 参数

- `null`

### 返回值

**Boolean** ： 一个随机的布尔值。


### 源码

```js
const randomBoolean = () => Math.random() >= 0.5;
```

### 例子

```js
import { randomBoolean } from 'warblerJS'
const result = randomBoolean()
console.log( result ) //=> true
```

# 日期

# 常用正则

# 常用方法

## 模拟延迟

### 语法

```js
imitateDelay(timeout)
```

### 参数

- `timeout` (**Number**) ： 延迟的时间，单位毫秒(`ms`)。

### 返回值

**Promise** ： **Promise**。


### 源码


```js
const imitateDelay = (timeout) => new Promise(
  (resolve) => {
    const timeoutHandle = setTimeout(() => {
      clearTimeout(timeoutHandle);
      resolve();
    }, timeout);
  },
);
```

### 例子


```js
async function(){
   console.log('The first log');
   await imitateDelay(1000);
   console.log('The second log with 1000 ms delay')  //=> 1000 毫秒后输出 The second log with 1000 ms delay
}
```
