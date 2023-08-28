/**
 * @description: 正整数(不包含0)
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const positiveIntegerReg = (value) => {
  const reg = /^[1-9]\d*$/;
  return reg.test(value);
};

/** 用法

  const result1 = positiveIntegerReg('0')
  const result2 = positiveIntegerReg('-3')
  const result3 = positiveIntegerReg('4')
  const result4 = positiveIntegerReg('1.1')
  const result5 = positiveIntegerReg('一尾流莺')

  console.log(result1) // false
  console.log(result2) // false
  console.log(result3) // true
  console.log(result4) // false
  console.log(result5) // false

 */
export default positiveIntegerReg;
