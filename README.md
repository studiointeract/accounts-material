# React Accounts UI for Meteor 1.3 - Basic

Current version 1.0.1

![React Accounts UI for Meteor 1.3 - Basic](https://raw.githubusercontent.com/studiointeract/react-accounts-ui-basic/master/react-accounts-ui-basic.gif)

## Features

1. **Easy to use**, mixing the ideas of useraccounts configuration and accounts-ui that everyone already knows and loves.
2. **Server Side Rendering** are supported, trough FlowRouter (SSR).
3. **Components** are everywhere, and extensible by replacing them on Accounts.ui.
4. **Basic routing** included.
5. **Unstyled** is the default, no CSS included.
4. **No password** sign up and sign in are included.

### Based on and extends studiointeract:react-accounts-ui

[https://atmospherejs.com/studiointeract/react-accounts-ui](https://atmospherejs.com/studiointeract/react-accounts-ui)

## Installation

### Meteor 1.3

`meteor add studiointeract:react-accounts-ui-basic`

## Example setup using FlowRouter (Meteor 1.3)

`meteor add accounts-password`  
`meteor add studiointeract:react-accounts-ui-basic`  
`meteor add kadira:flow-router-ssr`

```javascript

import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { Accounts } from 'meteor/studiointeract:react-accounts-ui';
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

Thx to the Folks at [Studio Interact](http://studiointeract.se)
