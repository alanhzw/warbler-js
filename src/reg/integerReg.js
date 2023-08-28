/**
 * @description: 整数 验证所有整数，包括0和正负数整数
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const integerReg = (value) => {
  const reg = /^(0|[1-9][0-9]*|-[1-9][0-9]*)$/;
  return reg.test(value);
};

/** 用法

  const result1 = integerReg('0')
  const result2 = integerReg('-3')
  const result3 = integerReg('4')
  const result4 = integerReg('1.1')
  const result5 = integerReg('一尾流莺')

  console.log(result1) // true
  console.log(result2) // true
  console.log(result3) // true
  console.log(result4) // false
  console.log(result5) // false

 */
export default integerReg;
