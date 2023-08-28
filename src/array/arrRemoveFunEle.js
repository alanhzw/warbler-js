/**
 * @description: 根据函数名称移除函数数组的元素
 * @param { Array } 需要删除元素的数组
 * @param { String } name 将要删除的函数名称
 * @return { Array } 删除元素后的数组
 */
const arrRemoveFunEle = (arr, name) => arr.filter((i) => i.name !== name);

/** 用法
const fn1 = ()=>1;
const fn2 = ()=>2;
const fn3 = ()=>3;
const fn4 = ()=>4;
const funs = [fn1,fn2,fn3,fn4]
const result = arrRemoveFunEle(funs,'fn1')
console.log(result) //=> [fn2,fn3,fn4]
 */
export default arrRemoveFunEle;
