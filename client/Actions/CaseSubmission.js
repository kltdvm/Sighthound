

export function nextStep (currentStep) {
  return function (dispatch) {
    dispatch({ type: 'NEXT_STEP', currentStep });
  };
}

export function previousStep (currentStep) {
  return function (dispatch) {
    dispatch({ type: 'PREVIOUS_STEP', currentStep });
  };
}

export function goToStep (newStep) {
  return function (dispatch) {
    dispatch({ type: 'GO_TO_STEP', newStep });
  };
}