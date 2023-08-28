/**
 * @description: 密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const passwordReg = (value) => {
  const reg = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = passwordReg('asd12312321')
  const result2 = passwordReg('Hzw!dasd15')

  console.log(result1) // false
  console.log(result2) // true
 */
export default passwordReg;
