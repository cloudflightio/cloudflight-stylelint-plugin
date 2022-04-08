import * as stylelint from 'stylelint';

const ruleName = '@clf-internal-stylelint-angular/ng-deep-selector-prefix';

export const ngDeepSelectorPrefix = stylelint.createPlugin(
  ruleName,
  () => (postcssRoot, postcssResult) => {
    const validOptions = stylelint.utils.validateOptions(postcssResult, ruleName);

    if (!validOptions) {
      return;
    }

    for (const node of postcssRoot.nodes) {
      if (node.type !== 'rule' || !node.selector.trimStart().startsWith('::ng-deep')) {
        continue;
      }

      stylelint.utils.report({
        ruleName,
        message: 'Unexpected ng-deep selector without prefix',
        result: postcssResult,
        node,
        line: node.source?.start?.line,
        word: node.selector,
      });
    }
  }
);

ngDeepSelectorPrefix.ruleName = ruleName;
