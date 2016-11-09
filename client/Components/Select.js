import React from 'react';
import classNames from 'classnames';

class Select extends React.Component {

  renderOptions (options) {
    for (var i = 0; i < options.length; i++) {
      return <option value={options[i]}>{options[i]}</option>
    }
  }

  render () {
    
    const selectClasses = [
      "Select",
      this.props.classes
    ];

    return (
      <select className={classNames(selectClasses)} >
        {this.renderOptions(this.props.options)}
      </select>
    );
  }

}

export default Select;