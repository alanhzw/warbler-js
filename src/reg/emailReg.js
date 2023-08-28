/**
 * @description: 验证邮箱
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const emailReg = (value) => {
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = emailReg('1741847465@qq.com')
  const result2 = emailReg('http://www.warblerfe.top/')
  console.log(result1) // true
  console.log(result2) // false
 */
export default emailReg;
