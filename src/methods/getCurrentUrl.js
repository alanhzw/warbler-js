/*
 * @Author: 一尾流莺
 * @Description:获取当前页面的URL
 * @Date: 2021-09-17 15:52:02
 * @LastEditTime: 2021-09-17 15:59:02
 * @FilePath: \warblerJS\src\methods\getCurrentUrl.js
 */

/**
 * @description:获取当前页面的URL
 * @param {*} null
 * @return {*} 当前页面的URL
 */
const getCurrentUrl = () => window.location.href;

/** 用法
const result = getCurrentUrl()
console.log(result) //=>http://warblerjs.duwanyu.com
 */

export default getCurrentUrl;
