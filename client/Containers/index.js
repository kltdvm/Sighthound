import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { isLoggedIn, isGuest } from '../Services/AuthMiddleware';

import App from './App';
import Login from './Login';
import Dashboard from './Dashboard';
import CaseSubmission from './CaseSubmission';

export default function (store) {
  return (
      <Route component={App}>
        <Route path='/' component={Dashboard} />
        <Route path='/new' component={CaseSubmission} />
        <Route onEnter={isGuest(store)}>
          <Route path='/login' component={Login} />
        </Route>
      </Route>
  );
}