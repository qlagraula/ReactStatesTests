// @ts-check
/* eslint-disable unicorn/prefer-module */
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  rules: {
    curly: 'off',
    'react/jsx-pascal-case': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-no-leaked-render': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'warn',
    'react/no-array-index-key': 'warn',
    'react/self-closing-comp': 'error',
    'react/forbid-prop-types': ['off'],
    'react/jsx-props-no-spreading': 'warn',
    'react/jsx-closing-bracket-location': 'error',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
  overrides: [
    {
      // Set up ESLint for .ts and .tsx files
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['react', 'react-hooks', 'jsx-a11y'],
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      parser: '@typescript-eslint/parser',
      rules: {
        curly: 'off',
        'react/jsx-pascal-case': 'error',
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-no-leaked-render': 'error',
        'react/no-unused-prop-types': 'error',
        'react/no-unused-state': 'warn',
        'react/no-array-index-key': 'warn',
        'react/self-closing-comp': 'error',
        'react/forbid-prop-types': ['off'],
        'react/jsx-props-no-spreading': 'warn',
        'react/jsx-closing-bracket-location': 'error',
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
      },
    },
  ],
});
