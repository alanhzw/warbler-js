/**
 * @description: 中国手机号(复杂), 只要是13,14,15,16,17,18,19开头即可
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const complexTelReg = (value) => {
  const reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
  return reg.test(value);
};

/** 用法

  const result1 = complexTelReg('008617612340174')
  const result2 = complexTelReg('+8617612340174')
  const result3 = complexTelReg('19912340174')
  const result4 = complexTelReg('12912340174')

  console.log(result1) // true
  console.log(result2) // true
  console.log(result3) // true
  console.log(result4) // false

 */
export default complexTelReg;
