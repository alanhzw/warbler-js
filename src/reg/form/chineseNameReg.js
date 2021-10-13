/*
 * @Author: 一尾流莺
 * @Description:中文名字
 * @Date: 2021-10-08 14:34:58
 * @LastEditTime: 2021-10-13 15:16:42
 * @FilePath: \warblerJS\src\reg\string\chineseNameReg.js
 */

/**
 * @description: 中文名字
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const chineseNameReg = (value) => {
  const reg = /^(?:[\u4e00-\u9fa5·]{2,16})$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法

  const result1 = chineseNameReg('一尾·流莺')
  const result2 = chineseNameReg('warbler')

  console.log(result1) // true
  console.log(result2) // false

 */
export default chineseNameReg;
