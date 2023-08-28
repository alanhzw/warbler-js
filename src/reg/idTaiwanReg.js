/**
 * @description: 身份证号码(台湾)
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const idTaiwanReg = (value) => {
  const reg = /^[a-zA-Z][0-9]{9}$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法

  const result1 = idTaiwanReg('U193683453')

  console.log(result1) // true

 */
export default idTaiwanReg;
