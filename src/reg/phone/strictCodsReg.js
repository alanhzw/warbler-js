/*
 * @Author: 一尾流莺
 * @Description:统一社会信用代码(严格)
 * @Date: 2021-10-08 14:34:58
 * @LastEditTime: 2021-10-13 11:49:34
 * @FilePath: \warblerJS\src\reg\life\strictCodsReg.js
 */

/**
 * @description: 统一社会信用代码(严格)
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const strictCodsReg = (value) => {
  const reg = /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = strictCodsReg('9134052155323005XL')
  const result2 = strictCodsReg('91330526MA345BR13A')
  console.log(result1) // true
  console.log(result2) // true
 */
export default strictCodsReg;
