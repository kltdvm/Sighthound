const defaultState = {
};

export default function (state = defaultState, action) {
  let newState;

  switch (action.type) {
    default:
      newState = Object.assign({}, state);
  }

  return newState;
}