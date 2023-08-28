/*
 * @Author: 一尾流莺
 * @Description:将字符串中每个单词的首字母转为大写
 * @Date: 2021-09-16 17:08:25
 * @LastEditTime: 2021-09-16 17:12:08
 * @FilePath: \warblerJS\src\string\capitalizeWord.js
 */

/**
 * @description: 将字符串中每个单词的首字母转为大写
 * @param { String } str 目标字符串
 * @return { String } 每个单词的首字母转为大写后的字符串
 */
const capitalizeWord = (string) => string.replace(/\b[a-z]/g, (letter) => letter.toUpperCase());

/** 用法

  const initStr = 'hello world , my name is warbler !'
  const finallyStr = capitalizeWord(initStr)
  console.log(finallyStr) //=> Hello World , My Name Is Warbler !

 */

export default capitalizeWord;
