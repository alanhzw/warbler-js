# QQ 号

验证 `QQ` 号，`5-11` 位数字。

## 语法

```js
import { qqReg } from 'warbler-js';
const result = qqReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const qqReg = (value) => {
  const reg = /^[1-9][0-9]{4,10}$/;
  return reg.test(value);
};
```

## 例子

```js
import { qqReg } from 'warbler-js';
const result1 = qqReg('969800462');
const result2 = qqReg('1741847465');

console.log(result1); // true
console.log(result2); // true
```

## 添加版本

**1.2.0**
