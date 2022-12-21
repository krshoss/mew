// @ts-check

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'standard',
    'standard-with-typescript'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.base.json'
  },
  rules: {
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/member-delimiter-style': 'off'
  },
  root: true,
  ignorePatterns: [
    '**/node_modules/**',
    '**/dist/**',
    '**/tmp/**',
    '**/out-tsc/**',
    '*.d.ts',
    '!.*'
  ]
}
