# 判断指定日期是不是 n 天前

## 语法

```js
import { isYesterday } from 'warbler-js';
const result = isYesterday(date, n);
```

## 参数

- `date` (**String**) ： 指定日期，可传参数同 `new Date()`，并且支持 `yyyy-mm-dd`格式 ,不传默认获取当天。
- `n` (**Number**) ： `n` 天前，不传默认为 `1` ，也就是昨天。

## 返回值

**Boolean** ：`true` 是 `n` 天前， `false` 不是 `n` 天前。

## 源码

```js
const isYesterday = (date, n = 1) => {
  const curDate = new Date(); // 当前日期
  curDate.setDate(curDate.getDate() - n); // 当前日期减n天
  // 指定日期
  const tarData = date
    ? new Date(typeof date === 'string' && date.includes('-') ? date.replace(/-/g, '/') : date)
    : new Date();
  return ['getFullYear', 'getMonth', 'getDate'].every((i) => curDate[i]() === tarData[i]());
};
```

## 例子

```js
import { isYesterday } from 'warbler-js';
// 测试日期为2021-09-26
const result1 = isYesterday(new Date());
const result2 = isYesterday('2021-09-25', 1);
const result3 = isYesterday('2021-09-25', 2);
const result4 = isYesterday('2021-09-24', 2);
console.log(result1); //=> false
console.log(result2); //=> true
console.log(result3); //=> false
console.log(result4); //=> true
```

## 添加版本

**1.2.0**
