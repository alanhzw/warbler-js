/**
 * @description:将字符串的首字母转换成大写字母
 * @param { String } [first, ...rest]  需要将首字母转换成大写字母的字符串
 * @return { String } 将首字母转换成大写字母的字符串
 */

const toUpperFirstLetter = ([first, ...rest]) => first.toUpperCase() + rest.join('');

/** 用法

  const initStr = 'hello,world'
  const finallyStr = toUpperFirstLetter(initStr)
  console.log(finallyStr) //=> 'Hello,world'

 */

export default toUpperFirstLetter;
