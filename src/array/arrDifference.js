/**
 * @description: 获取两个数组之间不同的元素
 * @param { Array } arr1 需要获取不同元素的数组一
 * @param { Array } arr2 需要获取不同元素的数组二
 * @return { Array } 两个数组之间不同的元素组成的数组
 */
const arrDifference = (arr1, arr2) => arr1.concat(arr2).filter((v, i, arr) => arr.indexOf(v) === arr.lastIndexOf(v));

/** 用法
const arr1 = [1,2,4,5,8]
const arr2 = [2,3,5,8,9]
const result = arrDifference(arr1,arr2)
console.log(result) //=> [1,4,3,9]
 */
export default arrDifference;
