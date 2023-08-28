/**
 * @description: 必须带端口号的网址(或ip)
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const urlWithPortReg = (value) => {
  const reg = /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = urlWithPortReg('http://www.warblerfe.top')
  const result2 = urlWithPortReg('http://www.warblerfe.top:3000')
  const result3 = urlWithPortReg('https://http://www.warblerfe.top:3000')

  console.log(result1) // false
  console.log(result2) // true
  console.log(result3) // true
 */
export default urlWithPortReg;
