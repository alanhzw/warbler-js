/*
 * @Author: 一尾流莺
 * @Description:判断一个数字是不是偶数
 * @Date: 2021-09-10 14:58:17
 * @LastEditTime: 2023-04-14 16:37:13
 * @FilePath: \warbler-js\src\number\judge\isEvenNumber.js
 */

/**
 * @description: 判断一个数字是不是偶数
 * @param { Number } num 目标数字
 * @return { Boolean } true 偶数 false 奇数
 */
const isEvenNumber = (num) => num % 2 === 0;

/** 用法

  const result1 = isEvenNumber(4)
  const result2 = isEvenNumber(5)
  console.log(result1) //true
  console.log(result2) //false

 */

export default isEvenNumber;
