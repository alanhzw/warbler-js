/*
 * @Author: 一尾流莺
 * @Description: 计算参数的平均值
 * @Date: 2021-09-10 14:58:17
 * @LastEditTime: 2023-08-25 15:39:54
 * @FilePath: \warbler-js\src\number\calculation\getAverage.js
 */

/**
 * @description: 计算参数的平均值
 * @param { Number } num 目标数字,不限制参数数量
 * @return { Number } 所有参数的平均数
 */
const getAverage = (...args) => args.reduce((a, b) => a + b) / args.length;

/** 用法

  const result1 = getAverage(1,2,3,4)
  const result2 = getAverage(1,2,3,4,5,6,7,8)

  console.log(result1) // 2.5
  console.log(result2) // 4.4

 */

export default getAverage;
