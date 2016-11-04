import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authReducer from './auth';
import caseSubmissionReducer from './caseSubmission';
import dashboardReducer from './dashboard';

export default combineReducers({
  routing: routerReducer,
  auth: authReducer,
  dashboard: dashboardReducer,
  caseSubmission: caseSubmissionReducer
});