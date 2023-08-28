/**
 * @description: 计算数组元素的总和
 * @param { Array } arr 需要计算总和的数组
 * @return { Number } 所有元素的总和
 */
const getTotal = (arr) => arr.reduce((pre, cur) => pre + cur, 0);

/**
 const ages = [1,3,5,7,8]
 const result = getTotal(ages)
 console.log(result) //=> 24
 */

export default getTotal;
