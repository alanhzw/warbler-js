/**
 * @description: 根据元素值移除数组的元素
 * @param { Array } 需要删除元素的数组
 * @param { Number | String } el 将要删除的元素
 * @return { Array } 删除元素后的数组
 */
const arrRemoveEle = (arr, el) => arr.filter((i) => i !== el);

/** 用法
const ages = [1,2,3,4,5,6,7,8]
const names = ['张三','李四','王二麻子','一尾流莺']
const result1 = arrRemoveEle(ages,3)
const result2 = arrRemoveEle(names,'一尾流莺')
console.log(result1) //=> [1,2,4,5,6,7,8]
console.log(result2) //=> ['张三', '李四', '王二麻子']
 */
export default arrRemoveEle;
