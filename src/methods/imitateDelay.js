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
