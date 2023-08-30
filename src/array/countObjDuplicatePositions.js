/**
 * @description:统计对象数组中指定属性值重复的位置
 * @param { Array } arr 目标数组
 * @return { Object } 数组中的元素及其重复的位置
 */
const countObjDuplicatePositions = (arr, key) => {
  const result = {};
  arr.forEach((obj, index) => {
    const value = obj[key];
    if (result[value]) {
      result[value].push(index);
    } else {
      result[value] = [index];
    }
  });
  return result;
};

/** 用法

const fruits = [
  { name: 'Grapes', quantity: 2 },
  { name: 'Bananas', quantity: 5 },
  { name: 'Apples', quantity: 10 },
  { name: 'Grapes', quantity: 4 },
  { name: 'Grapes', quantity: 6 },
  { name: 'Bananas', quantity: 5 },
];

const duplicatePositions = countObjDuplicatePositions(fruits, 'name');
console.log(duplicatePositions);

// 输出以下内容

{
    "Grapes": [
        0,
        3,
        4
    ],
    "Bananas": [
        1,
        5
    ],
    "Apples": [
        2
    ]
}

 */

export default countObjDuplicatePositions;
