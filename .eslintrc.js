// @ts-check

/**
 * @type {import('eslint').Linter.Config}
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
    ecmaVersion: 'latest'
  },
  rules: {},
  root: true,
  ignorePatterns: ['**/node_modules/**', '**/dist/**', '**/tmp/**', '**/out-tsc/**', '!.*']
}
