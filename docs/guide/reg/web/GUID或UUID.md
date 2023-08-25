<!--
 * @Author: 一尾流莺
 * @Description:GUID或UUID
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2023-03-28 18:49:12
 * @FilePath: \warbler-js\docs\guide\reg\GUID或者UUID.md
-->

# GUID 或 UUID

验证 **GUID/UUID**，即通用唯一识别码。是一个由 `4` 个连字号 `(-)` 将 `32` 个字节长的字符串分隔后生成的字符串，总共 `36` 个字节长。

## 语法

```js
import { uuidReg } from 'warbler-js';
const result = uuidReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const uuidReg = (value) => {
  const reg = /^[a-f\d]{4}(?:[a-f\d]{4}-){4}[a-f\d]{12}$/i;
  return reg.test(value);
};
```

## 例子

```js
import { uuidReg } from 'warbler-js';
const result1 = uuidReg('0842F912-3053-24A1-CE07-23610A13C565');
const result2 = uuidReg('30b18fc7-7e3a-451d-a09f-f15b338f91bd');

console.log(result1); // true
console.log(result2); // true
```
