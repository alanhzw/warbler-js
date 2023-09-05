/**
 * @description:在数组中根据对象的键查找目标对象
 * @param { Array } arr 待查询的目标数组
 * @param { String } key 查询对象的键
 * @param { String | Number } value 查询对象的值
 * @return { obj } 查找到的结果
 */
const findObjectInArray = (arr, key, value) => arr.filter((obj) => obj[key] === value);

/** 用法

  const fruits = [
    {name: 'Bananas', quantity: 5},
    {name: 'Apples', quantity: 10},
    {name: 'Grapes', quantity: 2}
  ];
  const result = findObjectInArray(fruits,'name','Apples');
  console.log(result)

// 输出以下内容

[
  {
    name: 'Apples',
    quantity: 10,
  },
  {
    name: 'Apples',
    quantity: 4,
  },
];

 */

export default findObjectInArray;
