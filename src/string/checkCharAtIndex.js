/**
 * @description: 检验指定索引处是不是某个字符
 * @param { String } str 需要检验的字符串
 * @param { String } char 需要检验的字符
 * @param { Number } index 需要检验的索引
 * @return { Boolean } true,是 false,不是
 */
const checkCharAtIndex = (str, char, index) => str.charAt(index) === char;

/** 用法

const str = 'Hello, World!';
const result1 = checkCharAtIndex(str, 'H', 0);
const result2 = checkCharAtIndex(str, 'l', 2);
const result3 = checkCharAtIndex(str, 'A', 3);

console.log(result1); //= > true
console.log(result2); //= > true
console.log(result3); //= > false

 */

export default checkCharAtIndex;
