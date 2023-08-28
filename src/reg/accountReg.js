/**
 * @description: 帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const accountReg = (value) => {
  const reg = /^[a-zA-Z]\w{4,15}$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = accountReg('hanzhiwei')
  const result2 = accountReg('hanzhi_wei01')
  console.log(result1) // true
  console.log(result2) // true
 */
export default accountReg;
