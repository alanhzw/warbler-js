/*
 * @Author: 一尾流莺
 * @Description:过滤数组中的非唯一值
 * @Date: 2021-09-15 10:54:18
 * @LastEditTime: 2021-09-15 11:13:02
 * @FilePath: \warblerJS\src\array\filterNoUnique.js
 */

/**
 * @description: 过滤数组中的非唯一值
 * @param { Array } arr 需要过滤的数组
 * @return { Array } 过滤后的数组
 */
const filterNoUnique = (arr) => arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));

/** 用法
 const arr = [1,2,2,3,3,4,5,5,6]
 const result = filterNoUnique(arr)
 console.log(result) //=> [1,4,6]
 */

export default filterNoUnique;
