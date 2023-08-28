/**
 * @description: 整数 验证所有整数，不包括0
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const noZeroIntegerReg = (value) => {
  const reg = /^([1-9][0-9]*|-[1-9][0-9]*)$/;
  return reg.test(value);
};

/** 用法

  const result1 = noZeroIntegerReg('0')
  const result2 = noZeroIntegerReg('-3')
  const result3 = noZeroIntegerReg('4')
  const result4 = noZeroIntegerReg('1.1')
  const result5 = noZeroIntegerReg('一尾流莺')

  console.log(result1) // false
  console.log(result2) // true
  console.log(result3) // true
  console.log(result4) // false
  console.log(result5) // false

 */
export default noZeroIntegerReg;
