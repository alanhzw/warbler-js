/*
 * @Author: 一尾流莺
 * @Description:操作字符串相关的方法
 * @Date: 2021-09-10 11:15:49
 * @LastEditTime: 2021-10-13 11:44:52
 * @FilePath: \warblerJS\src\string\index.js
 */

// 反转字符串
import reverseString from './other/reverseString';

// 将字符串的首字母转换成大写字母
import toUpperFirstLetter from './exchange/toUpperFirstLetter';

// 将字符串的首字母转换成大写字母
import toLowerFirstLetter from './exchange/toLowerFirstLetter';

// 将字符串中每个单词的首字母转为大写
import capitalizeWord from './exchange/capitalizeWord';

// 将字符串按字母顺序排列
import alphabetical from './sort/alphabetical';

export {
  reverseString,
  toUpperFirstLetter,
  toLowerFirstLetter,
  capitalizeWord,
  alphabetical,
};
