import React from 'react';
import classNames from 'classnames';
import InputGroup from './InputGroup';
import Dropdown from './Dropdown';
import TextInput from './TextInput';

class Accordion extends React.Component {

  renderInputGroups (list) {

    const inputsArray = [];
    
    for (var i = 0; i < list.length; i++) {
      const item = list[i];
      
      if (item.options) {

        inputsArray.push(
          <InputGroup key={item.label.replace(" ", "-") + "-" + i} label={item.label}>
            <Dropdown inputName="left" options={item.options} value={item.value} classes={"one-half"}/>
            <Dropdown inputName="right" options={item.options} value={item.value} classes={"one-half"}/>
          </InputGroup>
        )
      } else {
        inputsArray.push(
          <InputGroup key={item.label.replace(" ", "-") + "-" + i} label={item.label}>
            <TextInput key={item.label.replace(" ", "-") + "-" + i} inputName={item.label.replace(" ", "-")} inputRef={c => this.firstName = c} />
          </InputGroup>
        )
    }
      
    }

    return inputsArray;
    
  }

  render () {
    
    const accordionClasses = [
      "Accordion",
      this.props.classes
    ];

    return (
      <div className={classNames(accordionClasses)} >
        {this.renderInputGroups(this.props.groups)}
      </div>
    );
  }

}

export default Accordion;