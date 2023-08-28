/**
 * @description: 24小时制时间（HH:mm:ss）
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const dateHmsReg = (value) => {
  const reg = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = dateHmsReg('09:02:34')
  const result2 = dateHmsReg('13:41:25')
  console.log(result1) // true
  console.log(result2) // true
 */
export default dateHmsReg;
