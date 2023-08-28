/**
 * @description: 火车车次
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const trainReg = (value) => {
  const reg = /^[GCDZTSPKXLY1-9]\d{1,4}$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = trainReg('G1234')
  const result2 = trainReg('A18')
  console.log(result1) // true
  console.log(result2) // false
 */
export default trainReg;
