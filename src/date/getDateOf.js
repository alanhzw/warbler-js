/**
 * @description: 获取指定日期的日、月、季度、半年或年份
 * @param { String } mode 指定模式 'day' | 'month' | 'quarter' | 'halfYear' | 'year'
 * @param { String } date 指定日期，可传参数同 new Date()，并且支持 yyyy-mm-dd格式 , 不传默认获取当天
 * @return { String } 返回指定模式的日期字符串
 */
const getDateOf = (mode, date) => {
  const myData = date ? new Date(typeof date === 'string' && date.includes('-') ? date.replace(/-/g, '/') : date) : new Date();
  const year = myData.getFullYear();
  const month = myData.getMonth() + 1;
  const day = myData.getDate();
  const quarter = Math.floor((month + 2) / 3);
  const halfYear = Math.floor((month + 5) / 6);
  switch (mode) {
    case 'day':
      return `${year}-${month}-${day}`;
    case 'month':
      return `${year}-${month}`;
    case 'quarter':
      return `${year}-Q${quarter}`;
    case 'halfYear':
      return `${year}-H${halfYear}`;
    case 'year':
      return `${year}`;
    default:
      return `${year}-${month}-${day}`;
  }
};

/** 用法

// 测试日期为 2023-09-22
console.log(getDateOf()); // => 2023-9-22
console.log(getDateOf('day')); // => 2023-9-22
console.log(getDateOf('month')); // => 2023-9
console.log(getDateOf('quarter')); // => 2023-Q3
console.log(getDateOf('halfYear')); // => 2023-H2
console.log(getDateOf('year')); // => 2023

console.log(getDateOf('day', '2025-03-09')); // => 2025-3-9
console.log(getDateOf('month', '2025-03-09')); // => 2025-3
console.log(getDateOf('quarter', '2025-03-09')); // => 2025-Q1
console.log(getDateOf('halfYear', '2025-03-09')); // => 2025-Q1
console.log(getDateOf('year', '2025-03-09')); // => 2025

 */

export default getDateOf;
