/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    overrides: [
      {
        files: ["src/main.ts"], // Change this to default.vue path
        rules: {
          "vue/multi-word-component-names": [
            "error",
            {
              ignores: ["Fragment"],
            },
          ],
        },
      },
    ],
  },
};
