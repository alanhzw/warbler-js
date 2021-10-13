/*
 * @Author: 一尾流莺
 * @Description:获取数组二相对于数组一不同的元素
 * @Date: 2021-09-17 16:35:02
 * @LastEditTime: 2021-09-17 16:52:15
 * @FilePath: \warblerJS\src\array\getDifferenceFrom.js
 */

/**
 * @description: 获取数组二相对于数组一不同的元素
 * @param { Array } arr1 需要获取不同元素的数组一
 * @param { Array } arr2 需要获取不同元素的数组二
 * @return { Array } 数组二相对于数组一不同的元素组成的数组
 */
const getDifferenceFrom = (arr1, arr2) => {
  const values = new Set(arr2);
  return arr1.filter((element) => !values.has(element));
};

/** 用法
const arr1 = [1,2,4,5,8]
const arr2 = [2,3,5,8,9]
const result = getDifferenceFrom(arr1,arr2)
console.log(result) //=> [1,4]
 */
export default getDifferenceFrom;
