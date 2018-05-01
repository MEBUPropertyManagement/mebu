import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/views/Landing/Landing';
import OwnerLogin from './components/views/OwnerLogin/OwnerLogin';
import OwnerRegistration from './components/views/OwnerRegistration/OwnerRegistration';
import Dashboard from './components/views/Dashboard/Dashboard';

export default (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/login/owner/returning" component={OwnerLogin} />
    <Route path="/login/owner/new" component={OwnerRegistration} />
    <Route path="/owner/dashboard" component={Dashboard} />
  </Switch>
);
