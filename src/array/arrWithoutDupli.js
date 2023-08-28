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
