/**
 * @description: 护照（包含香港、澳门）
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const passportReg = (value) => {
  const reg = /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法

  const result1 = passportReg('s28233515')
  const result2 = passportReg('MA1234567')

  console.log(result1) // true
  console.log(result2) // true

 */
export default passportReg;
