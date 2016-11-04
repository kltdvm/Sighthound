import React from 'react';
import classNames from 'classnames';

class StepThree extends React.Component {

  render () {
    const step = 3
    
    const stepClasses = [
      "CaseSubmissionStep",
      "StepThree",
      this.props.currentStep === step ? "is-step-3" : null
    ];

    return (
      <div className={classNames(stepClasses)} step={step}>
        Step Three
      </div>
    );
  }

}

export default StepThree;