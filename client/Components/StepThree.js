import React from 'react';
import classNames from 'classnames';
import Section from './Section';
import SectionHeader from './SectionHeader';
import Accordion from './Accordion';
import InputGroup from './InputGroup';
import NextStep from './NextStep';

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
        <Section classes="left">
          <SectionHeader sectionTitle="Clinical Signs" />
          <Accordion {...this.props} groups={this.props.newCase.info.clinicalSigns} >
          </Accordion>
          <NextStep {...this.props} />
        </Section>
      </div>
    );
  }

}

export default StepThree;