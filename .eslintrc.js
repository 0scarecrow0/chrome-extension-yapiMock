module.exports = {
  // 此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  // 全局环境
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'plugin:vue/vue3-recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  globals: {
    chrome: 'readonly',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    // 规则旨在禁止在逻辑表达式，条件表达式，声明，数组元素，对象属性，序列和函数参数周围使用多个空格
    'no-multi-spaces': ['error', { exceptions: { Property: false, BinaryExpression: true } }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': [process.env.NODE_ENV === 'production' ? 'warn' : 'off'],
    'keyword-spacing': 0,
    // 需要尾随逗号时的最后一个元素或属性是一个不同的线比所述封闭]或}和不允许尾随逗号时的最后一个元素或属性是基于相同行的闭合]或}
    'comma-dangle': ['error', 'only-multiline'],
    // 对程序状态没有影响的未使用表达式表示逻辑错误
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'one-var': 0,
    'no-trailing-spaces': 0,
    'no-shadow': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-function': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'no-undef': 0,
    'no-restricted-syntax': 0,
    'spaced-comment': 0,
    'valid-jsdoc': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    'no-extra-parens': 0, // 支持多余的括号
    'array-bracket-spacing': 2,
    'arrow-spacing': 2,
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'new-cap': 'off',
  },
};
