/**
 * @description: 中国手机号(严格), 根据工信部2019年最新公布的手机号段
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const strictTelReg = (value) => {
  const reg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;
  return reg.test(value);
};

/** 用法

  const result1 = strictTelReg('008617612340174')
  const result2 = strictTelReg('+8617612340174')
  const result3 = strictTelReg('19912340174')
  const result4 = strictTelReg('12912340174')

  console.log(result1) // true
  console.log(result2) // true
  console.log(result3) // true
  console.log(result4) // false

 */
export default strictTelReg;
