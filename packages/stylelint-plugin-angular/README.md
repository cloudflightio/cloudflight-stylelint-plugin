# stylelint-plugin-angular

## Installation

```shell
npm install --save @cloudflight/stylelint-plugin-angular
# or
yarn add @cloudflight/stylelint-plugin-angular
# or
pnpm add @cloudflight/stylelint-plugin-angular
```

Then put this in your `.stylelintrc.json` file:

```json
{
  "plugins": ["@cloudflight/stylelint-plugin-angular"],
  "extends": ["@cloudflight/stylelint-plugin-angular/recommended"],
  "rules": {}
}
```

## Usage

Run `stylelint **/*.scss` for linting the whole project.
