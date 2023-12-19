module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-recommended", // 使用 Vue 3 推荐的 ESLint 规则
    "eslint:recommended", // 使用 ESLint 推荐的规则
    "@vue/typescript/recommended", // 使用 TypeScript 推荐的规则
    "@vue/eslint-config-typescript",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "vue/first-attribute-linebreak": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/max-attributes-per-line": "off",
    "vue/html-self-closing": "off",
    "vue/html-closing-bracket-spacing": "off",
    "vue/multi-word-component-names": "off",
    "vue/html-indent": "off"
  },
  globals: {
    defineExpose: true,
    defineProps: true,
    defineEmits: true,
    WxLogin: true
  }
};
