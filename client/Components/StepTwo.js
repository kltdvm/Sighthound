import React from 'react';
import classNames from 'classnames';
import Section from './Section';
import SectionHeader from './SectionHeader';
import TextInput from './TextInput';
import NumberInput from './NumberInput';
import Dropdown from './Dropdown';
import NextStep from './NextStep';

class StepTwo extends React.Component {

  render () {
    const step = 2
    
    const stepClasses = [
      "CaseSubmissionStep",
      "StepTwo",
      this.props.currentStep === step ? "is-step-2" : null
    ];

    const sexOptions = [
      {
        id: 1,
        label: "Male",
        value: "male"
      },
      {
        id: 2,
        label: "Female",
        value: "female"
      }
    ] 

    return (
      <div className={classNames(stepClasses)} step={step}>
        <Section classes="left">
          <SectionHeader sectionTitle="Patient Information" />
          <TextInput inputName="Patient First Name" inputRef={c => this.firstName = c} />
          <TextInput inputName="Last Name" inputRef={c => this.lastName = c} />
          <NumberInput inputName="Age Yrs" inputRef={c => this.ageYrs = c} classes="one-quarter" />
          <Dropdown inputName="Sex" inputRef={c => this.ageYrs = c} options={sexOptions} value="something" classes="one-third" />
          <NextStep {...this.props} />
        </Section>
      </div>
    );
  }

}

export default StepTwo; 