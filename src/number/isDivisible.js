/*
 * @Author: 一尾流莺
 * @Description:判断数字是否可以整除
 * @Date: 2021-09-15 10:47:52
 * @LastEditTime: 2021-09-15 10:52:34
 * @FilePath: \warblerJS\src\number\isDivisible.js
 */

/**
 * @description:判断数字是否可以整除
 * @param { Number } dividend 被除数
 * @param { Number } divisor  除数
 * @return { Boolean }  true 可以整除 false 不可以整除
 */
const isDivisible = (dividend, divisor) => dividend % divisor === 0;

/** 用法
const result1 = isDivisible(6,3)
const result2 = isDivisible(5,3)
console.log(result1) //=> true
console.log(result2) //=> false
 */

export default isDivisible;
