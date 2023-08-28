/**
 * @description: 银行卡号
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const bankReg = (value) => {
  const reg = /^[1-9]\d{9,29}$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法

  const result1 = bankReg('6212262502009182455')

  console.log(result1) // true

 */
export default bankReg;
