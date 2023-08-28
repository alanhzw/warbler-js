/**
 * @description: 负整数(包含0)
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const zeroNegativeIntegerReg = (value) => {
  const reg = /^(-[1-9]\d*|[0]{1,1})$/;
  return reg.test(value);
};

/** 用法

  const result1 = zeroNegativeIntegerReg('0')
  const result2 = zeroNegativeIntegerReg('-3')
  const result3 = zeroNegativeIntegerReg('4')
  const result4 = zeroNegativeIntegerReg('1.1')
  const result5 = zeroNegativeIntegerReg('一尾流莺')

  console.log(result1) // true
  console.log(result2) // true
  console.log(result3) // false
  console.log(result4) // false
  console.log(result5) // false

 */
export default zeroNegativeIntegerReg;
