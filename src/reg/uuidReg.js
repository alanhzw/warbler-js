/**
 * @description: GUID/UUID
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const uuidReg = (value) => {
  const reg = /^[a-f\d]{4}(?:[a-f\d]{4}-){4}[a-f\d]{12}$/i;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = uuidReg('0842F912-3053-24A1-CE07-23610A13C565')
  const result2 = uuidReg('30b18fc7-7e3a-451d-a09f-f15b338f91bd')
  console.log(result1) // true
  console.log(result2) // true
 */
export default uuidReg;
