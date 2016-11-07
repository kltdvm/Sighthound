import React from 'react';
import classNames from 'classnames';
import Section from './Section';
import SectionHeader from './SectionHeader';
import ImageUpload from './ImageUpload';
import NextStep from './NextStep';

class StepOne extends React.Component {


  render () {
    const step = 1
    
    const stepClasses = [
      "CaseSubmissionStep",
      "StepOne",
      this.props.currentStep === step ? "is-step-1" : null
    ];

    return (
      <div className={classNames(stepClasses)} step={step}>
        <Section>
          <SectionHeader sectionTitle="Upload Patient Images" sectionSubTitle="Take up to 3 photos of each of the patient’s eyes that is showing symptoms." />
          <ImageUpload title="Left Eye" />
          <ImageUpload title="Right Eye" />
          <NextStep {...this.props} />
        </Section>
      </div>
    );
  }

}

export default StepOne;