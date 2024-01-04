# stylelint-plugin-vue

## Installation

```shell
npm install --save-dev @cloudflight/stylelint-plugin-vue
# or
yarn add -D @cloudflight/stylelint-plugin-vue
# or
pnpm add -D @cloudflight/stylelint-plugin-vue
```

Then put this in your `.stylelintrc.mjs` file:

```js
/** @type {import('stylelint').Config} */
export default {
  extends: ['@cloudflight/stylelint-plugin-vue'],
  rules: {},
}
```

## Usage

Run `stylelint **/*.scss` for linting the whole project.
