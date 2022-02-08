module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['prettier', 'plugin:import/recommended'],
  settings: {},
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
