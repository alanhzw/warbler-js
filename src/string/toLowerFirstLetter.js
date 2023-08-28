/**
 * @description:将字符串的首字母转换成小写字母
 * @param { String } [first, ...rest]  需要将首字母转换成小写字母的字符串
 * @return { String } 将首字母转换成小写字母的字符串
 */
const toLowerFirstLetter = ([first, ...rest]) => first.toLowerCase() + rest.join('');

/** 用法

  const initStr = 'Hello,world'
  const finallyStr = toLowerFirstLetter(initStr)
  console.log(finallyStr) //=> 'hello,world'

 */

export default toLowerFirstLetter;
