const defaultState = {};

export default function (state = defaultState, action) {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case 'ATTEMPTING_AUTH':
      newState = { loading: true };
      break;
    case 'AUTH_SUCCESS':
      newState = { token: action.token, email: action.email };
      break;
    case 'AUTH_FAILED':
      newState = { error: action.message };
      break;
    case 'AUTH_LOGOUT':
      newState = {};
      break;
  }

  return newState;
}