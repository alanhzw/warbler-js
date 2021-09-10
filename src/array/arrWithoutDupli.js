/*
 * @Author: 一尾流莺
 * @Description:删除数组中的重复项(不会修改原数组)
 * @Date: 2021-09-10 11:15:33
 * @LastEditTime: 2021-09-10 17:44:38
 * @FilePath: \warblerJS\src\array\arrWithoutDupli.js
 */

/**
 * @description:删除数组中的重复项
 * @param { Array } arr 目标去重的数组
 * @return { Array } 数组去重后的结果
 */
const arrWithoutDupli = (arr) => [...new Set(arr)];

/** 用法

  const fruits = ["apple", "mango", "orange", "apple", "pineapple", "pineapple", "peach", "mango"]
  let result = arrWithoutDupli(fruits);
  console.log(result) // ['apple', 'mango', 'orange', 'pineapple', 'peach']

 */

export default arrWithoutDupli;
