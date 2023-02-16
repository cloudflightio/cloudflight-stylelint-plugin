module.exports = {
  plugins: ['stylelint-high-performance-animation', 'stylelint-order'],
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'color-no-invalid-hex': true,
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'named-grid-areas-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-no-unknown': true,
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
          name: 'include',
        },
        'custom-properties',
        'dollar-variables',
        'declarations',
        'rules',
      ],
      {
        unspecified: 'bottom',
      },
    ],
    'selector-class-pattern': null,
    'alpha-value-notation': 'percentage',
    'color-function-notation': 'legacy',
    'color-named': null,
    'plugin/no-low-performance-animation-properties': true,
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
