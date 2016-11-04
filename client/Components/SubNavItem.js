import React from 'react';
import classNames from 'classnames';

class SubNavItem extends React.Component {

  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.goToStep(this.props.id);
  }

  render () {
    const navLinkClasses = [
      "SubNavItem",
      "mdl-navigation__link",
      this.props.currentStep === this.props.id ? "active" : null
    ];
    
    return (
      <div className={classNames(navLinkClasses)} onClick={this.handleClick} >
        {this.props.title}
      </div>
    );
  }

}

export default SubNavItem;