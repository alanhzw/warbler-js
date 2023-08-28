/**
 * @description:数组对象去重
 * @param { Array } arr 目标去重的数组
 * @param { String } key 根据对象的key去重
 * @return { Array } 数组去重后的结果
 */
const arrObjectWithoutDupli = (arr, key) => {
  const obj = {};
  return arr.reduce((cur, next) => {
    if (!obj[next[key]]) {
      obj[next[key]] = cur.push(next);
    }
    return cur;
  }, []);
};

/** 用法

  const fruits = [
    {name: 'Grapes', quantity: 2},
    {name: 'Bananas', quantity: 5},
    {name: 'Apples', quantity: 10},
    {name: 'Grapes', quantity: 4},
    {name: 'Grapes', quantity: 6},
  ];
  const result = arrObjectWithoutDupli(fruits,'name');
  console.log(result) // [
    {name: 'Grapes', quantity: 2},
    {name: 'Bananas', quantity: 5},
    {name: 'Apples', quantity: 10},
  ];

 */

export default arrObjectWithoutDupli;
