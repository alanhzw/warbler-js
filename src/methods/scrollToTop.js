/*
 * @Author: 一尾流莺
 * @Description:滚动到页面顶部
 * @Date: 2021-09-17 16:59:15
 * @LastEditTime: 2021-09-17 17:01:04
 * @FilePath: \warblerJS\src\methods\scrollToTop.js
 */

/**
 * @description:滚动到页面顶部
 * @param { null }
 * @return { void }
 */
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

/** 用法
scrollToTop()
 */

export default scrollToTop;
