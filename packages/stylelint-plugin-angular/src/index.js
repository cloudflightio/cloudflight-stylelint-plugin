// import {ngDeepSelectorPrefix} from './lib/rules/ng-deep-selector-prefix';

/** @type {import('stylelint').Config} */
module.exports = {
    plugins: ['./lib/rules/ng-deep-selector-prefix'],
    extends: ['@cloudflight/stylelint-plugin'],
    rules: {
        'cloudflight-stylelint-angular/ng-deep-selector-prefix': true,
    },
};
