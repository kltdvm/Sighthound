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
  ],

  info: {
    images: [],
    patientInfo: [
      {
        label: "first name",
        value: ""
      },
      {
        label: "last name",
        value: ""
      },
      {
        label: "Age Yrs",
        value: ""
      },
      {
        label: "Age Months",
        value: ""
      },
      {
        label: "sex",
        value: ""
      },
      {
        label: "species",
        value: ""
      },
      {
        label: "breed",
        value: ""
      }
    ],
    clinicalSigns: [
      {
        label: "vision",
        value: "",
        options: [
          "normal",
          "reduced",
          "absent"
        ]
      },
      {
        label: "squinting",
        value: "",
        options: [
          "absent",
          "present"
        ]
      },
      {
        label: "oscular discharge",
        value: "",
        options: [
          "absent",
          "serious",
          "mucoid",
          "purulent"
        ]
      },
      {
        label: "cloudiness",
        value: "",
        options: [
          "absent",
          "present"
        ]
      },
      {
        label: "redness",
        value: "",
        options: [
          "absent",
          "present"
        ]
      },
      {
        label: "pupil",
        value: "",
        options: [
          "normal",
          "undetermined",
          "dilated",
          "constricted"
        ]
      },
      {
        label: "durations of signs",
        value: ""
      },
      {
        label: "flouriscein retention",
        value: "",
        options: [
          "normal",
          "undetermined",
          "dilated",
          "constricted"
        ]
      },
      {
        label: "shirmer test",
        value: "",
        options: [
          "negative",
          "positive",
          "undetermined"
        ]
      },
      {
        label: "tonometry",
        value: "",
        options: [
          "negative",
          "positive",
          "undetermined"
        ]
      },
      {
        label: "other",
        value: ""
      }
    ]
  }
};

export default function (state = defaultState, action) {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case 'NEXT_STEP':
      console.log('reducer says: ', action);
      
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