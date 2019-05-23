# Commands

Commands below are the most used in daily work:

- `start` to start dev server for site development.
- `test:watch` watch code change and run test.
- `storybook` fire up a storybook server to develop components individually.

Usage for other commands:

- `build` to build production bundle.
- `test:ci` run test in CI mode.
- `lint-staged` command for `lerna`.
- `build-storybook` build production storybook site.

# Why Create-React-App?

To reduce the work of setting up bundling tool, `CRA` is chose to be the scaffold.

However CRA comes with some limitations. For example our custom `eslint` and `stylelint` can't be intergated in the dev server building process when we run `yarn run start`.

If you really want to do things beyond what `CRA` provided out-of-the-box, please consider using it with [react-app-rewired](https://github.com/timarney/react-app-rewired).
