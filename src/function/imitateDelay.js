/*
 * @Author: 一尾流莺
 * @Description:模拟延迟
 * @Date: 2021-09-10 14:58:17
 * @LastEditTime: 2021-09-10 17:15:01
 * @FilePath: \warblerJS\src\function\imitateDelay.js
 */

/**
 * @description: 模拟延迟
 * @param { Number } timeout 延迟的时间(ms)
 * @return { Promise }
 */
const imitateDelay = (timeout) => new Promise(
  (resolve) => {
    const timeoutHandle = setTimeout(() => {
      clearTimeout(timeoutHandle);
      resolve();
    }, timeout);
  },
);

/** 用法

async function(){
   console.log('The first log');
   await delay(1000);
   console.log('The second log with 1000 ms delay')
}

 */

export default imitateDelay;
