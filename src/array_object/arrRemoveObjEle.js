/**
 * @description: 根据对象数组的属性值移除数组的元素
 * @param { Array } 需要删除元素的数组
 * @param { String } key 将要删除的元素属性
 * @param { Number | String } value 将要删除的元素属性值
 * @return { Array } 删除元素后的数组
 */
const arrRemoveObjEle = (arr, key, value) => arr.filter((i) => i[key] !== value);

/** 用法
const fruits = [
  {name: 'Grapes', quantity: 2},
  {name: 'Bananas', quantity: 5},
  {name: 'Apples', quantity: 10},
  {name: 'Grapes', quantity: 4},
  {name: 'Grapes', quantity: 6},
];
const result = arrRemoveObjEle(fruits,'name','Apples')
  console.log(result) //=> [
  {name: 'Grapes', quantity: 2},
  {name: 'Bananas', quantity: 5},
  {name: 'Grapes', quantity: 4},
  {name: 'Grapes', quantity: 6},
  ];
 */
export default arrRemoveObjEle;
