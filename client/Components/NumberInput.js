import React from 'react';
import classNames from 'classnames';

class NumberInput extends React.Component {


  render () {
    const numberInputClasses = [
      "NumberInput",
      "mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
    ];

    return (
      <div className={classNames(numberInputClasses)} >
        <input id={this.props.inputName.replace(' ', '-').toLowerCase()} className="mdl-textfield__input" type="text" name={this.props.inputName} type="tel" pattern="-?[0-9]*(\.[0-9]+)?" ref={this.props.inputRef} />
        <label htmlFor={this.props.inputName.replace(' ', '-').toLowerCase()} className="mdl-textfield__label" >{this.props.inputName}</label>
        <span className="mdl-textfield__error">That's not a number!</span>
      </div>
    );
  }

}

export default NumberInput;