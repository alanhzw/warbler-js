/**
 * @description: 小写英文
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const lowercaseReg = (value) => {
  const reg = /^[a-z]+$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = lowercaseReg('warbler')
  const result2 = lowercaseReg('Warbler')
  console.log(result1) // true
  console.log(result2) // false
 */
export default lowercaseReg;
