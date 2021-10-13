/*
 * @Author: 一尾流莺
 * @Description:必须带端口号的网址(或ip)
 * @Date: 2021-10-08 14:34:58
 * @LastEditTime: 2021-10-13 11:13:46
 * @FilePath: \warblerJS\src\reg\webUrl\urlWithPortReg.js
 */

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
  const result1 = urlWithPortReg('http://warblerjs.duwanyu.com')
  const result2 = urlWithPortReg('http://warblerjs.duwanyu.com:3000')
  const result3 = urlWithPortReg('https://warblerjs.duwanyu.com:3000')

  console.log(result1) // false
  console.log(result2) // true
  console.log(result3) // true
 */
export default urlWithPortReg;
