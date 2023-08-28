/**
 * @description: 英文
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const englishReg = (value) => {
  const reg = /^[a-zA-Z]+$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = englishReg('一尾流莺')
  const result2 = englishReg('Warbler')
  console.log(result1) // false
  console.log(result2) // true
 */
export default englishReg;
