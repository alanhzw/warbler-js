/*
 * @Author: 一尾流莺
 * @Description:判断指定日期是不是今天
 * @Date: 2021-09-14 16:09:42
 * @LastEditTime: 2021-09-18 10:27:51
 * @FilePath: \warblerJS\src\date\isToday.js
 */

/**
 * @description: 判断指定日期是不是今天
 * @param { String } date 指定日期 可传参数同 new Date()
 * @return { Number } 指定日期所在年份的天数
 */
const dayOfYear = (date) => {
  const myData = date ? new Date(date) : new Date();
  return Math.floor((myData - new Date(myData.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
};

/** 用法

const result1 = dayOfYear()
const result2 = dayOfYear("2021,9,15")
console.log(result1) //=> 257
console.log(result2) //=> 258

 */

export default dayOfYear;
