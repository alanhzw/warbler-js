/**
 * @description: 判断变量的类型
 * @param { unknown } param 要判断类型的变量
 * @param { String } type 要判断的类型
 * @return { Boolean } 变量是否为指定的类型
 */
const isType = (param, type) => Object.prototype.toString.call(param).split(' ')[1].replace(']', '') === type;

/** 用法
let a
const b = null
const c = 100
const d = 'warbler'
const e = true
const f = Symbol('f')
const reg = /^[a-zA-Z]{5,20}$/
const foo = () => { }
const arr = []
const obj = {}
const date = new Date();
const error = new Error();
const args = (function() {
  return arguments;
})()
console.log(isType(a,'Undefined')) //=> true
console.log(isType(b,'Null')) //=> true
console.log(isType(c,'Number')) //=> true
console.log(isType(d,'String')) //=> true
console.log(isType(e,'Boolean')) //=> true
console.log(isType(f,'Symbol')) //=> true
console.log(isType(reg,'RegExp')) //=> true
console.log(isType(foo,'Function')) //=> true
console.log(isType(arr,'Array')) //=> true
console.log(isType(obj,'Object')) //=> true
console.log(isType(date,'Date')) //=> true
console.log(isType(error,'Error')) //=> true
console.log(isType(args,'Arguments')) //=> true

 */

export default isType;
