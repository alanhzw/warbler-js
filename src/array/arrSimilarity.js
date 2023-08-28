/**
 * @description: 获取两个数组之间相同的元素
 * @param { Array } arr1 需要获取相同元素的数组一
 * @param { Array } arr2 需要获取相同元素的数组二
 * @return { Array } 两个数组之间相同的元素组成的数组
 */
const arrSimilarity = (arr1, arr2) => arr1.filter((v) => arr2.includes(v));

/** 用法
const arr1 = [1,2,4,5,8]
const arr2 = [2,3,5,8,9]
const result = arrSimilarity(arr1,arr2)
console.log(result) //=> [2,5,8]
 */
export default arrSimilarity;
