/**
 * @description: 身份证号（香港）
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const idHongKongReg = (value) => {
  const reg = /^[a-zA-Z]\d{6}\([\dA]\)$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法

  const result1 = idHongKongReg('K034169(1)')

  console.log(result1) // true

 */
export default idHongKongReg;
