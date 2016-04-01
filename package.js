Package.describe({
  name: 'std:react-accounts-ui-material-ui',
  version: '1.1.0',
  summary: 'Material UI – Accounts UI for React in Meteor 1.3',
  git: 'https://github.com/std/react-accounts-ui-material-ui',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('ecmascript');
  api.use('underscore');
  api.use('std:react-accounts-ui@1.1.0');

  api.mainModule('main.jsx');
});
