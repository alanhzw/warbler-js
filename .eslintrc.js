/*
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2021-09-10 14:42:22
 * @LastEditTime: 2021-09-10 14:47:03
 * @FilePath: \warblerJS\.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
  },
};
