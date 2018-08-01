module.exports = {
  root: true,
  parser: 'babel-eslint', // 解析器，这里我们使用babel-eslint
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module' // 类型为module，因为代码使用了使用了ECMAScript模块
  },
  env: {
    es6: true,
    browser: true, // 预定义的全局变量，这里是浏览器环境
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard', // 扩展，可以通过字符串或者一个数组来扩展规则
  // required to lint *.vue files
  plugins: [
    // 插件，此插件用于识别文件中的js代码，没有MIME类型标识没有script标签也可以识别到，因此拿来识别.vue文件中的js代码
    'html',
    'import',
    'node',
    'promise',
    'standard'
  ],
  // add your custom rules here
  rules: {
    'indent': [
      2,
      2,
      {
        'SwitchCase': 1,
        'MemberExpression': 1
      }
    ],
    'no-unused-vars': [
      2,
      {
        'vars': 'all',
        'args': 'all',
        'caughtErrors': 'all'
      }
    ],
    'semi': [2, 'always'],
    'space-before-function-paren': [
      2,
      {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always'
      }
    ],
    'brace-style': [1, 'stroustrup'],
    'curly': [2, 'all'],
    'handle-callback-err': 0,
    'no-cond-assign': 0,
    'block-spacing': 0,
    'camelcase': 0,
    'accessor-pairs': 0,
    'no-new': 0,
    'no-new-symbol': 0,
    'prefer-promise-reject-errors': 0,
    'padded-blocks': 0,
    'no-extra-semi': 2,
    'no-prototype-builtins': 0,
    'operator-linebreak': [2, 'before'],
    'no-multiple-empty-lines': [2, {'max': 1, 'maxEOF': 1}],
    'one-var': [2, 'never'],
    'dot-notation': 1,
    'max-len': [1, 120],
    'computed-property-spacing': 2,
    'no-inline-comments': 2,
    'valid-jsdoc': [
      1,
      {
        'prefer': {
          'arg': 'param',
          'argument': 'param',
          'returns': 'return',
          'virtual': 'abstract'
        },
        'preferType': {
          'Boolean': 'boolean',
          'Number': 'number',
          'String': 'string',
          'object': 'Object',
          'array': 'Array',
          'function': 'Function',
          'regExp': 'RegExp',
          'date': 'Date',
          'promise': 'Promise'
        },
        'requireReturn': false,
        'requireReturnDescription': false
      }
    ],
    'lines-around-comment': 2,
    'no-restricted-globals': 2,
    'no-else-return': 2,
    'max-params': [1, 6],
    'for-direction': 1,
    'no-await-in-loop': 1,
    'no-compare-neg-zero': 1,
    'no-empty': [1, {'allowEmptyCatch': true}],
    'no-loop-func': 2,
    'no-return-await': 0,
    'no-useless-concat': 1,
    'radix': 2,
    'no-unneeded-ternary': 0,
    'quote-props': [1, 'consistent-as-needed'],
    'semi-style': 1
  }
}
