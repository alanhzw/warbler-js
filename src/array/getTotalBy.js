/*
 * @Author: 一尾流莺
 * @Description:计算对象数组元素某个属性值的总和
 * @Date: 2021-09-17 16:15:30
 * @LastEditTime: 2021-09-17 16:24:10
 * @FilePath: \warblerJS\src\array\getTotalBy.js
 */

/**
 * @description: 计算对象数组某个属性值的总和
 * @param { Array } arr 需要计算某个属性值总和的对象数组
 * @param { String } key 需要计算总和的 key
 * @return { Number } 对象数组某个属性值的总和
 */
const getTotalBy = (arr, key) => arr.reduce((pre, cur) => pre + cur[key], 0);

/**
const fruits = [
  {name: 'Grapes', quantity: 2},
  {name: 'Bananas', quantity: 5},
  {name: 'Apples', quantity: 10},
  {name: 'Grapes', quantity: 4},
  {name: 'Grapes', quantity: 6},
];
const result = getTotalBy(fruits,'quantity')
console.log(result) //=> 27
 */

export default getTotalBy;
