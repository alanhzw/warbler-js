/**
 * @description: 12小时制时间（hh:mm:ss）
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const hmsReg = (value) => {
  const reg = /^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = hmsReg('09:02:34')
  const result2 = hmsReg('13:41:25')
  console.log(result1) // true
  console.log(result2) // false
 */
export default hmsReg;
