/**
 * @description: 检测所有元素是否符合要求
 * @param { Array } arr 需要检测的数组。
 * @param { Function } fn 验证条件。
 * @return { Boolean } true 所有元素都通过检测  false 存在元素没有通过检测
 */
const isAllPass = (arr, fn) => arr.every(fn);

/**  用法
const money = [30, 24, 28, 32];
const result1 = isAllPass(money, (item) => item < 40);
const result2 = isAllPass(money, (item) => item > 30);
console.log(result1); //=> true
console.log(result2); //=> false
 */

export default isAllPass;
