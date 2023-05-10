// @ts-check
/* eslint-disable unicorn/prefer-module */
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: ['@react-native-community'],
  plugins: ['react-native'],
  rules: {
    curly: 'off',
    'prettier/prettier': 'off',
    'react-native/no-unused-styles': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'error',
    'no-restricted-imports': [
      'error',
      {
        name: 'react-use',
        message:
          "Please import the specific function from react-use instead of the whole library (e.g. import useTimeout from 'react-use/lib/useTimeout')",
      },
    ],
  },
  overrides: [
    {
      // Set up ESLint for .ts and .tsx files
      files: ['**/*.{ts,tsx}'],
      extends: ['@react-native-community'],
      plugins: ['react-native'],
      parser: '@typescript-eslint/parser',
      rules: {
        curly: 'off',
        'prettier/prettier': 'off',
        'react-native/no-unused-styles': 'error',
        'react-native/no-inline-styles': 'error',
        'react-native/no-color-literals': 'error',
        'no-restricted-imports': [
          'error',
          {
            name: 'react-use',
            message:
              "Please import the specific function from react-use instead of the whole library (e.g. import useTimeout from 'react-use/lib/useTimeout')",
          },
        ],
      },
    },
  ],
});
