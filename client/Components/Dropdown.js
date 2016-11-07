import React from 'react';
import classNames from 'classnames';
import Select from 'react-select';

class Dropdown extends React.Component {

  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  createOptions () {
    const options = this.props.options;
    const optionsArray = [];
    
    for (var option = 0; option < options.length; option++) {
      optionsArray.push(<option key={options[option].id} className={!options[option].value ? "placeholder" : ""} value={options[option].value} >{options[option].name}</option>)
    }

    return optionsArray;
  }

  handleChange (value) {
    console.log('select value is: ', value);
  }


  render () {
    const options = []
    const optionsState = this.props.optionsState

    const dropdownClasses = [
      "Dropdown",
      "mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
    ];

    return (
      <div className={classNames(dropdownClasses)} >
        <label className="mdl-textfield__label" >
          <i className="material-icons">keyboard_arrow_down</i>  
        </label>
        <select value={optionsState} onChange={this.handleChange(this.props.onChange)}>
          {this.createOptions()}
        </select>
      </div>
    );
  }

}

export default Dropdown;