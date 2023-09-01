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

## 添加版本

**1.2.0**
