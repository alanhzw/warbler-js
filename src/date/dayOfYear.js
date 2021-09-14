/*
 * @Author: 一尾流莺
 * @Description:获取指定日期是所在年份的第几天
 * @Date: 2021-09-14 16:09:42
 * @LastEditTime: 2021-09-14 16:31:03
 * @FilePath: \warblerJS\src\date\dayOfYear.js
 */

/**
 * @description: 获取指定日期是所在年份的第几天
 * @param { String } date 指定日期 可传参数同 new Date()
 * @return { Number } 指定日期是所在年份天数
 */
const dayOfYear = (date) => {
  const myData = date ? new Date(date) : new Date();
  return Math.floor((myData - new Date(myData.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
};

/** 用法

const result1 = dayOfYear()
const result2 = dayOfYear("2021,9,14")
console.log(result1)
console.log(result2)

 */

export default dayOfYear;
