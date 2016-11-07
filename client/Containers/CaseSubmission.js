import { connect } from 'react-redux';
import { nextStep, previousStep, goToStep } from '../Actions/CaseSubmission';
import CaseSubmission from '../Components/CaseSubmission';

function mapStateToProps (state) {
  return {
    newCase: state.caseSubmission
  };
}

function mapDispatchToProps (dispatch) {
  return {
    nextStep: (currentStep) => nextStep(currentStep)(dispatch),
    goToStep: (newStep) => goToStep(newStep)(dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CaseSubmission);