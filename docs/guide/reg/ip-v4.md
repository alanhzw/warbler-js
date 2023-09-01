# ip-v4

验证 `ip-v4`，允许携带端口。

## 语法

```js
import { ipv4Reg } from 'warbler-js';
const result = ipv4Reg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const ipv4Reg = (value) => {
  const reg =
    /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/;
  return reg.test(value);
};
```

## 例子

```js
import { ipv4Reg } from 'warbler-js';
const result1 = ipv4Reg('127.16.0.0');
const result2 = ipv4Reg('127.0.0.1:8080');

console.log(result1); // true
console.log(result2); // true
```

## 添加版本

**1.2.0**
