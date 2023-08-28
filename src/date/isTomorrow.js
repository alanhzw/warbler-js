/**
 * @description: 判断指定日期是不是n天后
 * @param { String } date 指定日期 可传参数同 new Date() ，并且支持 `yyyy-mm-dd`格式 ,不传默认获取当天
 * @param { Number } n n天后，不传默认为1，也就是明天
 * @return { Boolean } true,是n天后 false,不是n天后
 */
const isTomorrow = (date, n = 1) => {
  const curDate = new Date(); // 当前日期
  curDate.setDate(curDate.getDate() + n); // 当前日期加一天
  // 指定日期
  const tarData = date ? new Date(typeof date === 'string' && date.includes('-') ? date.replace(/-/g, '/') : date) : new Date();
  return ['getFullYear', 'getMonth', 'getDate'].every((i) => curDate[i]() === tarData[i]());
};

/** 用法

// 测试日期为2021-09-26
const result1 = isTomorrow(new Date())
const result2 = isTomorrow("2021-09-27",1)
const result3 = isTomorrow("2021-09-27",2)
const result4 = isTomorrow("2021-09-28",2)
console.log(result1) //=> false
console.log(result2) //=> true
console.log(result3) //=> false
console.log(result4) //=> true

 */

export default isTomorrow;
