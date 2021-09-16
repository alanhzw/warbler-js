/*
 * @Author: 一尾流莺
 * @Description:计算对象数组指定健的平均值
 * @Date: 2021-09-10 14:58:17
 * @LastEditTime: 2021-09-16 16:53:29
 * @FilePath: \warblerJS\src\array\getAverageBy.js
 */

/**
 * @description: 计算对象数组指定健的平均值
 * @param { Array } num 目标数字,不限制参数数量
 * @return { Number } 所有参数的平均数
 */
const averageBy = (arr, key) => arr.reduce((pre, cur) => pre + cur[key], 0) / arr.length;

/** 用法
  const fruits = [
    {name: 'Grapes', quantity: 2},
    {name: 'Bananas', quantity: 5},
    {name: 'Apples', quantity: 10},
    {name: 'Grapes', quantity: 4},
    {name: 'Grapes', quantity: 6},
  ];
  const result = averageBy(fruits,'quantity')

  console.log(result) //=> 5.4

 */

export default averageBy;
