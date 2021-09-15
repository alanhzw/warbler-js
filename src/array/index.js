/*
 * @Author: 一尾流莺
 * @Description:操作数组相关的方法
 * @Date: 2021-09-10 11:15:33
 * @LastEditTime: 2021-09-10 18:09:57
 * @FilePath: \warblerJS\src\array\index.js
 */

// 在数组中根据对象的键查找目标对象
import findObjectInArray from './findObjectInArray';

// 删除数组中的重复项
import arrWithoutDupli from './arrWithoutDupli';

// 数组对象去重
import arrObjectWithoutDupli from './arrObjectWithoutDupli';

// 计算数组中元素的出现次数
import countFrequency from './countFrequency';

// 计算对象数组中某个属性值的出现次数
import countObjFrequency from './countObjFrequency';

export {
  findObjectInArray,
  arrWithoutDupli,
  arrObjectWithoutDupli,
  countFrequency,
  countObjFrequency,
};
