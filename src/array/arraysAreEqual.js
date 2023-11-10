/**
 * @description: 判断两个数组是否含有相同的元素, 元素的位置,数量,可以不一致
 * @param { Array } arr1 数组一
 * @param { Array } arr2 数组二
 * @param { Boolean } removeDuplicates 是否去重
 * @return { Boolean } 两个数组是否含有相同的元素
 */
const arraysAreEqual = (arr1, arr2, removeDuplicates = false) => {
  const array1 = removeDuplicates ? [...new Set(arr1)] : arr1;
  const array2 = removeDuplicates ? [...new Set(arr2)] : arr2;
  const generateElementCountMap = (array) => {
    const map = new Map();
    for (const element of array) {
      map.set(element, (map.get(element) || 0) + 1);
    }
    return map;
  };
  const map1 = generateElementCountMap(array1);
  const map2 = generateElementCountMap(array2);
  for (const [key, value] of map1.entries()) {
    if (map2.get(key) !== value) {
      return false;
    }
  }
  return true;
};

/** 用法
const arr1 = [1, 2, 4, 5, 8, 1];
const arr2 = [2, 8, 5, 4, 1];
const result = arraysAreEqual(arr1, arr2, true);
console.log(result); //= > true
 */
export default arraysAreEqual;
