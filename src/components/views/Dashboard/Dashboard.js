import React, {Component} from 'react';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const onLogout = () => {
  console.log('logging out!');
  axios.get('/users/logout').then(res => console.log(res));
};

const Dashboard = (props) => {
  const {path, params} = props.match;
  return path.includes('/owner/') ? (
    <div>
      <Link className="Link__none" to={`/owner/dashboard/property/${params.id}`}>
        <h1>Dashboard</h1>
      </Link>
      <nav>
        <Link className="Link__none" to={`/owner/dashboard/property/${params.id}/units`}>
          Units
        </Link>
        <Link className="Link__none" to={`/owner/dashboard/property/${params.id}/residents`}>
          Residents
        </Link>
        <Link className="Link__none" to={`/owner/dashboard/property/${params.id}/metrics`}>
          Metrics
        </Link>
        <Link className="Link__none" to={`/owner/dashboard/property/${params.id}/maintenance`}>
          Maintenance
        </Link>
        <Link className="Link__none" to={`/owner/dashboard/property/${params.id}/settings`}>
          Settings
        </Link>
        <Link className="Link__none" to="/owner/properties">
          Return to Properties
        </Link>
        {props.current_user.userid ? <button onClick={() => onLogout()}> Logout</button> : ''}
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

const mapStateToProps = state => ({
  ...state.userReducer,
});

export default withRouter(connect(mapStateToProps, null)(Dashboard));
