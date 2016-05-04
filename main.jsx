import React from 'react';
import { Accounts, STATES } from 'meteor/std:accounts-ui';

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
    const { fields, buttons, error, message, ready } = this.props;
    return (
      <form className={[
        "ui form",
        ready ? "" : "loading"
      ].join(' ')} onSubmit={ evt => evt.preventDefault() }>
        {Object.keys(fields).length > 0 ? (
          <Accounts.ui.Fields fields={ fields } />
        ): null }
        { buttons['switchToPasswordReset'] ? (
          <div className="field">
            <Accounts.ui.Button {...buttons['switchToPasswordReset']} />
          </div>
        ): null }
        {_.values(_.omit(buttons, 'switchToPasswordReset', 'switchToSignIn',
          'switchToSignUp', 'switchToChangePassword', 'switchToSignOut', 'signOut')).map((button, i) =>
          <Button {...button} key={i} />
        )}
        { buttons['signOut'] ? (
          <Button {...buttons['signOut']} type="submit" />
        ): null }
        { buttons['switchToSignIn'] ? (
          <Button {...buttons['switchToSignIn']} type="button" />
        ): null }
        { buttons['switchToSignUp'] ? (
          <Button {...buttons['switchToSignUp']} type="button" />
        ): null }
        { buttons['switchToChangePassword'] ? (
          <Button {...buttons['switchToChangePassword']} type="button" />
        ): null }
        { buttons['switchToSignOut'] ? (
          <Button {...buttons['switchToSignOut']} type="button" />
        ): null }
        <Accounts.ui.FormMessage className="ui message" style={{display: 'block'}} {...message} />
      </form>
    );
  }
}

class Buttons extends Accounts.ui.Buttons {}
class Button extends Accounts.ui.Button {
  render() {
    const { label, type, disabled = false, onClick, className } = this.props;
    return type == 'link' ? (
      <a style={{cursor: 'pointer'}} className={ className } onClick={ onClick }>{ label }</a>
    ) : (
      <button className={ [
          'ui button',
          type == 'submit' ? 'primary' : '',
          disabled ? 'disabled' : '',
          className
        ].join(' ') } type={ type } disabled={ disabled }
        onClick={ onClick }>{ label }</button>
    );
  }
}
class Fields extends Accounts.ui.Fields {
  render () {
    let { fields = {}, className = "field" } = this.props;
    return (
      <div className={ className }>
        {Object.keys(fields).map((id, i) =>
          <Accounts.ui.Field {...fields[id]} key={i} />
        )}
      </div>
    );
  }
}
class Field extends Accounts.ui.Field {
  render() {
    const {
      id,
      hint,
      label,
      type = 'text',
      onChange,
      required = false,
      className,
      defaultValue = ""
    } = this.props;
    const { mount = true } = this.state;
    return mount ? (
      <div className={["ui field", required ? "required" : ""].join(' ')}>
        <label htmlFor={ id }>{ label }</label>
        <div className="ui fluid input">
          <input id="password" name="password" style={{display: 'none'}} />
          <input id={ id }
            name={ id }
            type={ type }
            autoCapitalize={ type == 'email' ? 'none' : false }
            autoCorrect="off"
            onChange={ onChange }
            placeholder={ hint } defaultValue={ defaultValue } />
        </div>
      </div>
    ) : null;
  }
}
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
export { Accounts, STATES };
export default Accounts;
