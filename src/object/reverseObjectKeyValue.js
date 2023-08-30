/**
 * @description: 翻转对象的 key ， value 值
 * @param { Object } obj 目标对象
 * @return { Object } 翻转 key ， value 值后的对象
 */
const reverseObjectKeyValue = (obj) => {
  const reversedObj = {};
  Object.entries(obj).forEach(([key, value]) => {
    reversedObj[value] = key;
  });
  return reversedObj;
};

/** 用法

const obj = {
  apple: 'fruit',
  carrot: 'vegetable',
  tomato: 'fruit',
};

const reversedObj = reverseObjectKeyValue(obj);
console.log(reversedObj);

// 输出

{
    "fruit": "tomato",
    "vegetable": "carrot"
}

 */

export default reverseObjectKeyValue;
