/**
 * @description: 字符串去重
 * @param { String } str 需要去重的字符串
 * @return { String } 去重后的字符串
 */
const removeStrDuplicates = (str) => [...new Set(str)].join('');

/** 用法

const initStr = 'aaa bbb ccc  dd  ee aab aac';
const finallyStr = removeStrDuplicates(initStr);
console.log(finallyStr); //=> a bcde

 */

export default removeStrDuplicates;
