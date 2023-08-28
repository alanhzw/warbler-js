/**
 * @description:异步加载script脚本
 * @param { String } src 需要加载的脚本地址
 * @return { Promise } Promise
 */
const loadScript = (src) => new Promise((resolve) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.onload = () => {
    resolve();
  };
  script.src = src;
  document.body.appendChild(script);
});

/** 用法
const loadVConsole = async () => {
  await loadScript('https://cdn.bootcdn.net/ajax/libs/vConsole/3.7.0/vconsole.min.js');
};
loadVConsole()
 */

export default loadScript;
