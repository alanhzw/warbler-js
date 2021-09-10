/*
 * @Author: 一尾流莺
 * @Description:反转字符串(不会修改原字符串)
 * @Date: 2021-09-10 14:58:17
 * @LastEditTime: 2021-09-10 15:06:49
 * @FilePath: \warblerJS\src\string\reverseString.js
 */

/**
 * @description: 反转字符串
 * @param { String } str 目标字符串
 * @return { String } 反转后的字符串
 */
const reverseString = (str) => str.split('').reverse().join('');

export default reverseString;
