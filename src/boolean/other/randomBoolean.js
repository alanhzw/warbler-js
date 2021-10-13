/*
 * @Author: 一尾流莺
 * @Description:获得一个随机的布尔值（true/false）
 * @Date: 2021-09-10 14:52:58
 * @LastEditTime: 2021-09-10 17:10:41
 * @FilePath: \warblerJS\src\boolean\randomBoolean.js
 */

/**
 * @description: 获得一个随机的布尔值（true/false）
 * @param { null } null
 * @return { Boolean } 一个随机的布尔值
 */
const randomBoolean = () => Math.random() >= 0.5;

/** 用法

  const result = randomBoolean()
  console.log( result ) // true

 */

export default randomBoolean;
