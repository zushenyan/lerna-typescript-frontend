# Commands

Commands below are coming from `package.json`.

These are the most common commands in day to day work:

- `watch` watch code change and build result to `dist` folder. It should be used when we are developing other packages which are using `packages/components`.
- `test:watch` run test in watch mode.
- `storybook` start a storybook server for developing components in individual mode.

Other commands are also avaliable:

- `clean` remove the `dist` folder.
- `build` build result to `dist` folder.
- `test:ci` run test in CI mode.
- `lint-staged` command for `lerna`.
- `build-storybook` build a storybook production site.

# Why Webpack?

For maximum flexibility this module was written with Webpack.

If you dont't want to manually build bundle configs please consider JS library creator:

- [nwb](https://github.com/insin/nwb)
- [neutrino](https://neutrinojs.org/)
