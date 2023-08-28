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
  const result1 = urlReg('http://www.warblerfe.top')
  const result2 = urlReg('https://http://www.warblerfe.top')
  const result3 = urlReg('https://http://www.warblerfe.top:3000')
  const result4 = urlReg('https://http://www.warblerfe.top?name=hzw&age=18')
  const result5 = urlReg('https://http://www.warblerfe.top/#/name=hzw&age=18')

  console.log(result1) // true
  console.log(result2) // true
  console.log(result3) // true
  console.log(result4) // true
  console.log(result5) // true

 */
export default urlReg;
