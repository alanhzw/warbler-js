/**
 * @description: 判断两个数组是否全等, 元素的位置必须一致
 * @param { Array } arr1 数组一
 * @param { Array } arr2 数组二
 * @return { Boolean } 两个数组是否全等
 */
const arraysAreCongruent = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((item, index) => item === arr2[index]);
};

/** 用法
const arr1 = [1, 2, 3, 5, 8];
const arr2 = [1, 2, 3, 5, 8];
const result = arraysAreCongruent(arr1, arr2);
console.log(result); //= > true
 */

export default arraysAreCongruent;
