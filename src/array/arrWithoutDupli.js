/*
 * @Author: 一尾流莺
 * @Description:删除数组中的重复项
 * @Date: 2021-09-10 11:15:33
 * @LastEditTime: 2021-09-10 17:39:56
 * @FilePath: \warblerJS\src\array\arrWithoutDupli.js
 */

/**
 * @description:删除数组中的重复项
 * @param { Array } arr 待查询的目标数组
 * @param { String } key 查询对象的键
 * @param { String } value 查询对象的值
 * @return { obj } 查找到的结果
 */
const arrWithoutDupli = (arr) => [...new Set(arr)];

/** 用法

  const fruits = ["apple", "mango", "orange", "apple", "pineapple", "pineapple", "peach", "mango"]
  let result = arrWithoutDupli(fruits);
  console.log(result) // ['apple', 'mango', 'orange', 'pineapple', 'peach']

 */

export default arrWithoutDupli;
