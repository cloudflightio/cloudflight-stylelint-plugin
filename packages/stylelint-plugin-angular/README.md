# stylelint-plugin-angular

## Installation

```shell
npm install --save-dev @cloudflight/stylelint-plugin-angular
# or
yarn add -D @cloudflight/stylelint-plugin-angular
# or
pnpm add -D @cloudflight/stylelint-plugin-angular
```

Then put this in your `.stylelintrc.mjs` file:

```js
/** @type {import('stylelint').Config} */
export default {
  extends: ['@cloudflight/stylelint-plugin-angular'],
  rules: {},
}
```

## Usage

Run `stylelint **/*.scss` for linting the whole project.
