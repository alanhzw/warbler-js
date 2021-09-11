/*
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2021-09-10 18:11:24
 * @LastEditTime: 2021-09-10 18:12:05
 * @FilePath: \warblerJS\src\index2.js
 */
import { arrObjectWithoutDupli } from './index';

const inventory = [
  { name: 'Grapes', quantity: 2 },
  { name: 'Bananas', quantity: 5 },
  { name: 'Apples', quantity: 10 },
  { name: 'Grapes', quantity: 4 },
  { name: 'Grapes', quantity: 6 },
];

const result = arrObjectWithoutDupli(inventory, 'name');

console.log('🚀🚀~result :', result);
