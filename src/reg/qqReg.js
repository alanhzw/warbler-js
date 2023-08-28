/**
 * @description: qq号
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const qqReg = (value) => {
  const reg = /^[1-9][0-9]{4,10}$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法

  const result1 = qqReg('969800462')
  const result2 = qqReg('1741847465')

  console.log(result1) // true
  console.log(result2) // true

 */
export default qqReg;
