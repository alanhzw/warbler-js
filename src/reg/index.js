/*
 * @Author: 一尾流莺
 * @Description:正则相关的方法
 * @Date: 2021-09-10 11:15:44
 * @LastEditTime: 2021-10-13 10:46:14
 * @FilePath: \warblerJS\src\reg\index.js
 */

// 中国手机号(简单), 只要是 1 开头即可
import easyTelReg from './phone/easyTelReg';

// 中国手机号(复杂), 中国手机号(复杂), 只要是13,14,15,16,17,18,19开头即可
import strictTelReg from './phone/strictTelReg';

// 中国手机号(严格), 根据工信部2019年最新公布的手机号段
import complexTelReg from './phone/complexTelReg';

// 整数(包含0)
import integerReg from './number/integerReg';
// 整数(不包含0)
import noZeroIntegerReg from './number/noZeroIntegerReg';
// 正整数(包含0)
import zeroPositiveIntegerReg from './number/zeroPositiveIntegerReg';
// 正整数(不包含0)
import positiveIntegerReg from './number/positiveIntegerReg';
// 负整数(包含0)
import zeroNegativeIntegerReg from './number/zeroNegativeIntegerReg';
// 负整数(不包含0)
import negativeIntegerReg from './number/negativeIntegerReg';

export {
  easyTelReg,
  strictTelReg,
  complexTelReg,
  integerReg,
  noZeroIntegerReg,
  zeroPositiveIntegerReg,
  positiveIntegerReg,
  zeroNegativeIntegerReg,
  negativeIntegerReg,
};
