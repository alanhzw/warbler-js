/*
 * @Author: 一尾流莺
 * @Description:获取两个日期之间以天为单位的差值
 * @Date: 2021-09-14 16:09:42
 * @LastEditTime: 2021-09-18 11:45:24
 * @FilePath: \warblerJS\src\date\getDayDiff.js
 */

/**
 * @description: 获取两个日期之间以天为单位的差值
 * @param { String } date1 指定日期1 可传参数同 new Date() , 支持 `yyyy-mm-dd`格式
 * @param { String } date2 指定日期2 可传参数同 new Date() , 支持 `yyyy-mm-dd`格式
 * @return { Number } 两个日期之间以天为单位的差值
 */
const getDayDiff = (date1, date2) => {
  const myDate1 = typeof date1 === 'string' && date1.includes('-') ? date1.replace(/-/g, '/') : date1;
  const myDate2 = typeof date2 === 'string' && date2.includes('-') ? date2.replace(/-/g, '/') : date2;
  return Math.abs((new Date(myDate2) - new Date(myDate1)) / (1000 * 3600 * 24));
};

/** 用法
// 大的日期在后面
const result1 = getDayDiff("2021,9,15",'2021-12-03')
// 大的日期在前面
const result2 = getDayDiff("2022,9,15",'2021-12-03')
console.log(result1) //=> 79
console.log(result2) //=> 286

 */

export default getDayDiff;
