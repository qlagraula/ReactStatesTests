// @ts-check
/* eslint-disable unicorn/prefer-module */

module.exports = {
  extends: ['../../tools/.eslintrc.base.js'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './apps/server/tsconfig.json',
  },
};
