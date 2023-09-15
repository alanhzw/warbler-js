/**
 * @description: 获取变量的类型
 * @param { unknown } param 要获取类型的变量
 * @return { String } 一个用来表示类型的字符串
 */
const getType = (param) => Object.prototype.toString.call(param).split(' ')[1].replace(']', '');

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

console.log(getType(a)); //= > Undefined
console.log(getType(b)); //= > Null
console.log(getType(c)); //= > Number
console.log(getType(d)); //= > String
console.log(getType(e)); //= > Boolean
console.log(getType(f)); //= > Symbol
console.log(getType(reg)); //= > RegExp
console.log(getType(foo)); //= > Function
console.log(getType(arr)); //= > Array
console.log(getType(obj)); //= > Object
console.log(getType(date)); //= > Date
console.log(getType(error)); //= > Error
console.log(getType(args)); //= > Arguments

 */

export default getType;
