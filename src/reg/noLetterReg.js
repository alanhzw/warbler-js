/**
 * @description: 不能包含字母
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const noLetterReg = (value) => {
  const reg = /^[^A-Za-z]*$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = noLetterReg('一尾流莺1!@#')
  const result2 = noLetterReg('a')

  console.log(result1) // true
  console.log(result2) // false

 */
export default noLetterReg;
