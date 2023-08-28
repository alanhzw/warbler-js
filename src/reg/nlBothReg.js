/**
 * @description: 同时含有数字和英文字母
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const nlBothReg = (value) => {
  const reg = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = nlBothReg('1')
  const result2 = nlBothReg('aa')
  const result3 = nlBothReg('3aa')

  console.log(result1) // false
  console.log(result2) // false
  console.log(result3) // true
 */
export default nlBothReg;
