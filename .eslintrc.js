module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  root: true,
  extends: ['airbnb-typescript/base', 'prettier', 'prettier/@typescript-eslint'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.eslint.json',
  },
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': 'off',
  },
};
