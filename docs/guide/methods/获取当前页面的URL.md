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

## 添加版本

**1.2.0**
