Package.describe({
  name: 'studiointeract:react-accounts-ui-semantic-ui',
  version: '1.0.7',
  summary: 'Semantic UI – Accounts UI for React in Meteor 1.3',
  git: 'https://github.com/studiointeract/react-accounts-ui-semantic-ui',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('ecmascript');
  api.use('underscore');
  api.use('studiointeract:react-accounts-ui@1.0.13');

  api.mainModule('main.jsx');
});
