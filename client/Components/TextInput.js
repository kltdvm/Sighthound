import React from 'react';
import classNames from 'classnames';

class TextInput extends React.Component {


  render () {
    const textInputClasses = [
      "TextInput",
      "Input",
      "mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
    ];

    return (
      <div className={classNames(textInputClasses)} >
        <input id={this.props.inputName.replace(' ', '-').toLowerCase()} className="mdl-textfield__input" type="text" name={this.props.inputName}  ref={this.props.inputRef} />
        <label htmlFor={this.props.inputName.replace(' ', '-').toLowerCase()} className="mdl-textfield__label" >{this.props.inputName}</label>
      </div>
    );
  }

}

export default TextInput;