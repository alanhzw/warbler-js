/**
 * @description: 获取指定日期是星期几
 * @param { String } date 指定日期 可传参数同 new Date() ，并且支持 `yyyy-mm-dd`格式 , 不传默认获取当天
 * @return { Number } 获取指定日期是星期几
 */
const getWeekday = (date) => {
  const myData = date ? new Date(typeof date === 'string' && date.includes('-') ? date.replace(/-/g, '/') : date) : new Date();
  const week = ['日', '一', '二', '三', '四', '五', '六'];
  return `星期${week[myData.getDay()]}`;
};

/** 用法

const result1 = getWeekday();
const result2 = getWeekday('2023,10,13');
const result3 = getWeekday('2023-10-14');
console.log(result1); //= > 星期五
console.log(result2); //= > 星期五
console.log(result3); //= > 星期六
 */

export default getWeekday;
