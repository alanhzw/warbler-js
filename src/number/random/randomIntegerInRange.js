/*
 * @Author: 一尾流莺
 * @Description:生成范围内的随机整数
 * @Date: 2021-09-17 17:07:59
 * @LastEditTime: 2021-09-17 17:12:11
 * @FilePath: \warblerJS\src\number\randomIntegerInRange.js
 */
/**
 * @description: 生成范围内的随机整数
 * @param { Number} min 生成随机整数的最小范围
 * @param { Number} max 生成随机整数的最大范围
 * @return { Number } 一个范围内的随机整数
 */
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
const result = randomIntegerInRange(3,9)
console.log(result) //=> 7
 */
export default randomIntegerInRange;
