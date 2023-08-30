/**
 * @description:统计数组中重复元素的位置
 * @param { Array } arr 目标数组
 * @return { Object } 数组中的元素及其重复的位置
 */
const countDuplicatePositions = (arr) => {
  const result = {};
  arr.forEach((item, index) => {
    if (result[item]) {
      result[item].push(index);
    } else {
      result[item] = [index];
    }
  });
  return result;
};

/** 用法

const arr = [1, 2, 3, 2, 4, 1, 2];
console.log(countDuplicatePositions(arr));

// 输出以下内容

{
  "1": [
      0,
      5
  ],
  "2": [
      1,
      3,
      6
  ],
  "3": [
      2
  ],
  "4": [
      4
  ]
}

 */

export default countDuplicatePositions;
