/*
 * @Author: 一尾流莺
 * @Description:车牌号(全)
 * @Date: 2021-10-08 14:34:58
 * @LastEditTime: 2021-10-13 15:32:46
 * @FilePath: \warblerJS\src\reg\phone\allCarsReg.js
 */

/**
 * @description: 车牌号(全)
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const allCarsReg = (value) => {
  const reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法

  const result1 = allCarsReg('京AD80234')
  const result2 = allCarsReg('京A00599')

  console.log(result1) // true
  console.log(result2) // true

 */
export default allCarsReg;
