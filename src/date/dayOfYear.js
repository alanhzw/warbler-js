/**
 * @description: 获取指定日期是所在年份的第几天
 * @param { String } date 指定日期 可传参数同 new Date() ，并且支持 `yyyy-mm-dd`格式 ,不传默认获取当天
 * @return { Number } 指定日期所在年份的天数
 */
const dayOfYear = (date) => {
  const myData = date ? new Date(typeof date === 'string' && date.includes('-') ? date.replace(/-/g, '/') : date) : new Date();
  return Math.floor((myData - new Date(myData.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
};

/** 用法

const result1 = dayOfYear()
const result2 = dayOfYear("2021,9,15")
const result3 = dayOfYear("2021-9-16")
console.log(result1) //=> 257
console.log(result2) //=> 258
console.log(result3) //=> 258
 */

export default dayOfYear;
