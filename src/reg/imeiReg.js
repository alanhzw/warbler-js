/**
 * @description: 手机机身码(IMEI)
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const imeiReg = (value) => {
  const reg = /^\d{15,17}$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = imeiReg('12345678998765432')
  const result2 = imeiReg('12345678998765432234')
  console.log(result1) // true
  console.log(result2) // false
 */
export default imeiReg;
