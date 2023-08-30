/**
 * @description: ip-v4
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const ipv4Reg = (value) => {
  const reg = /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = ipv4Reg('127.16.0.0')
  const result2 = ipv4Reg('127.0.0.1:8080')
  console.log(result1) // true
  console.log(result2) // true
 */
export default ipv4Reg;
