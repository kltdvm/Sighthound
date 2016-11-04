import React from 'react';
import SubNavItem from './SubNavItem';

class SubNav extends React.Component {

  renderNavItems () {
    const steps = this.props.newCase.steps;
    const stepsArray = [];
    
    for (var step = 0; step < steps.length; step++) {
      stepsArray.push(<SubNavItem key={steps[step].id} {...steps[step]} goToStep={this.props.goToStep} currentStep={this.props.newCase.currentStep} />)
    }

    return stepsArray;
  }
    
  render () {
    return (
      <div className="SubNav mdl-layout__header">
        <header className="mdl-layout__header-row mdl-color--cyan-600" >
          <nav className="mdl-navigation" >
            {this.renderNavItems()}
          </nav>
        </header>
      </div>
    );
  }

}

export default SubNav;