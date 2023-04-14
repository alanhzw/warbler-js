/*
 * @Author: 一尾流莺
 * @Description:判断一个数字是不是奇数
 * @Date: 2021-09-10 14:58:17
 * @LastEditTime: 2023-04-14 16:30:47
 * @FilePath: \warbler-js\src\number\judge\isOddNumber.js
 */

/**
 * @description: 判断一个数字是不是奇数
 * @param { Number } num 目标数字
 * @return { Boolean } true 奇数 false 偶数
 */
const isEvenNumber = (num) => num % 2 === 1;

/** 用法

  const result1 = isEvenNumber(4)
  const result2 = isEvenNumber(5)
  console.log(result1) //false
  console.log(result2) //true

 */

export default isEvenNumber;
