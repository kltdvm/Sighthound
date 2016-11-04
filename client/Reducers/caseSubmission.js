const defaultState = {
  currentStep: 1,

  steps: [
    {
      id: 1,
      title: "Images"
    },
    {
      id: 2,
      title: "Patient Info"
    },
    {
      id: 3,
      title: "Signs"
    }
    ]
};

export default function (state = defaultState, action) {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case 'NEXT_STEP':
      newState.currentStep = action.currentStep + 1 ;
      break;
    case 'PREVIOUS_STEP':
      newState.currentStep = action.currentStep - 1;
      break;
    case 'GO_TO_STEP':
      newState.currentStep = action.newStep;
      break;
  }

  return newState;
}