/**
 * @description: 判断指定日期是不是今天
 * @param { String } date 指定日期 可传参数同 new Date() ，并且支持 `yyyy-mm-dd`格式 ,不传默认获取当天
 * @return { Boolean } true,是今天 false,不是今天
 */
const isToday = (date) => {
  // 当前日期
  const curDate = new Date();
  // 指定日期
  const tarData = date ? new Date(typeof date === 'string' && date.includes('-') ? date.replace(/-/g, '/') : date) : new Date();
  return ['getFullYear', 'getMonth', 'getDate'].every((i) => curDate[i]() === tarData[i]());
};

/** 用法

//测试日期为2021-09-26
const result1 = isToday(new Date())
const result2 = isToday("1998-03-09")
console.log(result1) //=> true
console.log(result2) //=> false

 */

export default isToday;
