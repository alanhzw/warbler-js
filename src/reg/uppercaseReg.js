/**
 * @description: 大写英文
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const uppercaseReg = (value) => {
  const reg = /^[A-Z]+$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = uppercaseReg('WARBLER')
  const result2 = uppercaseReg('Warbler')
  console.log(result1) // true
  console.log(result2) // false
 */
export default uppercaseReg;
