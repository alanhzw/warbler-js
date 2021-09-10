/*
 * @Author: 一尾流莺
 * @Description:在数组中根据对象的键查找目标对象
 * @Date: 2021-09-10 11:15:33
 * @LastEditTime: 2021-09-10 14:45:49
 * @FilePath: \warblerJS\src\array\findObjectInArray.js
 */

/**
 * @description:在数组中根据对象的键查找目标对象
 * @param { Array } arr 待查询的目标数组
 * @param { String } key 查询对象的键
 * @param { String } value 查询对象的值
 * @return { obj } 查找到的结果
 */
const findObjectInArray = (arr, key, value) => arr.find((obj) => obj[key] === value);

export default findObjectInArray;
