module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "prettier",
  ],
  settings: {},
  rules: {
    semi: ["error", "never"],
    quotes: ["error", "single"],
  },
};
