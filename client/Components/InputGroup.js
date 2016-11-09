import React from 'react';
import classNames from 'classnames';

class InputGroup extends React.Component {

  constructor(props) {
    super(props);
    this.state = { expanded: false }
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  toggleExpanded () {
    this.setState({ expanded: !this.state.expanded });
  }
  

  render () {
    const inputGroupClasses = [
      "InputGroup",
      this.state.expanded ? "expanded" : null,
      this.props.classes
    ];

    return (
      <div className={classNames(inputGroupClasses)} >
        <h6 onClick={this.toggleExpanded} >{this.props.label}</h6>
        {this.props.children}
      </div>
    );
  }

}

export default InputGroup;