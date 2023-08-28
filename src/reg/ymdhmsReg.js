/**
 * @description: 日期 YYYY-MM-DD hh:mm:ss
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const ymdhmsReg = (value) => {
  const reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = ymdhmsReg('2021-10-13 17:34:00')
  const result2 = ymdhmsReg('13:41:25')
  console.log(result1) // true
  console.log(result2) // false
 */
export default ymdhmsReg;
