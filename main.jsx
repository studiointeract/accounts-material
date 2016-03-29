import React from 'react';
import Accounts from 'meteor/studiointeract:react-accounts-ui';

/**
 * Form.propTypes = {
 *   fields: React.PropTypes.object.isRequired,
 *   buttons: React.PropTypes.object.isRequired,
 *   error: React.PropTypes.string,
 *   ready: React.PropTypes.bool
 * };
 */
class Form extends Accounts.ui.Form {
  render() {
    const { fields, buttons, error, message, ready = true} = this.props;
    return (
      <form className={ready ? "ready" : null} onSubmit={ evt => evt.preventDefault() } className="accounts-ui">
        <Accounts.ui.Fields fields={ fields } />
        <Accounts.ui.Buttons buttons={ buttons } />
        <Accounts.ui.FormMessage message={ message } />
      </form>
    );
  }
}

class Buttons extends Accounts.ui.Buttons {}
class Button extends Accounts.ui.Button {}
class Fields extends Accounts.ui.Fields {}
class Field extends Accounts.ui.Field {}
class FormMessage extends Accounts.ui.FormMessage {}
// Notice! Accounts.ui.LoginForm manages all state logic at the moment, so avoid
// overwriting this one, but have a look at it and learn how it works. And pull
// requests altering how that works are welcome.

// Alter provided default unstyled UI.
Accounts.ui.Form = Form;
Accounts.ui.Buttons = Buttons;
Accounts.ui.Button = Button;
Accounts.ui.Fields = Fields;
Accounts.ui.Field = Field;
Accounts.ui.FormMessage = FormMessage;

// Export the themed version.
export { Accounts as default };
