/**
 * @description: 货币金额 (只支持正数、不支持校验千分位分隔符)
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const moneyReg = (value) => {
  const reg = /(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/;
  return reg.test(value);
};

/** 用法

  const result1 = moneyReg('500')
  const result2 = moneyReg('-3')
  const result3 = moneyReg('3.99')
  const result4 = moneyReg('12,345,678.90')
  console.log(result1) // true
  console.log(result2) // false
  console.log(result3) // true
  console.log(result4) // false

 */
export default moneyReg;
