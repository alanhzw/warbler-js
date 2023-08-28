/**
 * @description: 判断一个数字是不是奇数
 * @param { Number } num 目标数字
 * @return { Boolean } true 奇数 false 偶数
 */
const isOddNumber = (num) => num % 2 === 1;

/** 用法

  const result1 = isOddNumber(4)
  const result2 = isOddNumber(5)
  console.log(result1) //false
  console.log(result2) //true

 */

export default isOddNumber;
