/** @type {import('stylelint').Config} */
module.exports = {
    extends: ['@cloudflight/stylelint-plugin', 'stylelint-config-html/vue'],
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                'selector-pseudo-class-no-unknown': [
                    true,
                    {
                        ignorePseudoClasses: ['deep'],
                    },
                ],
            },
        },
    ],
};
