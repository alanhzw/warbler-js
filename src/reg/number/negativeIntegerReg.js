/*
 * @Author: 一尾流莺
 * @Description:负整数(不包含0)
 * @Date: 2021-10-08 14:34:58
 * @LastEditTime: 2021-10-09 17:38:49
 * @FilePath: \warblerJS\src\reg\negativeIntegerReg.js
 */

/**
 * @description: 负整数(不包含0)
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const negativeIntegerReg = (value) => {
  const reg = /^-[1-9]\d*$/;
  return reg.test(value);
};

/** 用法

  const result1 = negativeIntegerReg('0')
  const result2 = negativeIntegerReg('-3')
  const result3 = negativeIntegerReg('4')
  const result4 = negativeIntegerReg('1.1')
  const result5 = negativeIntegerReg('一尾流莺')

  console.log(result1) // false
  console.log(result2) // true
  console.log(result3) // false
  console.log(result4) // false
  console.log(result5) // false

 */
export default negativeIntegerReg;
