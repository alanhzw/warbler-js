<!--
 * @Author: 一尾流莺
 * @Description:获取浏览器Cookie的值
 * @Date: 2021-09-13 18:16:32
 * @LastEditTime: 2023-04-14 16:23:12
 * @FilePath: \warbler-js\docs\guide\methods\获取浏览器Cookie的值.md
-->

# 获取浏览器 Cookie 的值

## 语法

```js
import { getCookieBy } from 'warbler-js';
const result = getCookieBy('name');
```

## 参数

- `name` (**String**) ： 要获取的 Cookie 的属性名。

## 返回值

**String** ： 要获取的 Cookie 的属性值。

## 源码

```js
const getCookieBy = (name) => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
```

## 例子

```js
import { getCookieBy } from 'warbler-js';
const result = getCookieBy('name');
console.log(result); //=>'warbler'
```
