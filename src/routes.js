import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/views/Landing/Landing';
import Login from './components/views/Login/Login';
import OwnerLogin from './components/views/OwnerLogin/OwnerLogin';
import OwnerRegistration from './components/views/OwnerRegistration/OwnerRegistration';

export default (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/login" exact component={Login} />
    <Route path="/login/owner/returning" component={OwnerLogin} />
    <Route path="/login/owner/new" component={OwnerRegistration} />
  </Switch>
);
