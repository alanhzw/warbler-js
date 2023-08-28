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
