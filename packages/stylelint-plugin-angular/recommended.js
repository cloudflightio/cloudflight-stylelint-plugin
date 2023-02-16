module.exports = {
  'plugins': ['.'],
  'rules': {
    // angular creates empty scss files and most people are too lazy to delete them
    'no-empty-source': null,
    '@cloudflight-stylelint-angular/ng-deep-selector-prefix': true,
  }
};
