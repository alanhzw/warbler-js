/*
 * @Author: 一尾流莺
 * @Description:版本号
 * @Date: 2021-10-08 14:34:58
 * @LastEditTime: 2021-10-13 14:18:37
 * @FilePath: \warblerJS\src\reg\web\editionReg.js
 */

/**
 * @description: 版本号
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const editionReg = (value) => {
  const reg = /^\d+(?:\.\d+){2}$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = editionReg('1.0.1')
  const result2 = editionReg('13.4')
  console.log(result1) // true
  console.log(result2) // false
 */
export default editionReg;
