import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Dashboard = props => (
  <div>
    <Link className="Link__none" to={`/owner/dashboard/property/${props.match.params.id}`}>
      <h1>Dashboard</h1>
    </Link>
    <nav>
      <Link className="Link__none" to={`/owner/dashboard/property/${props.match.params.id}/units`}>
        Units
      </Link>
      <Link
        className="Link__none"
        to={`/owner/dashboard/property/${props.match.params.id}/residents`}
      >
        Residents
      </Link>
      <Link
        className="Link__none"
        to={`/owner/dashboard/property/${props.match.params.id}/metrics`}
      >
        Metrics
      </Link>
      <Link
        className="Link__none"
        to={`/owner/dashboard/property/${props.match.params.id}/maintenance`}
      >
        Maintenance
      </Link>
      <Link
        className="Link__none"
        to={`/owner/dashboard/property/${props.match.params.id}/settings`}
      >
        Settings
      </Link>
    </nav>
    {props.children}
  </div>
);
export default withRouter(Dashboard);
