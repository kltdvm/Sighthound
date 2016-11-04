import React from 'react';
import classNames from 'classnames';

class StepTwo extends React.Component {

  render () {
    const step = 2
    
    const stepClasses = [
      "CaseSubmissionStep",
      "StepTwo",
      this.props.currentStep === step ? "is-step-2" : null
    ];

    return (
      <div className={classNames(stepClasses)} step={step}>
        Step Two
      </div>
    );
  }

}

export default StepTwo; 