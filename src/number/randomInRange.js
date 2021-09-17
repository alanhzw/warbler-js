/*
 * @Author: 一尾流莺
 * @Description:生成范围内的随机数
 * @Date: 2021-09-17 17:07:59
 * @LastEditTime: 2021-09-17 17:09:20
 * @FilePath: \warblerJS\src\number\randomInRange.js
 */
/**
 * @description: 生成范围内的随机数
 * @param { Number} min 生成随机数的最小范围
 * @param { Number} max 生成随机数的最大范围
 * @return { Number } 一个范围内的随机数
 */
const randomInRange = (min, max) => Math.random() * (max - min) + min;

/**
const result = randomInRange(3,9)
console.log(result) //=> 7.807953357253535
 */
export default randomInRange;
