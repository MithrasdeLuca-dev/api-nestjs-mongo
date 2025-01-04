module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',

  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",

    "no-multiple-empty-lines": [
      "error", {
        "max": 1,
        "maxEOF": 0
      }],

    "operator-linebreak": [
      "error",
      "before"
    ],

    "comma-dangle": [
      "error",
      "always-multiline"
    ],

    "semi": [
      "error",
      "always"
    ],

    "implicit-arrow-linebreak": [
      "error",
      "beside"
    ],

    "indent": ["error", 2, { "MemberExpression": 1 }],

    'linebreak-style': [
      'error',
      'unix'
    ],

    'quotes': [
      'error',
      'single'
    ],

    'semi': [
      'error',
      'always'
    ],
  },
};
