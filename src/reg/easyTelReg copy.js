/*
 * @Author: 一尾流莺
 * @Description:中国手机号, 只要是 1 开头即可
 * @Date: 2021-10-08 14:34:58
 * @LastEditTime: 2021-10-08 15:11:24
 * @FilePath: \warblerJS\src\reg\easyTelReg.js
 */

/**
 * @description: 中国手机号(简单), 只要是 1 开头即可
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const easyTelReg = (value) => {
  if (Object.prototype.toString.call(value) !== '[object String]') {
    throw new Error('只能检测字符串类型');
  }
  const reg = /^(?:(?:\+|00)86)?1\d{10}$/;
  return reg.test(value);
};

/** 用法

  const result1 = easyTelReg('008617612340174')
  const result2 = easyTelReg('+8617612340174')
  const result3 = easyTelReg('17612340174')
  const result4 = easyTelReg('176123401745')

  console.log(result1) // true
  console.log(result2) // true
  console.log(result3) // true
  console.log(result4) // true

 */
export default easyTelReg;
