/**
 * @description: 考卷分数(150分制)
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const achievementReg = (value) => {
  const reg = /^150$|^(?:\d|[1-9]\d|1[0-4]\d)(?:\.5)?$/;
  return reg.test(value);
};

/** 用法

  const result1 = achievementReg('0')
  const result2 = achievementReg('140')
  const result3 = achievementReg('145.5')
  const result4 = achievementReg('151')

  console.log(result1) // true
  console.log(result2) // true
  console.log(result3) // true
  console.log(result4) // false

 */
export default achievementReg;
