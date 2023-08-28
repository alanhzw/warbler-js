/**
 * @description: 数字,整数和小数
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const numberReg = (value) => {
  const reg = /^(\-|\+)?\d+(\.\d+)?$/;
  return reg.test(value);
};

/** 用法

  const result1 = numberReg('0')
  const result2 = numberReg('-3.3')
  const result3 = numberReg('4.4')
  const result4 = numberReg('3')

  console.log(result1) // true
  console.log(result2) // true
  console.log(result3) // true
  console.log(result4) // true

 */
export default numberReg;
