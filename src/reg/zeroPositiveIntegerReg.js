/*
 * @Author: 一尾流莺
 * @Description:正整数(包含0)
 * @Date: 2021-10-08 14:34:58
 * @LastEditTime: 2021-10-13 18:06:52
 * @FilePath: \warblerJS\src\reg\number\zeroPositiveIntegerReg.js
 */

/**
 * @description: 正整数(包含0)
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const zeroPositiveIntegerReg = (value) => {
  const reg = /^([1-9]\d*|[0]{1,1})$/;
  return reg.test(value);
};

/** 用法

  const result1 = zeroPositiveIntegerReg('0')
  const result2 = zeroPositiveIntegerReg('-3')
  const result3 = zeroPositiveIntegerReg('4')
  const result4 = zeroPositiveIntegerReg('1.1')
  const result5 = zeroPositiveIntegerReg('一尾流莺')

  console.log(result1) // true
  console.log(result2) // false
  console.log(result3) // true
  console.log(result4) // false
  console.log(result5) // false

 */
export default zeroPositiveIntegerReg;
