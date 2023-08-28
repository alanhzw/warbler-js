/**
 * @description: 计算对象数组指定健的平均值
 * @param { Array } arr 需要计算平均值的数组
 * @param { String } key 需要计算平均值的 key
 * @return { Number } 指定健的平均值
 */
const averageBy = (arr, key) => arr.reduce((pre, cur) => pre + cur[key], 0) / arr.length;

/** 用法
  const fruits = [
    {name: 'Grapes', quantity: 2},
    {name: 'Bananas', quantity: 5},
    {name: 'Apples', quantity: 10},
    {name: 'Grapes', quantity: 4},
    {name: 'Grapes', quantity: 6},
  ];
  const result = averageBy(fruits,'quantity')
  console.log(result) //=> 5.4
 */

export default averageBy;
