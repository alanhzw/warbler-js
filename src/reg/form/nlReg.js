/*
 * @Author: 一尾流莺
 * @Description:数字和字母的组合
 * @Date: 2021-10-08 14:34:58
 * @LastEditTime: 2021-10-13 17:02:36
 * @FilePath: \warblerJS\src\reg\form\nlReg.js
 */

/**
 * @description: 数字和字母的组合
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const nlReg = (value) => {
  const reg = /^[A-Za-z0-9]+$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = nlReg('1')
  const result2 = nlReg('aa')
  const result3 = nlReg('3aa')

  console.log(result1) // true
  console.log(result2) // true
  console.log(result3) // true
 */
export default nlReg;
