/**
 * @description: 获取两个日期之间的差值
 * @param { String } date1 指定日期1 可传参数同 new Date() , 支持 `yyyy-mm-dd`格式
 * @param { String } date2 指定日期2 可传参数同 new Date() , 支持 `yyyy-mm-dd`格式
 * @param { String } unit   day | hour | minute | second | ms  设置差值的单位
 * @return { Number } 两个日期之间的差值
 */
const getDayDiff = (date1, date2, unit) => {
  const myDate1 = typeof date1 === 'string' && date1.includes('-') ? date1.replace(/-/g, '/') : date1;
  const myDate2 = typeof date2 === 'string' && date2.includes('-') ? date2.replace(/-/g, '/') : date2;
  const map = {
    day: 1000 * 60 * 60 * 24,
    hour: 1000 * 60 * 60,
    minute: 1000 * 60,
    second: 1000,
    ms: 1,
  };
  return Math.abs((new Date(myDate2) - new Date(myDate1)) / (map[unit]));
};

/** 用法
import { getDayDiff } from 'warbler-js'
// 以天为单位
const result1 = getDayDiff("2021,9,15",'2021,9,16','day')
// 以小时为单位
const result2 = getDayDiff("2021,9,15",'2021,9,16','hour')
// 以分钟为单位
const result3 = getDayDiff("2021,9,15",'2021,9,16','minute')
// 以秒为单位
const result4 = getDayDiff("2021,9,15",'2021,9,16','second')
// 以毫秒为单位
const result5 = getDayDiff("2021,9,15",'2021,9,16','ms')
console.log(result1) //=> 1
console.log(result2) //=> 24
console.log(result3) //=> 1440
console.log(result4) //=> 86400
console.log(result5) //=> 86400000
 */

export default getDayDiff;
