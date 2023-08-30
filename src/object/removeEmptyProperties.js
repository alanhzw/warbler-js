/* eslint-disable operator-linebreak */
/**
 * @description: 去除对象中的空属性，null，undefined
 * @param { Object } obj 目标对象
 * @param { Object } options 配置对象
 * @return { Object } 去除空属性后的对象
 */
const removeEmptyProperties = (obj, options = {}) => {
  const { deep = true, removeEmpty = true, removeNull = true, removeUndefined = true } = options;
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object' && obj[key] !== null && deep) {
      newObj[key] = removeEmptyProperties(obj[key], options);
    } else if (
      (!removeNull || obj[key] !== null) &&
      (!removeUndefined || obj[key] !== undefined) &&
      (!removeEmpty || obj[key] !== '')
    ) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};

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
    size: null,
    weight: undefined,
  },
};

console.log(removeEmptyProperties(obj));
console.log(removeEmptyProperties(obj, { deep: false }));
console.log(removeEmptyProperties(obj, { removeEmpty: false }));
console.log(removeEmptyProperties(obj, { removeNull: false }));
console.log(removeEmptyProperties(obj, { removeUndefined: false }));

 */

export default removeEmptyProperties;
