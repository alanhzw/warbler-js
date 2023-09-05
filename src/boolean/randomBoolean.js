/**
 * @description: 获得一个随机的布尔值（true/false）
 * @param { Number } probability 随机的概率
 * @return { Boolean } 一个随机的布尔值
 */
const randomBoolean = (probability = 0.5) => Math.random() >= probability;

/** 用法

  const result = randomBoolean()
  console.log( result ) // true

 */

export default randomBoolean;
