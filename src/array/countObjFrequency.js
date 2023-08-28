/*
 * @Author: 一尾流莺
 * @Description:计算对象数组中某个属性值的出现次数
 * @Date: 2021-09-15 09:58:10
 * @LastEditTime: 2021-09-15 10:23:52
 * @FilePath: \warblerJS\src\array\countObjFrequency.js
 */

/**
 * @description: 计算对象数组中某个属性值的出现次数
 * @param { Array } arr 需要统计属性值出现次数的数组
 * @param { String } key 需要统计出现次数的属性
 * @param { String | Number } value 需要统计出现次数的属性值
 * @return { Number } 目标属性值的出现次数
 */
const countObjFrequency = (arr, key, value) => arr.reduce((pre, cur) => (cur[key] === value ? pre + 1 : pre + 0), 0);

/**  用法
  const fruits = [
  { name: 'Bananas', quantity: 5 },
  { name: 'Apples', quantity: 10 },
  { name: 'Bananas', quantity: 5 },
  { name: 'Bananas', quantity: 5 },
  { name: 'Grapes', quantity: 2 },
  { name: 'Bananas', quantity: 5 },
  ];
  const result = countObjFrequency(fruits, 'name', 'Bananas');
  console.log(result) //=> 4
 */

export default countObjFrequency;
