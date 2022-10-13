module.exports = {
  root: true,
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  plugins: ["simple-import-sort"],
  parserOptions: {
    // "plugin:vue/vue3-recommended" переключает парсер на vue-eslint-parser,
    // но принимает параметром вложенный парсер. Нужно указать его обратно на typescript.
    parser: "@typescript-eslint/parser",
  },
  env: {
    node: true,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // настройки от ccharmai
    "vue/html-indent": "off",
    "vue/max-attributes-per-line": "off",
    "prettier/prettier": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "vue/no-unused-components": "off",
    "vue/no-v-html": "off",
    // конец
    // сортировка импортов
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    // разрешить snake_case
    "@typescript-eslint/camelcase": "off",
    // разрешить пустые методы (например для декораторов)
    "@typescript-eslint/no-empty-function": "off",
    // чтобы работал мержинг интерфейсов Objection моделей
    // см. https://github.com/typescript-eslint/typescript-eslint/issues/1614
    "@typescript-eslint/no-empty-interface": "off",
    // разрешить описывать свойства как data: any
    "@typescript-eslint/no-explicit-any": "off",
    // костыль для prettier ;(async)
    "@typescript-eslint/no-extra-semi": "off",
    // разрешить любой порядок функций
    "@typescript-eslint/no-use-before-define": "off",
    // не заставлять явно прописывать тип функции
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // не заставлять прописывать public у членов класса
    "@typescript-eslint/explicit-member-accessibility": "off",
    // разрешить !
    "@typescript-eslint/no-non-null-assertion": "off",
    // разрешить public св-ва в конструкторах
    "@typescript-eslint/no-parameter-properties": "off",
    // чтобы можно было св-ва писать просто props: { some: String }
    "vue/require-default-prop": "off",
    // настройки от RokeAlvo
    // тут было много правил для форматирования, но т.к. я восстановил prettier я их убрал - Илья
    "vue/one-component-per-file": "off",
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        // для <script setup>
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
};
