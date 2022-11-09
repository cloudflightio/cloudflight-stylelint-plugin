# stylelint-plugin-vue

## Installation

```shell
npm install --save-dev @cloudflight/stylelint-plugin-vue
# or
yarn add -D @cloudflight/stylelint-plugin-vue
# or
pnpm add -D @cloudflight/stylelint-plugin-vue
```

Then put this in your `.stylelintrc.json` file:

```json
{
  "plugins": ["@cloudflight/stylelint-plugin-vue"],
  "extends": ["@cloudflight/stylelint-plugin-vue/recommended"],
  "rules": {}
}
```

## Usage

Run `stylelint **/*.scss` for linting the whole project.
