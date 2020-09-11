module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],

  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    semi: 'off',
    'vue/no-unused-vars': 'off',
    'vue/singleline-html-element-content-newline':'off',
    'vue/max-attributes-per-line': ["error", {
      "singleline": 3,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }]
  },

  'extends': [
    'plugin:vue/strongly-recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended'
  ]
};
