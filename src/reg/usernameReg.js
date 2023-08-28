/**
 * @description: 用户名校验，4到16位（字母，数字，下划线，减号）
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const usernameReg = (value) => {
  const reg = /^[a-zA-Z0-9_-]{4,16}$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = usernameReg('warbler_js01')

  console.log(result1) // true
 */
export default usernameReg;
