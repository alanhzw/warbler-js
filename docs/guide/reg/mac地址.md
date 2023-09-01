# mac 地址

验证 `mac地址`。

## 语法

```js
import { macReg } from 'warbler-js';
const result = macReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const macReg = (value) => {
  const reg = /^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/i;
  return reg.test(value);
};
```

## 例子

```js
import { macReg } from 'warbler-js';
const result1 = macReg('38:f9:d3:4b:f5:51');
const result2 = macReg('00-0C-18-CA-E4-55');

console.log(result1); // true
console.log(result2); // true
```

## 添加版本

**1.2.0**
