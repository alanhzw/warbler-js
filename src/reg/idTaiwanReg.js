/*
 * @Author: 一尾流莺
 * @Description:身份证号码(台湾)
 * @Date: 2021-10-08 14:34:58
 * @LastEditTime: 2021-10-13 16:23:37
 * @FilePath: \warblerJS\src\reg\phone\idTaiwanReg.js
 */

/**
 * @description: 身份证号码(台湾)
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const idTaiwanReg = (value) => {
  const reg = /^[a-zA-Z][0-9]{9}$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法

  const result1 = idTaiwanReg('U193683453')

  console.log(result1) // true

 */
export default idTaiwanReg;
