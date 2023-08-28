/**
 * @description: 16进制颜色
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const colorReg = (value) => {
  const reg = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = colorReg('#fff')
  const result2 = colorReg('#000000')
  console.log(result1) // true
  console.log(result2) // true
 */
export default colorReg;
