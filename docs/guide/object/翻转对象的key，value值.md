# 翻转对象的 key ， value 值

## 语法

```js
import { reverseObjectKeyValue } from 'warbler-js';
const result = reverseObjectKeyValue(obj);
```

## 参数

- `obj` (**Object**) ： 目标对象。

## 返回值

**Object** ： 翻转 `key` ， `value` 后的对象。

## 源码

```js
const reverseObjectKeyValue = (obj) => {
  const reversedObj = {};
  Object.entries(obj).forEach(([key, value]) => {
    reversedObj[value] = key;
  });
  return reversedObj;
};
```

## 例子

```js
import { reverseObjectKeyValue } from 'warbler-js';

const obj = {
  apple: 'fruit',
  carrot: 'vegetable',
  tomato: 'fruit',
};

const reversedObj = reverseObjectKeyValue(obj);
console.log(reversedObj);

// 输出以下内容

{
    "fruit": "tomato",
    "vegetable": "carrot"
}
```

## 添加版本

**1.2.1**
