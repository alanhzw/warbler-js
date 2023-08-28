/**
 * @description: 获取数组中指定个数的最小元素
 * @param { Array } arr 需要获取最小元素的数组
 * @param { Number } n 需要获取最小元素的数量
 * @return { Array } 指定数量的最小元素组成的数组
 */
const minArray = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

/**
const ages = [10, 2, 5, 8, 100, 500, 3, 30, 9];
const result1 = minArray(ages)
const result2 = minArray(ages,3)
console.log(result1) //=> [2]
console.log(result2) //=> [2, 3, 5]
 */

export default minArray;
