/**
 * @description: 获取数组中指定个数的最大元素
 * @param { Array } arr 需要获取最大元素的数组
 * @param { Number } n 需要获取最大元素的数量
 * @return { Array } 指定数量的最大元素组成的数组
 */
const maxArray = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

/**
const ages = [10, 2, 5, 8, 100, 500, 3, 30, 9];
const result1 = maxArray(ages)
const result2 = maxArray(ages,3)
console.log(result1) //=> [500]
console.log(result2) //=> [500, 100, 30]
 */

export default maxArray;
