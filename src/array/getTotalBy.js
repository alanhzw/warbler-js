/**
 * @description: 计算对象数组指定属性值的总和
 * @param { Array } arr 需要计算指定属性值总和的对象数组
 * @param { String } key 需要计算总和的 key
 * @return { Number } 对象数组指定属性值的总和
 */
const getTotalBy = (arr, key) => arr.reduce((pre, cur) => pre + cur[key], 0);

/**
const fruits = [
  {name: 'Grapes', quantity: 2},
  {name: 'Bananas', quantity: 5},
  {name: 'Apples', quantity: 10},
  {name: 'Grapes', quantity: 4},
  {name: 'Grapes', quantity: 6},
];
const result = getTotalBy(fruits,'quantity')
console.log(result) //=> 27
 */

export default getTotalBy;
