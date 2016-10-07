# React Accounts UI for Meteor 1.3 - Materialize

Current version 1.1.0

![Accounts UI for Meteor 1.3 - Materialize](https://raw.githubusercontent.com/studiointeract/accounts-material/master/accounts-material.png)

## Features

1. **[Easy to use](https://github.com/studiointeract/react-accounts-ui#using-react-accounts-ui)**, mixing the ideas of useraccounts configuration and accounts-ui that everyone already knows and loves.
3. **[Components](https://github.com/studiointeract/react-accounts-ui#components-available)** are everywhere, and extensible by replacing them on Accounts.ui.
4. **[Basic routing](https://github.com/studiointeract/react-accounts-ui#configuration)** included, redirections when the user clicks a link in an email or when signing in or out.
5. **[Unstyled](https://github.com/studiointeract/react-accounts-ui#styling)** is the default, no CSS included.
6. **[No password](https://github.com/studiointeract/react-accounts-ui#no-password-required)** sign up and sign in are included.
7. **[Extra fields](https://github.com/studiointeract/react-accounts-ui#extra-fields)** is now supported.
8. **[Server Side Rendering](https://github.com/studiointeract/react-accounts-ui#server-side-rendering)** are supported, trough FlowRouter (SSR).
9. **[Extending](https://github.com/studiointeract/react-accounts-ui#create-your-own-styled-version)** to make your own custom form, for your app, or as a package, all components can be extended and customized.

### Based on and extends std:accounts-ui

[https://github.com/studiointeract/accounts-ui](https://github.com/studiointeract/accounts-ui)

## Installation

`meteor add std:accounts-material`

## Configuration

We support the standard [configuration in the account-ui package](http://docs.meteor.com/#/full/accounts_ui_config). But have extended with some new options.

### [Accounts.ui.config(options)](https://github.com/studiointeract/react-accounts-ui#configuration)

### Example setup (Meteor 1.3)

`meteor add accounts-password`  
`meteor add materialize:materialize`  
`meteor add std:accounts-material`

```javascript

import React from 'react';
import { Accounts } from 'meteor/std:accounts-material';

Accounts.ui.config({
  passwordSignupFields: 'NO_PASSWORD',
  loginPath: '/',
});

if (Meteor.isClient) {
  ReactDOM.render(<Accounts.ui.LoginForm />, document.body)
}

```

## Example setup using FlowRouter (Meteor 1.3)

`meteor add accounts-password`  
`meteor add materialize:materialize`  
`meteor add std:accounts-material`  
`meteor add kadira:flow-router-ssr`

```javascript
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { Accounts } from 'meteor/std:accounts-material';
import React from 'react';

Accounts.ui.config({
  passwordSignupFields: 'NO_PASSWORD',
  loginPath: '/login',
  onSignedInHook: () => FlowRouter.go('/'),
  onSignedOutHook: () => FlowRouter.go('/')
});

FlowRouter.route("/login", {
  action(params) {
    mount(MainLayout, {
      content: <Accounts.ui.LoginForm />
    });
  }
});
```

## Credits

Made by the [creative folks at Studio Interact](http://studiointeract.com)
