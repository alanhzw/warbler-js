/**
 * @description: 去除对象中的空属性，null，undefined
 * @param { Object } obj 目标对象
 * @return { Object } 去除空属性后的对象
 */
function removeEmptyProperties(obj) {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      newObj[key] = removeEmptyProperties(obj[key]);
    } else if (obj[key] !== null && obj[key] !== undefined && obj[key] !== '') {
      newObj[key] = obj[key];
    }
  });
  return newObj;
}

/** 用法

const obj = {
  name: 'warbler',
  age: null,
  homepage: 'http://www.warblerfe.top',
  address: undefined,
  phone: '',
  car: {
    color: 'red',
    price: '',
  },
};

console.log(removeEmptyProperties(obj));

输出
{
  name: 'warbler',
  homepage: 'http://www.warblerfe.top',
  car: {
    color: 'red',
  },
};

 */

export default removeEmptyProperties;
