module.exports = {
  root: true,
  extends: ['@react-native-community', '.eslintrc.preset'],
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
}
