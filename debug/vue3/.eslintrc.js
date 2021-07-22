module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
    extraFileExtensions: ['.vue'],
  },
  extends: ['prettier', 'prettier/vue', 'prettier/@typescript-eslint'],
  plugins: ['prettier', '@typescript-eslint'],
};
