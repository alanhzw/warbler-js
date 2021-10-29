/*
 * @Author: 一尾流莺
 * @Description:随机化数组元素的顺序
 * @Date: 2021-09-17 17:04:00
 * @LastEditTime: 2021-10-29 10:59:28
 * @FilePath: \warblerJS\src\array\other\shuffleArr.js
 */
/**
 * @description: 随机化数组元素的顺序
 * @param { Array } arr 需要打乱顺序的数组
 * @return { Array } 打乱顺序后的数组
 */
const shuffleArr = (arr) => arr.sort(() => Math.random() - 0.5);

/** 用法
const ages = [1,2,3,4,5,6,7,8]
const result = shuffleArr(ages)
console.log(result) //=> [1, 7, 2, 3, 8, 4, 5, 6]
 */
export default shuffleArr;
