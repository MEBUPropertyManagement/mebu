import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/views/Landing/Landing';
import Login from './components/views/Login/Login';
import OwnerLogin from './components/views/OwnerLogin/OwnerLogin';
import OwnerRegistration from './components/views/OwnerRegistration/OwnerRegistration';
import ResidentLogin from './components/views/ResidentLogin/ResidentLogin';
import ResidentRegistration from './components/views/ResidentRegistration/ResidentRegistration';

export default (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/login" exact component={Login} />
    <Route path="/login/owner/returning" component={OwnerLogin} />
    <Route path="/login/owner/new" component={OwnerRegistration} />
    <Route path="/login/resident/returning" component={ResidentLogin} />
    <Route path="/login/resident/new" component={ResidentRegistration} />
  </Switch>
);
