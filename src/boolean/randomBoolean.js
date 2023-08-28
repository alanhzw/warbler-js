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
