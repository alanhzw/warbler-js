/**
 * @description: 微信号
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const wechatReg = (value) => {
  const reg = /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法

  const result1 = wechatReg('yiweiliuying0309')
  const result2 = wechatReg('warbler_js')

  console.log(result1) // true
  console.log(result2) // true

 */
export default wechatReg;
