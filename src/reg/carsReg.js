/**
 * @description: 车牌号(非新能源)
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const carsReg = (value) => {
  const reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法

  const result1 = carsReg('京A00234')
  const result2 = carsReg('黑D46234')

  console.log(result1) // true
  console.log(result2) // true

 */
export default carsReg;
