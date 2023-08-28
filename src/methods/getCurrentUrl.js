/**
 * @description:获取当前页面的URL
 * @param {*} null
 * @return { String } 当前页面的URL
 */
const getCurrentUrl = () => window.location.href;

/** 用法
const result = getCurrentUrl()
console.log(result) //=>http://www.warblerfe.top
 */

export default getCurrentUrl;
