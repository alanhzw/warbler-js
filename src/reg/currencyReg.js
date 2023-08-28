/**
 * @description: 货币金额（支持负数、千分位分隔符）
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const currencyReg = (value) => {
  const reg = /^-?\d+(,\d{3})*(\.\d{1,2})?$/;
  return reg.test(value);
};

/** 用法

  const result1 = currencyReg('0')
  const result2 = currencyReg('-3')
  const result3 = currencyReg('3.99')
  const result4 = currencyReg('12,345,678.90')
  console.log(result1) // true
  console.log(result2) // true
  console.log(result3) // true
  console.log(result4) // true
 */
export default currencyReg;
