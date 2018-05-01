import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/views/Landing/Landing';
import OwnerLogin from './components/views/OwnerLogin/OwnerLogin';
import OwnerRegistration from './components/views/OwnerRegistration/OwnerRegistration';
import ResidentLogin from './components/views/ResidentLogin/ResidentLogin';
import ResidentRegistration from './components/views/ResidentRegistration/ResidentRegistration';
import Dashboard from './components/views/Dashboard/Dashboard';
import AddProperty from './components/views/Dashboard/AddProperty/AddProperty';

export default (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/login/owner/returning" component={OwnerLogin} />
    <Route path="/login/owner/new" component={OwnerRegistration} />
    <Route path="/login/resident/returning" component={ResidentLogin} />
    <Route path="/login/resident/new" component={ResidentRegistration} />
    <Route
      path="/owner/dashboard"
      render={() => (
        <Dashboard>
          <Switch>
            <Route path="/owner/dashboard/properties/new" component={AddProperty} />
          </Switch>
        </Dashboard>
      )}
    />
  </Switch>
);
