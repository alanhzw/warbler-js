/*
 * @Author: 一尾流莺
 * @Description:获取浏览器Cookie的值
 * @Date: 2021-10-08 11:31:11
 * @LastEditTime: 2023-04-14 16:23:22
 * @FilePath: \warbler-js\src\methods\other\getCookieBy.js
 */

/**
 * @description:获取浏览器Cookie的值
 * @param { String } 要获取的Cookie的属性名
 * @return { String } 要获取的Cookie的属性值
 */
const getCookieBy = (name) => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();

/** 用法
const result = getCookieBy('name')
console.log(result) //=>'warbler'
 */

export default getCookieBy;