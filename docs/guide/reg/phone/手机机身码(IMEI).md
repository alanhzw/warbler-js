<!--
 * @Author: 一尾流莺
 * @Description:手机机身码(IMEI)
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-13 19:09:02
 * @FilePath: \warblerjs-guide\docs\guide\reg\imeiReg.md
-->

# 手机机身码(IMEI)

验证手机机身码(IMEI)，`16-18` 位数字。

## 语法

```js
import { imeiReg } from 'warbler-js';
const result = imeiReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const imeiReg = (value) => {
  const reg = /^\d{15,17}$/;
  return reg.test(value);
};
```

## 例子

```js
import { imeiReg } from 'warbler-js';
const result1 = imeiReg('12345678998765432')
const result2 = imeiReg('12345678998765432234')

console.log(result1) // true
console.log(result2) // false
```
