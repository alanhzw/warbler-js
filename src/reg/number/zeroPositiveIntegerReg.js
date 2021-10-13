/*
 * @Author: 一尾流莺
 * @Description:正整数(包含0)
 * @Date: 2021-10-08 14:34:58
 * @LastEditTime: 2021-10-09 17:39:59
 * @FilePath: \warblerJS\src\reg\zeroPositiveIntegerReg.js
 */

/**
 * @description: 正整数(包含0)
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const nonPositiveIntegerReg = (value) => {
  const reg = /^([1-9]\d*|[0]{1,1})$/;
  return reg.test(value);
};

/** 用法

  const result1 = nonPositiveIntegerReg('0')
  const result2 = nonPositiveIntegerReg('-3')
  const result3 = nonPositiveIntegerReg('4')
  const result4 = nonPositiveIntegerReg('1.1')
  const result5 = nonPositiveIntegerReg('一尾流莺')

  console.log(result1) // true
  console.log(result2) // false
  console.log(result3) // true
  console.log(result4) // false
  console.log(result5) // false

 */
export default nonPositiveIntegerReg;
