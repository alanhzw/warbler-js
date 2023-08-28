/**
 * @description: 判断是否达到指定时间
 * @param { String } date 指定日期 格式为"YYYY-MM-DD HH:mm:ss"
 * @return { Boolean } true,达到指定时间 false,没有达到指定时间
 */
const isScheduled = (date) => {
  const date1 = new Date();
  const date2 = new Date(Date.parse(date));
  return date1 > date2;
};

/** 用法

//测试日期为2021-10-18
const result1 = isScheduled('2021-10-17 00:00:00')
const result2 = isScheduled('2021-10-19 00:00:00')
console.log(result1) //=> true
console.log(result2) //=> false
 */

export default isScheduled;
