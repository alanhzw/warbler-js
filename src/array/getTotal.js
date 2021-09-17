/*
 * @Author: 一尾流莺
 * @Description:计算数组元素的总和
 * @Date: 2021-09-17 16:15:30
 * @LastEditTime: 2021-09-17 16:23:33
 * @FilePath: \warblerJS\src\array\getTotal.js
 */

/**
 * @description: 计算数组元素的总和
 * @param { Array } arr 需要计算总和的数组
 * @return { Number } 所有元素的总和
 */
const getTotal = (arr) => arr.reduce((pre, cur) => pre + cur, 0);

/**
 const ages = [1,3,5,7,8]
 const result = getTotal(ages)
 console.log(result) //=> 24
 */

export default getTotal;
