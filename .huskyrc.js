module.exports = {
  hooks: {
    'pre-commit': 'lerna run lint-staged'
  }
}