/**
 * @description: 邮政编码
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const postalReg = (value) => {
  const reg = /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = postalReg('734500')

  console.log(result1) // true
 */
export default postalReg;
