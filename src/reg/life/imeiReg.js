/*
 * @Author: 一尾流莺
 * @Description:手机机身码(IMEI)
 * @Date: 2021-10-08 14:34:58
 * @LastEditTime: 2021-10-13 10:58:01
 * @FilePath: \warblerJS\src\reg\life\imeiReg.js
 */

/**
 * @description: 手机机身码(IMEI)
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const imeiReg = (value) => {
  const reg = /^\d{15,17}$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = imeiReg('12345678998765432')
  const result2 = imeiReg('12345678998765432234')
  console.log(result1) // true
  console.log(result2) // false
 */
export default imeiReg;
