/**
 * @description: 检验一个字符串是否是回文
 * @param { String } str 需要检验的字符串
 * @return { Boolean } true,是回文 false,不是回文
 */
const isPalindrome = (str) => str === [...str].reverse().join('');

/** 用法

const str = 'abcdedcba';
const result = isPalindrome(str);
console.log(result); //=> true

 */

export default isPalindrome;
