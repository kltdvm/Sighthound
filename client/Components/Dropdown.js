import React from 'react';
import classNames from 'classnames';
import Select from 'react-dropdown';

class Dropdown extends React.Component {

  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }



  handleChange (value) {
    console.log('select value is: ', value);
  }


  render () {

    const dropdownClasses = [
      "Dropdown",
      "Input",
      "mdl-textfield mdl-js-textfield mdl-textfield--floating-label",
      "left",
      this.props.classes
    ];

    return (
      <div className={classNames(dropdownClasses)} >
        <label className="mdl-textfield__label" >
          <i className="material-icons">keyboard_arrow_down</i>  
        </label>
        <Select
          className={{'dirty': this.props.value}}
          name={this.props.inputName}
          placeholder={this.props.inputName}
          options={this.props.options}
          onChange={this.handleChange}
        />
      </div>
    );
  }

}

export default Dropdown;