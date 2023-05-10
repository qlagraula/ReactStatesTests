// @ts-check
/* eslint-disable unicorn/prefer-module */
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
  ],
  env: { es6: true, node: true, browser: true, commonjs: true },
  plugins: ['import', 'promise', 'unicorn', 'file-progress', 'prettier'],
  rules: {
    'file-progress/activate': 'error',
    curly: 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-switch': ['error', { emptyDefaultCase: 'no-default-case' }],
    'unicorn/no-nested-ternary': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-object-as-default-parameter': 'off',
    'unicorn/no-array-method-this-argument': 'off',
    'unicorn/prefer-number-properties': 'off',
    'unicorn/new-for-builtins': 'off',
    'unicorn/prefer-set-has': 'off', // TODO: re-enable, disabled because of auto-fix
    'unicorn/prevent-abbreviations': [
      'warn',
      {
        allowList: {
          props: true,
          acc: true,
        },
        replacements: {
          args: false,
          arg: false,
          props: false,
          doc: false,
          ref: false,
        },
      },
    ],
    'unicorn/catch-error-name': 'warn',
    'unicorn/consistent-function-scoping': [
      'error',
      { checkArrowFunctions: false },
    ],
    'unicorn/explicit-length-check': 'error',
    'unicorn/prefer-array-some': 'warn',
    'unicorn/prefer-string-slice': 'warn',
    'unicorn/prefer-spread': 'off',
    'unicorn/consistent-destructuring': 'warn',
    'unicorn/no-new-array': 'warn',
    'unicorn/no-static-only-class': 'off',
    'sonarjs/no-duplicate-string': ['warn', 10],
    'sonarjs/no-duplicated-branches': 'warn',
    'sonarjs/max-switch-cases': 'warn',
    'sonarjs/no-small-switch': 'warn',
    'sonarjs/no-nested-switch': 'warn',
    'sonarjs/cognitive-complexity': 'warn',
    'sonarjs/no-nested-template-literals': 'warn',
    'prefer-arrow-callback': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'no-var': 'error',
    'object-shorthand': 'error',
    'no-const-assign': 'error',
    'prefer-template': 'error',
    'no-param-reassign': [
      'warn',
      {
        props: true,
        ignorePropertyModificationsFor: ['draft'], // This is to avoid being yelled at when using immer
      },
    ],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'block-like', next: 'block-like' },
      { blankLine: 'always', prev: ['case', 'default'], next: '*' },
    ],
    'no-useless-constructor': 'error',
    'import/named': 'error',
    'import/no-cycle': 'off',
    'import/no-named-as-default': 'off',
  },
  overrides: [
    {
      // Set up ESLint for .ts and .tsx files
      files: ['**/*.{ts,tsx}'],
      extends: [
        'prettier',
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:promise/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:unicorn/recommended',
        'plugin:sonarjs/recommended',
      ],
      plugins: ['import', 'promise', 'unicorn', 'file-progress', 'prettier'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tools/tsconfig.json',
      },
      rules: {
        'file-progress/activate': 'error',
        curly: 'off',
        'import/namespace': 'off',
        'unicorn/no-null': 'off',
        'unicorn/prefer-switch': [
          'error',
          { emptyDefaultCase: 'no-default-case' },
        ],
        'unicorn/no-nested-ternary': 'off',
        'unicorn/filename-case': 'off',
        'unicorn/no-array-callback-reference': 'off',
        'unicorn/no-array-reduce': 'off',
        'unicorn/no-array-for-each': 'off',
        'unicorn/no-object-as-default-parameter': 'off',
        'unicorn/no-array-method-this-argument': 'off',
        'unicorn/prefer-number-properties': 'off',
        'unicorn/new-for-builtins': 'off',
        'unicorn/prefer-set-has': 'off', // TODO: re-enable, disabled because of auto-fix
        'unicorn/catch-error-name': 'warn',
        'unicorn/prevent-abbreviations': [
          'warn',
          {
            allowList: {
              props: true,
              acc: true,
            },
            replacements: {
              args: false,
              arg: false,
              props: false,
              doc: false,
              ref: false,
            },
          },
        ],
        'unicorn/consistent-function-scoping': [
          'error',
          { checkArrowFunctions: false },
        ],
        'unicorn/explicit-length-check': 'error',
        'unicorn/consistent-destructuring': 'warn',
        'unicorn/prefer-string-slice': 'warn',
        'unicorn/prefer-array-some': 'warn',
        'unicorn/prefer-spread': 'off',
        'unicorn/no-new-array': 'warn',
        'unicorn/no-static-only-class': 'off',
        'sonarjs/no-duplicated-branches': 'warn',
        'sonarjs/max-switch-cases': 'warn',
        'sonarjs/no-small-switch': 'warn',
        'sonarjs/no-nested-switch': 'warn',
        'sonarjs/no-duplicate-string': ['warn', 10],
        'sonarjs/cognitive-complexity': 'warn',
        'sonarjs/no-nested-template-literals': 'warn',
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/return-await': 'error',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
          {
            selector: 'variable',
            types: ['boolean'],
            format: ['PascalCase'],
            prefix: [
              'is',
              'has',
              'can',
              'should',
              'will',
              'did',
              'with',
              'went',
              'are',
              'needs',
            ],
            filter: {
              // you can expand this regex to add more allowed names
              regex: '^(required)$',
              match: false,
            },
          },
          {
            // Interface name should not be prefixed with `I`.
            selector: 'interface',
            filter: /^(?!I)[A-Z]/.source,
            format: ['PascalCase'],
          },
          {
            // Type parameter name should either be `T` or a descriptive name.
            selector: 'typeParameter',
            filter: /^T$|^T?[A-Z][A-Za-z]+$/.source,
            format: ['PascalCase'],
          },
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        'prefer-arrow-callback': 'error',
        'no-unused-vars': 'warn',
        'no-console': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'no-const-assign': 'error',
        'prefer-template': 'error',
        'no-param-reassign': [
          'warn',
          {
            props: true,
            ignorePropertyModificationsFor: ['draft'], // This is to avoid being yelled at when using immer
          },
        ],
        'prefer-destructuring': ['error', { object: true, array: true }],
        'lines-between-class-members': [
          'error',
          'always',
          { exceptAfterSingleLine: true },
        ],
        'padding-line-between-statements': [
          'error',
          { blankLine: 'always', prev: 'block-like', next: 'block-like' },
          { blankLine: 'always', prev: ['case', 'default'], next: '*' },
        ],
        'import/named': 'error',
        'import/no-cycle': 'off',
        'import/no-named-as-default': 'off',
      },
    },
    {
      files: ['**/__fixtures__/**/*.js?(x)', '**/__fixtures__/**/*.ts?(x)'],
      rules: {
        'sonarjs/no-duplicate-string': 'off',
      },
    },
  ],
});