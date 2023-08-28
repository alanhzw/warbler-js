/**
 * @description: 图片(image)链接地址（图片格式可按需增删）
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const imgUrlReg = (value) => {
  const reg = /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = imgUrlReg('http://www.warblerfe.top/wc.png')
  const result2 = imgUrlReg('https://www.warblerfe.top/wc.png')
  const result3 = imgUrlReg('www.warblerfe.top/wc.png')
  console.log(result1) // true
  console.log(result2) // true
  console.log(result3) // false

 */
export default imgUrlReg;
