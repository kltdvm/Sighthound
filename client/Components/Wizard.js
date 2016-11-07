import React from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

class Wizard extends React.Component {

  render () {

    return (
      <div className="Wizard" >
        <form className={"is-step-" + this.props.newCase.currentStep} >
          <StepOne {...this.props} />
          <StepTwo {...this.props} />
          <StepThree {...this.props} />
        </form>
      </div>
    );
  }

}

export default Wizard;