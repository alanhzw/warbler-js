/*
 * @Author: 一尾流莺
 * @Description:英文姓名
 * @Date: 2021-10-08 14:34:58
 * @LastEditTime: 2021-10-13 15:18:06
 * @FilePath: \warblerJS\src\reg\string\englishNameReg.js
 */

/**
 * @description: 英文姓名
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const englishNameReg = (value) => {
  const reg = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法

  const result1 = englishNameReg('一尾·流莺')
  const result2 = englishNameReg('warbler')

  console.log(result1) // false
  console.log(result2) // true

 */
export default englishNameReg;
