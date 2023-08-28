/*
 * @Author: 一尾流莺
 * @Description:日期 YYYY-MM-DD
 * @Date: 2021-10-08 14:34:58
 * @LastEditTime: 2021-10-13 17:35:43
 * @FilePath: \warblerJS\src\reg\web\ymdReg.js
 */

/**
 * @description: 日期 YYYY-MM-DD
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const ymdReg = (value) => {
  const reg = /^\d{4}(\-)\d{1,2}\1\d{1,2}$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = ymdReg('2021-10-13 17:34:00')
  const result2 = ymdReg('2021-10-13')
  console.log(result1) // false
  console.log(result2) // true
 */
export default ymdReg;
