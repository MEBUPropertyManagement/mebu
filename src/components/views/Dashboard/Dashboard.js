import React, {Component} from 'react';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser} from '../../../redux/ducks/userReducer';

class Dashboard extends Component {
  onLogout() {
    console.log('logging out!');
    axios
      .get('/users/logout')
      .then((response) => {
        this.props.logoutUser();
        return this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  render() {
    const {path, params} = this.props.match;
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
          {this.props.current_user.userid ? (
            <button onClick={() => this.onLogout()}> Logout</button>
          ) : (
            ''
          )}
        </nav>
        {this.props.children}
      </div>
    ) : (
      <div>
        <nav>
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
        </nav>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.userReducer,
});

export default withRouter(connect(mapStateToProps, {logoutUser})(Dashboard));
