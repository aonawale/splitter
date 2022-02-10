module.exports = {
  root: true,
  extends: ['.eslintrc.preset'],
  env: {
    es6: true,
    node: true,
  },
  ignorePatterns: ['/bin', '/lib/**/*'],
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
}
