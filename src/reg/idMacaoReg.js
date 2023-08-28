/**
 * @description: 身份证号（澳门）
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const idMacaoReg = (value) => {
  const reg = /^[1|5|7]\d{6}[(\d)]{3}$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法

  const result1 = idMacaoReg('5686611(1)')
  console.log(result1) // true
 */
export default idMacaoReg;
