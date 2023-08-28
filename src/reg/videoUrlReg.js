/**
 * @description: 视频(video)链接地址（视频格式可按需增删）
 * @param { String } value 待验证字符串
 * @return { Boolean } 是否通过验证
 */
const videoUrlReg = (value) => {
  const reg = /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i;
  return reg.test(value);
};

// if (Object.prototype.toString.call(value) !== '[object String]') {
//   throw new Error('只能检测字符串类型');
// }

/** 用法
  const result1 = videoUrlReg('http://www.warblerfe.top/wc.mp4')
  const result2 = videoUrlReg('https://www.warblerfe.top/wc.mp4')
  const result3 = videoUrlReg('www.warblerfe.top/wc.mp4')
  console.log(result1) // true
  console.log(result2) // true
  console.log(result3) // false

 */
export default videoUrlReg;
