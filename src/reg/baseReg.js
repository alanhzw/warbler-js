/**
 * @description: base64格式
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const baseReg = (value) => {
  const reg = /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = baseReg('data:image/gif;base64,xxxx==')
  const result2 = baseReg('data:image/gif;base63,xxxx==')
  console.log(result1) // true
  console.log(result2) // false
 */
export default baseReg;
