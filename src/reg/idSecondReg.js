/**
 * @description: 身份证号码(二代))
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const idSecondReg = (value) => {
  const reg = /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法

  const result1 = idSecondReg('150404199803095215')
  const result2 = idSecondReg('15040419980309521x')

  console.log(result1) // true
  console.log(result2) // true

 */
export default idSecondReg;
