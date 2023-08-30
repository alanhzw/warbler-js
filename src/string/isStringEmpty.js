/**
 * @description: 判断一个字符串是否为空
 * @param { String } str 目标字符串
 * @param { Boolean } strict 是否开启严格模式，在严格模式下，只能传入字符串类型的参数，否则会报错
 * @return { Boolean } true,是空字符串 false,不是空字符串
 */
const isStringEmpty = (str, strict = false) => {
  const isString = Object.prototype.toString.call(str).split(' ')[1].replace(']', '') === 'String';
  if (strict && !isString) {
    throw new Error('isStringEmpty 方法需要传入字符串类型的参数');
  }
  return !str || str.trim().length === 0;
};

/** 用法

默认情况下

console.log(isStringEmpty('')); //= > true
console.log(isStringEmpty('Hello')); //= > false
console.log(isStringEmpty('  ')); //= > true
console.log(isStringEmpty(0)); //= > true
console.log(isStringEmpty('0')); //= > false
console.log(isStringEmpty(null)); //= > true
console.log(isStringEmpty(undefined)); //= > true

严格模式下

console.log(isStringEmpty('', true)); //= > true
console.log(isStringEmpty('Hello', true)); //= > false
console.log(isStringEmpty('  ', true)); //= > true
console.log(isStringEmpty(0, true)); //= > 报错
console.log(isStringEmpty('0', true)); //= > false
console.log(isStringEmpty(null, true)); //= > 报错
console.log(isStringEmpty(undefined, true)); //= > 报错

 */

export default isStringEmpty;
