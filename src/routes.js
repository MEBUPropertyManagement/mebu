import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/views/Landing/Landing';
import OwnerLogin from './components/views/OwnerLogin/OwnerLogin';
import OwnerRegistration from './components/views/OwnerRegistration/OwnerRegistration';
import ResidentLogin from './components/views/ResidentLogin/ResidentLogin';
import ResidentRegistration from './components/views/ResidentRegistration/ResidentRegistration';
import AddProperty from './components/views/AddProperty/AddProperty';
import Properties from './components/views/Properties/Properties';
import Dashboard from './components/views/Dashboard/Dashboard';
import Property from './components/views/Dashboard/Property/Property';
import Metrics from './components/views/Dashboard/Metrics/Metrics';
import Residents from './components/views/Dashboard/Residents/Residents';
import Maintenance from './components/views/Dashboard/Maintenance/Maintenance';
import Settings from './components/views/Dashboard/Settings/Settings';
import Property from './components/views/Dashboard/Property/Property';

export default (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/login/owner/returning" component={OwnerLogin} />
    <Route path="/login/owner/new" component={OwnerRegistration} />
    <Route path="/login/resident/returning" component={ResidentLogin} />
    <Route path="/login/resident/new" component={ResidentRegistration} />
    <Route exact path="/owner/properties" component={Properties} />
    <Route path="/owner/properties/new" component={AddProperty} />
    <Route
      path="/owner/dashboard/property/:id"
      render={() => (
        <Dashboard>
          <Switch>
<<<<<<< HEAD
            <Route exact path="/owner/dashboard/properties" component={Properties} />
            <Route path="/owner/dashboard/properties/:id" component={Property} />
            <Route path="/owner/dashboard/properties/new" component={AddProperty} />
            <Route path="/owner/dashboard/metrics" component={Metrics} />
            <Route path="/owner/dashboard/maintenance" component={Maintenance} />
            <Route path="/owner/dashboard/settings" component={Settings} />
=======
            <Route exact path="/owner/dashboard/property/:id" component={Property} />
            <Route path="/owner/dashboard/property/:id/metrics" component={Metrics} />
            <Route path="/owner/dashboard/property/:id/residents" component={Residents} />
            <Route path="/owner/dashboard/property/:id/maintenance" component={Maintenance} />
            <Route path="/owner/dashboard/property/:id/settings" component={Settings} />
>>>>>>> 677ae39ba73b69e931535b3345faa13d43579acc
          </Switch>
        </Dashboard>
      )}
    />
  </Switch>
);
