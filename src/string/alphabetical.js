/**
 * @description: 将字符串按字母顺序排列
 * @param { String } str 需要按字母顺序排列的字符串
 * @return { String } 按字母顺序排列后的字符串
 */
const alphabetical = (str) => str.split('').sort((a, b) => a.localeCompare(b)).join('');

/** 用法
const initStr = 'adaskjdhaskjdhjkgrjheg'
const result = alphabetical(initStr)
console.log(result) //=> aaadddegghhhjjjjkkkrss
 */
export default alphabetical;
