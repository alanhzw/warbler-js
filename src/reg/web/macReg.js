/*
 * @Author: 一尾流莺
 * @Description:mac地址
 * @Date: 2021-10-08 14:34:58
 * @LastEditTime: 2021-10-13 17:24:39
 * @FilePath: \warblerJS\src\reg\web\macReg.js
 */

/**
 * @description: mac地址
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const macReg = (value) => {
  const reg = /^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/i;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = macReg('38:f9:d3:4b:f5:51')
  const result2 = macReg('00-0C-18-CA-E4-55')
  console.log(result1) // true
  console.log(result2) // true
 */
export default macReg;
