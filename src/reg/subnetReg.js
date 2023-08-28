/**
 * @description: 子网掩码
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const subnetReg = (value) => {
  const reg = /^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = subnetReg('255.255.255.0')
  const result2 = subnetReg('255.211.0.0')
  console.log(result1) // true
  console.log(result2) // true
 */
export default subnetReg;
