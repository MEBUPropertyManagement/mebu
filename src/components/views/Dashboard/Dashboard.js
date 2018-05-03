import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Dashboard = (props) => {
  const {path} = props.match;

  return path.includes('/owner/') ? (
    <div>
      <Link className="Link__none" to={`/owner/dashboard/property/${props.match.params.id}`}>
        <h1>Dashboard</h1>
      </Link>
      <nav>
        <Link
          className="Link__none"
          to={`/owner/dashboard/property/${props.match.params.id}/units`}
        >
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
  ) : (
    <div>
      <Link className="Link__none" to="/resident/dashboard/">
        Contacts
      </Link>
      <Link className="Link__none" to="/resident/dashboard/billing/pay">
        Pay Bills
      </Link>
      <Link className="Link__none" to="/resident/dashboard/billing/history">
        Billing History
      </Link>
      <Link className="Link__none" to="/resident/dashboard/maintenance/create">
        Maintenance Request
      </Link>
      <Link className="Link__none" to="/resident/dashboard/maintenance/history">
        Maintenance History
      </Link>
    </div>
  );
};
export default withRouter(Dashboard);
