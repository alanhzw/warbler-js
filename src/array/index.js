/*
 * @Author: 一尾流莺
 * @Description:操作数组相关的方法
 * @Date: 2021-09-10 11:15:33
 * @LastEditTime: 2021-10-29 11:11:59
 * @FilePath: \warblerJS\src\array\index.js
 */

// 在数组中根据对象的键查找目标对象
import findObjectInArray from './find/findObjectInArray';

// 删除数组中的重复项
import arrWithoutDupli from './duplicate/arrWithoutDupli';

// 数组对象去重
import arrObjectWithoutDupli from './duplicate/arrObjectWithoutDupli';

// 计算数组中元素的出现次数
import countFrequency from './calculation/countFrequency';

// 计算对象数组中某个属性值的出现次数
import countObjFrequency from './calculation/countObjFrequency';

// 过滤数组中的唯一值
import filterUnique from './filter/filterUnique';

// 过滤数组中的非唯一值
import filterNoUnique from './filter/filterNoUnique';

// 计算对象数组指定健的平均值
import getAverageBy from './calculation/getAverageBy';

// 检测所有元素是否符合要求
import isAllPass from './test/isAllPass';

// 获取数组中指定个数的最小元素
import minArray from './find/minArray';

// 获取数组中指定个数的最大元素
import maxArray from './find/maxArray';

// 计算数组元素的总和
import getTotal from './calculation/getTotal';

// 计算对象数组某个属性值的总和
import getTotalBy from './calculation/getTotalBy';

// 获取两个数组之间不同的元素
import arrDifference from './find/arrDifference';

// 获取两个数组之间相同的元素
import arrSimilarity from './find/arrSimilarity';

// 获取数组二相对于数组一不同的元素
import getDifferenceFrom from './find/getDifferenceFrom';

// 随机化数组元素的顺序
import shuffleArr from './other/shuffleArr';

// 根据元素值移除数组的元素
import arrRemoveEle from './remove/arrRemoveEle';

// 根据函数名称移除函数数组的元素
import arrRemoveFunEle from './remove/arrRemoveFunEle';

// 根据对象数组的属性值移除数组的元素
import arrRemoveObjEle from './remove/arrRemoveObjEle';

export {
  arrRemoveObjEle,
  arrRemoveFunEle,
  arrRemoveEle,
  findObjectInArray,
  arrWithoutDupli,
  arrObjectWithoutDupli,
  countFrequency,
  countObjFrequency,
  filterUnique,
  filterNoUnique,
  getAverageBy,
  isAllPass,
  minArray,
  maxArray,
  getTotal,
  getTotalBy,
  arrDifference,
  arrSimilarity,
  getDifferenceFrom,
  shuffleArr,
};
