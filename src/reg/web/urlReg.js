/*
 * @Author: 一尾流莺
 * @Description:网址(url,支持端口和"?+参数"和"#+参数)
 * @Date: 2021-10-08 14:34:58
 * @LastEditTime: 2021-10-13 11:10:33
 * @FilePath: \warblerJS\src\reg\webUrl\urlReg.js
 */

/**
 * @description: 网址(url,支持端口和"?+参数"和"#+参数)
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const urlReg = (value) => {
  const reg = /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = urlReg('http://warblerjs.duwanyu.com')
  const result2 = urlReg('https://warblerjs.duwanyu.com')
  const result3 = urlReg('https://warblerjs.duwanyu.com:3000')
  const result4 = urlReg('https://warblerjs.duwanyu.com?name=hzw&age=18')
  const result5 = urlReg('https://warblerjs.duwanyu.com/#/name=hzw&age=18')

  console.log(result1) // true
  console.log(result2) // true
  console.log(result3) // true
  console.log(result4) // true
  console.log(result5) // true

 */
export default urlReg;
