/**
 * @description: 身份证号码(一代))
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const idFirstReg = (value) => {
  const reg = /^[1-9]\d{7}(?:0\d|10|11|12)(?:0[1-9]|[1-2][\d]|30|31)\d{3}$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法

  const result1 = idFirstReg('123456991010193')
  const result2 = idFirstReg('1234569910101934')

  console.log(result1) // true
  console.log(result2) // false

 */
export default idFirstReg;
