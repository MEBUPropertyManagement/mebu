import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Authentication Routes
import Landing from './components/views/Landing/Landing';
import OwnerLogin from './components/views/OwnerLogin/OwnerLogin';
import OwnerRegistration from './components/views/OwnerRegistration/OwnerRegistration';
import ResidentLogin from './components/views/ResidentLogin/ResidentLogin';
import ResidentRegistration from './components/views/ResidentRegistration/ResidentRegistration';

// Owner Dashboard Routes
import AddProperty from './components/views/AddProperty/AddProperty';
import Properties from './components/views/Properties/Properties';
import Dashboard from './components/views/Dashboard/Dashboard';
import Property from './components/views/Dashboard/Property/Property';
import Units from './components/views/Dashboard/Units/Units';
import Metrics from './components/views/Dashboard/Metrics/Metrics';
import Residents from './components/views/Dashboard/Residents/Residents';
import Maintenance from './components/views/Dashboard/Maintenance/Maintenance';
import Settings from './components/views/Dashboard/Settings/Settings';
import AddResident from './components/views/Dashboard/Residents/AddResident/AddResident';
import ResidentsByUnit from './components/views/Dashboard/Units/ResidentsByUnit/ResidentsByUnit';

// Resident Dashboard Routes
import ResidentContacts from './components/views/Dashboard/ResidentDashboard/Contacts/Contacts';
import ResidentPayBills from './components/views/Dashboard/ResidentDashboard/Billing/History/BillingHistory';
import ResidentBillingHistory from './components/views/Dashboard/ResidentDashboard/Billing/Pay/PayBills';
import ResidentCreateWorkorder from './components/views/Dashboard/ResidentDashboard/Maintenance/CreateWorkorder';
import ResidentWorkorderHistory from './components/views/Dashboard/ResidentDashboard/Maintenance/WorkorderHistory';

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
            <Route exact path="/owner/dashboard/property/:id" component={Property} />
            <Route exact path="/owner/dashboard/property/:id/units" component={Units} />
            <Route path="/owner/dashboard/property/:id/units/:unitid" component={ResidentsByUnit} />
            <Route path="/owner/dashboard/property/:id/metrics" component={Metrics} />
            <Route exact path="/owner/dashboard/property/:id/residents" component={Residents} />
            <Route path="/owner/dashboard/property/:id/residents/new" component={AddResident} />
            <Route path="/owner/dashboard/property/:id/maintenance" component={Maintenance} />
            <Route path="/owner/dashboard/property/:id/settings" component={Settings} />
          </Switch>
        </Dashboard>
      )}
    />

    {/* Resident Dashboard Routes */}

    <Route
      path="/resident/dashboard/"
      render={() => (
        <Dashboard>
          <Switch>
            <Route exact path="/resident/dashboard/" component={ResidentContacts} />
            <Route path="/resident/dashboard/billing/pay" component={ResidentPayBills} />
            <Route path="/resident/dashboard/billing/history" component={ResidentBillingHistory} />
            <Route
              path="/resident/dashboard/maintenance/create"
              component={ResidentCreateWorkorder}
            />
            <Route
              path="/resident/dashboard/maintenance/history"
              component={ResidentWorkorderHistory}
            />
          </Switch>
        </Dashboard>
      )}
    />
  </Switch>
);
