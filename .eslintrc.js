module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // 首选默认导出
    'import/prefer-default-export': 'off',
    // 使用一致的换行符风格
    'linebreak-style': 'off',
    // 代码最大行数
    'max-len': 'off',
    // 禁用不必要的转义符
    'no-useless-escape': 'off',
    'object-curly-newline': 0,
  },
};
