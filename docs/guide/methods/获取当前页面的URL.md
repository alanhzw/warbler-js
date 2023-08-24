<!--
 * @Author: 一尾流莺
 * @Description:获取当前页面的URL
 * @Date: 2021-09-13 17:26:25
 * @LastEditTime: 2021-09-17 18:13:19
 * @FilePath: \warblerjs-guide\docs\guide\methods\getCurrentUrl.md
-->

# 获取当前页面的 URL

## 语法

```js
import { getCurrentUrl } from 'warbler-js';
const result = getCurrentUrl();
```

## 参数

- `null`

## 返回值

**String** ： 当前页面的 `URL` 。

## 源码

```js
const getCurrentUrl = () => window.location.href;
```

## 例子

```js
import { getCurrentUrl } from 'warbler-js';
const result = getCurrentUrl();
console.log(result); //=>http://www.warblerfe.top/warbler/js
```
