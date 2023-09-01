# 去除对象中的空属性，null，undefined

## 备注

该方法默认会进行递归，会去除嵌套对象中的空属性，`null`，`undefined`，在第二个参数中传入 `{deep: false}` 即可取消递归。

## 语法

```js
import { removeEmptyProperties } from 'warbler-js';
const result = removeEmptyProperties(obj，options);
```

## 参数

- `obj` (**Object**) ： 目标对象。
- `?` `options` (**Object**) ： 可选参数，配置信息。
  - `?` `deep` (**Boolean**) ： 是否进行递归，去除嵌套对象中的空属性，默认为 `true`。
  - `?` `removeEmpty` (**Boolean**) ： 是否去除空属性，默认为 `true`。
  - `?` `removeNull` (**Boolean**) ： 是否去除 `null`，默认为 `true`。
  - `?` `removeUndefined` (**Boolean**) ： 是否去除 `undefined`，默认为 `true`。

## 返回值

**Object** ： 去除空属性，`null`，`undefined` 后的对象。

## 源码

```js
const removeEmptyProperties = (obj, options = {}) => {
  const { deep = true, removeEmpty = true, removeNull = true, removeUndefined = true } = options;
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object' && obj[key] !== null && deep) {
      newObj[key] = removeEmptyProperties(obj[key], options);
    } else if (
      (!removeNull || obj[key] !== null) &&
      (!removeUndefined || obj[key] !== undefined) &&
      (!removeEmpty || obj[key] !== '')
    ) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};
```

## 例子

```js
import { removeEmptyProperties } from 'warbler-js';

const obj = {
  name: 'warbler',
  age: null,
  homepage: 'http://www.warblerfe.top',
  address: undefined,
  phone: '',
  car: {
    color: 'red',
    price: '',
    size: null,
    weight: undefined,
  },
};

// 默认情况下，输出以下内容
console.log(removeEmptyProperties(obj));

{
    "name": "warbler",
    "homepage": "http://www.warblerfe.top",
    "car": {
        "color": "red"
    }
}

// 传入 { deep: false } 取消递归，输出以下内容
console.log(removeEmptyProperties(obj, { deep: false }));

{
    "name": "warbler",
    "homepage": "http://www.warblerfe.top",
    "car": {
        "color": "red",
        "price": "",
        "size": null,
        "weight": undefined
    }
}

// 传入 { removeEmpty: false } ，不去除空属性，输出以下内容
console.log(removeEmptyProperties(obj, { removeEmpty: false }));

{
    "name": "warbler",
    "homepage": "http://www.warblerfe.top",
    "phone": "",
    "car": {
        "color": "red",
        "price": ""
    }
}

// 传入 { removeNull: false } ，不去除 null ，输出以下内容
console.log(removeEmptyProperties(obj, { removeNull: false }));

// 输出以下内容

{
    "name": "warbler",
    "age": null,
    "homepage": "http://www.warblerfe.top",
    "car": {
        "color": "red",
        "size": null
    }
}

// 传入 { removeUndefined: false } ，不去除 undefined ，输出以下内容
console.log(removeEmptyProperties(obj, { removeUndefined: false }));

{
    "name": "warbler",
    "address": undefined,
    "homepage": "http://www.warblerfe.top",
    "car": {
        "color": "red",
        "weight": undefined
    }
}
```

## 添加版本

**1.2.1**
