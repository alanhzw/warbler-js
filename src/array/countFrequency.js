/**
 * @description: 计算数组中元素的出现次数
 * @param { Array } arr 需要统计元素出现次数的数组
 * @param { String | Number } value 需要统计出现次数的元素
 * @return { Number } 目标元素的出现次数
 */
const countFrequency = (arr, value) => arr.reduce((pre, cur) => (cur === value ? pre + 1 : pre + 0), 0);

/**  用法
  const fruits = ['apple', 'mango', 'orange', 'apple', 'pineapple', 'pineapple', 'peach', 'mango', 'apple'];
  const result = countFrequency(fruits,'apple')
  console.log(result) //=> 3
 */

export default countFrequency;
