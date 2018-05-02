import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Dashboard = props => (
  <div>
    <h1>Dashboard</h1>
    <nav>
      <Link to={`/owner/dashboard/property/${props.match.params.id}/residents`}>Residents</Link>
      <Link to={`/owner/dashboard/property/${props.match.params.id}/metrics`}>Metrics</Link>
      <Link to={`/owner/dashboard/property/${props.match.params.id}/maintenance`}>Maintenance</Link>
      <Link to={`/owner/dashboard/property/${props.match.params.id}/settings`}>Settings</Link>
    </nav>
    {props.children}
  </div>
);
export default withRouter(Dashboard);
