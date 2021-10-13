/*
 * @Author: 一尾流莺
 * @Description:24小时制时间（HH:mm:ss）
 * @Date: 2021-10-08 14:34:58
 * @LastEditTime: 2021-10-13 14:33:03
 * @FilePath: \warblerJS\src\reg\web\dateHmsReg.js
 */

/**
 * @description: 24小时制时间（HH:mm:ss）
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const dateHmsReg = (value) => {
  const reg = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = dateHmsReg('09:02:34')
  const result2 = dateHmsReg('13:41:25')
  console.log(result1) // true
  console.log(result2) // true
 */
export default dateHmsReg;
