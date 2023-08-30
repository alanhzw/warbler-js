/**
 * @description: 反转字符串
 * @param { String } str 目标字符串
 * @return { String } 反转后的字符串
 */
const reverseString = (str) => str.split('').reverse().join('');

/** 用法

  const initStr = 'hello,world'
  const finallyStr = reverseString(initStr)
  console.log(finallyStr) //=> dlrow,olleh

 */

export default reverseString;
