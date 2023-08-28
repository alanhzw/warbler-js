/*
 * @Author: 一尾流莺
 * @Description: 操作数组
 * @Date: 2021-09-10 11:15:33
 * @LastEditTime: 2023-08-28 14:55:06
 * @FilePath: \warbler-js\src\array\index.js
 */

// 计算数组中元素的出现次数
import countFrequency from './countFrequency';

// 计算对象数组中某个属性值的出现次数
import countObjFrequency from './countObjFrequency';

// 计算数组元素的总和
import getTotal from './getTotal';

// 计算对象数组某个属性值的总和
import getTotalBy from './getTotalBy';

// 计算对象数组指定健的平均值
import getAverageBy from './getAverageBy';

// 检测所有元素是否符合要求
import isAllPass from './isAllPass';

// 删除数组中的重复项
import arrWithoutDupli from './arrWithoutDupli';

// 数组对象去重
import arrObjectWithoutDupli from './arrObjectWithoutDupli';

// 过滤数组中的唯一值
import filterUnique from './filterUnique';

// 过滤数组中的非唯一值
import filterNoUnique from './filterNoUnique';

// 获取数组中指定个数的最小元素
import minArray from './minArray';

// 获取数组中指定个数的最大元素
import maxArray from './maxArray';

// 在数组中根据对象的键查找目标对象
import findObjectInArray from './findObjectInArray';

// 获取两个数组之间不同的元素
import arrDifference from './arrDifference';

// 获取两个数组之间相同的元素
import arrSimilarity from './arrSimilarity';

// 获取数组二相对于数组一不同的元素
import getDifferenceFrom from './getDifferenceFrom';

// 根据元素值移除数组的元素
import arrRemoveEle from './arrRemoveEle';

// 根据函数名称移除函数数组的元素
import arrRemoveFunEle from './arrRemoveFunEle';

// 根据对象数组的属性值移除数组的元素
import arrRemoveObjEle from './arrRemoveObjEle';

// 随机化数组元素的顺序
import shuffleArr from './shuffleArr';

export {
  filterUnique,
  filterNoUnique,
  isAllPass,
  countFrequency,
  countObjFrequency,
  getTotal,
  getTotalBy,
  getAverageBy,
  arrWithoutDupli,
  arrObjectWithoutDupli,
  arrRemoveEle,
  arrRemoveFunEle,
  arrRemoveObjEle,
  minArray,
  maxArray,
  findObjectInArray,
  arrDifference,
  arrSimilarity,
  getDifferenceFrom,
  shuffleArr,
};
