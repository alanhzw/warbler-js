/*
 * @Author: 一尾流莺
 * @Description:正则相关的方法
 * @Date: 2021-09-10 11:15:44
 * @LastEditTime: 2021-10-13 18:24:09
 * @FilePath: \warblerJS\src\reg\index.js
 */
// ```````````````````````````````````````````数字类`````````````````````````````````````````````````
import integerReg from './number/integerReg';
import noZeroIntegerReg from './number/noZeroIntegerReg';
import zeroPositiveIntegerReg from './number/zeroPositiveIntegerReg';
import positiveIntegerReg from './number/positiveIntegerReg';
import zeroNegativeIntegerReg from './number/zeroNegativeIntegerReg';
import negativeIntegerReg from './number/negativeIntegerReg';
import currencyReg from './number/currencyReg';
import moneyReg from './number/moneyReg';
import numberReg from './number/numberReg';

// ```````````````````````````````````````````号码类`````````````````````````````````````````````````
import easyTelReg from './phone/easyTelReg';
import complexTelReg from './phone/complexTelReg';
import strictTelReg from './phone/strictTelReg';
import bankReg from './phone/bankReg';
import carsReg from './phone/carsReg';
import newCarsReg from './phone/newCarsReg';
import allCarsReg from './phone/allCarsReg';
import landlineReg from './phone/landlineReg';
import idFirstReg from './phone/idFirstReg';
import idSecondReg from './phone/idSecondReg';
import idReg from './phone/idReg';
import idHongKongReg from './phone/idHongKongReg';
import idMacaoReg from './phone/idMacaoReg';
import idTaiwanReg from './phone/idTaiwanReg';
import passportReg from './phone/passportReg';
import qqReg from './phone/qqReg';
import wechatReg from './phone/wechatReg';
import trainReg from './phone/trainReg';
import imeiReg from './phone/imeiReg';
import codsReg from './phone/codsReg';
import strictCodsReg from './phone/strictCodsReg';

// ```````````````````````````````````````````表单类`````````````````````````````````````````````````
import chineseNameReg from './form/chineseNameReg';
import englishNameReg from './form/englishNameReg';
import emailReg from './form/emailReg';
import accountReg from './form/accountReg';
import chineseReg from './form/chineseReg';
import englishReg from './form/englishReg';
import lowercaseReg from './form/lowercaseReg';
import uppercaseReg from './form/uppercaseReg';
import nlReg from './form/nlReg';
import passwordReg from './form/passwordReg';
import usernameReg from './form/usernameReg';
import postalReg from './form/postalReg';
import ncReg from './form/ncReg';
import noLetterReg from './form/noLetterReg';
import nlBothReg from './form/nlBothReg';
import achievementReg from './form/achievementReg';

// ```````````````````````````````````````````网络类`````````````````````````````````````````````````
import urlReg from './web/urlReg';
import urlWithPortReg from './web/urlWithPortReg';
import subnetReg from './web/subnetReg';
import uuidReg from './web/uuidReg';
import editionReg from './web/editionReg';
import videoUrlReg from './web/videoUrlReg';
import imgUrlReg from './web/imgUrlReg';
import dateHmsReg from './web/dateHmsReg';
import hmsReg from './web/hmsReg';
import baseReg from './web/baseReg';
import macReg from './web/macReg';
import colorReg from './web/colorReg';
import ipv4Reg from './web/ipv4Reg';
import ymdReg from './web/ymdReg';
import ymdhmsReg from './web/ymdhmsReg';

export {
  integerReg,
  noZeroIntegerReg,
  zeroPositiveIntegerReg,
  positiveIntegerReg,
  zeroNegativeIntegerReg,
  negativeIntegerReg,
  currencyReg,
  moneyReg,
  numberReg,
  easyTelReg,
  complexTelReg,
  strictTelReg,
  bankReg,
  carsReg,
  newCarsReg,
  allCarsReg,
  landlineReg,
  idFirstReg,
  idSecondReg,
  idReg,
  idHongKongReg,
  idMacaoReg,
  idTaiwanReg,
  passportReg,
  qqReg,
  wechatReg,
  trainReg,
  imeiReg,
  codsReg,
  strictCodsReg,
  chineseNameReg,
  englishNameReg,
  emailReg,
  accountReg,
  chineseReg,
  englishReg,
  lowercaseReg,
  uppercaseReg,
  nlReg,
  passwordReg,
  usernameReg,
  postalReg,
  ncReg,
  noLetterReg,
  nlBothReg,
  achievementReg,
  urlReg,
  urlWithPortReg,
  subnetReg,
  uuidReg,
  editionReg,
  videoUrlReg,
  imgUrlReg,
  dateHmsReg,
  hmsReg,
  baseReg,
  macReg,
  colorReg,
  ipv4Reg,
  ymdReg,
  ymdhmsReg,
};
