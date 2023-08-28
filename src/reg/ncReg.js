/**
 * @description: 数字和中文的组合
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const ncReg = (value) => {
  const reg = /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = ncReg('1')
  const result2 = ncReg('韩')
  const result3 = ncReg('韩1')
  const result4 = ncReg('韩a')

  console.log(result1) // true
  console.log(result2) // true
  console.log(result3) // true
  console.log(result4) // false

 */
export default ncReg;
