/** @type {import('stylelint').Config} */
module.exports = {
    plugins: ['stylelint-order'],
    extends: ['stylelint-config-standard-scss'],
    rules: {
        'color-no-invalid-hex': true,
        'font-family-no-duplicate-names': true,
        'font-family-no-missing-generic-family-keyword': true,
        'named-grid-areas-no-invalid': true,
        'function-calc-no-unspaced-operator': true,
        'function-linear-gradient-no-nonstandard-direction': true,
        // these 2 rules don't work well with @function
        'function-no-unknown': null,
        'scss/function-no-unknown': null,
        'string-no-newline': true,
        'unit-no-unknown': true,
        'custom-property-no-missing-var-function': true,
        'property-no-unknown': true,
        'keyframe-declaration-no-important': true,
        'declaration-block-no-duplicate-custom-properties': true,
        'declaration-block-no-duplicate-properties': true,
        'declaration-block-no-shorthand-property-overrides': true,
        'block-no-empty': true,
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['ng-deep'],
            },
        ],
        'selector-type-no-unknown': true,
        'media-feature-name-no-unknown': true,
        'at-rule-no-unknown': null,
        'comment-no-empty': true,
        'no-descending-specificity': true,
        'no-duplicate-at-import-rules': true,
        'no-duplicate-selectors': true,
        'no-empty-source': null,
        'no-invalid-double-slash-comments': null,
        'no-invalid-position-at-import-rule': true,
        'length-zero-no-unit': true,
        'order/properties-alphabetical-order': null,
        'order/order': [
            [
                {
                    type: 'at-rule',
                    name: 'extend',
                },
                {
                    type: 'at-rule',
                    name: 'include',
                },
            ],
            {
                unspecified: 'bottom',
            },
        ],
        'selector-class-pattern': null,
        'alpha-value-notation': 'percentage',
        'color-function-notation': 'legacy',
        'color-named': null,
        'scss/dollar-variable-empty-line-before': null,
        'declaration-empty-line-before': null,
        'custom-property-empty-line-before': null,
        'color-hex-length': null,
        'declaration-property-value-no-unknown': true,
    },
    overrides: [
        {
            files: ['*.scss', '**/*.scss'],
            customSyntax: 'postcss-scss',
        },
    ],
};
