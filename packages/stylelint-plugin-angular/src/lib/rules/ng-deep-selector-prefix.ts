import stylelint, { Rule } from 'stylelint';

const ruleName = '@cloudflight-stylelint-angular/ng-deep-selector-prefix';

// eslint-disable-next-line func-style
const fn: Rule = () => (postcssRoot, postcssResult) => {
  const validOptions = stylelint.utils.validateOptions(postcssResult, ruleName);

  if (!validOptions) {
    return;
  }

  for (const node of postcssRoot.nodes) {
    if (
      node.type !== 'rule' ||
      node.source?.start == null ||
      !node.selector.trimStart().startsWith('::ng-deep')
    ) {
      continue;
    }

    stylelint.utils.report({
      ruleName,
      message: 'Unexpected ng-deep selector without prefix',
      result: postcssResult,
      node,
      line: node.source.start.line,
      word: node.selector,
    });
  }
};

fn.ruleName = ruleName;
fn.messages = {};

export const ngDeepSelectorPrefix = stylelint.createPlugin(ruleName, fn);
