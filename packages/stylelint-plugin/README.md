# stylelint-plugin

## Installation

```shell
npm install --save-dev @cloudflight/stylelint-plugin
# or
yarn add -D @cloudflight/stylelint-plugin
# or
pnpm add -D @cloudflight/stylelint-plugin
```

Then put this in your `.stylelintrc.mjs` file:

```js
/** @type {import('stylelint').Config} */
export default {
  extends: ['@cloudflight/stylelint-plugin'],
  rules: {},
}
```

## Usage

Run `stylelint **/*.scss` for linting the whole project.
