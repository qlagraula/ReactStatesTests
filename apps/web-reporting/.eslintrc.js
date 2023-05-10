// @ts-check
/* eslint-disable unicorn/prefer-module */

module.exports = {
  extends: ['../../tools/.eslintrc.base.js', '../../tools/.eslintrc.react.js'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './apps/web-reporting/tsconfig.json',
  },
};
