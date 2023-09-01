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
const result1 = imeiReg('12345678998765432');
const result2 = imeiReg('12345678998765432234');

console.log(result1); // true
console.log(result2); // false
```

## 添加版本

**1.2.0**
