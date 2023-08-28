/**
 * @description: 统一社会信用代码(宽松匹配)(15位/18位/20位数字/字母)
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const codsReg = (value) => {
  const reg = /^(([0-9A-Za-z]{15})|([0-9A-Za-z]{18})|([0-9A-Za-z]{20}))$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = codsReg('9134052155323005XL')
  const result2 = codsReg('91330526MA345BR13A')
  console.log(result1) // true
  console.log(result2) // true
 */
export default codsReg;
