import React from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

class Wizard extends React.Component {

  render () {

    return (
      <div className="Wizard" >
        <form className={"is-step-" + this.props.newCase.currentStep} >
          <StepOne {...this.props.newCase} />
          <StepTwo {...this.props.newCase} />
          <StepThree {...this.props.newCase} />
        </form>
      </div>
    );
  }

}

export default Wizard;