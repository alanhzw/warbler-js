/**
 * @description: 座机(tel phone)电话(国内),如: 0341-86091234
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const landlineReg = (value) => {
  const reg = /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法

  const result1 = landlineReg('0936-4211235')
  const result2 = landlineReg('89076543')
  const result3 = landlineReg('010-12345678-1234')
  console.log(result1) // true
  console.log(result2) // true
  console.log(result3) // true
 */
export default landlineReg;
