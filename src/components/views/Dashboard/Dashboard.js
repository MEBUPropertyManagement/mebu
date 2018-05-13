import React, {Component, Fragment} from 'react';
import FontAwesome from 'react-fontawesome';
import axios from 'axios';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Loading from '../../Loading/Loading';
import NotLoggedIn from '../../NotLoggedIn/NotLoggedIn';
import {logoutUser} from '../../../redux/ducks/userReducer';
import logo from '../../../images/logo_final_blue.svg';
import './Dashboard.css';
import {getResidentInfo} from '../../../redux/ducks/residentReducer';

class Dashboard extends Component {
  onLogout() {
    axios
      .get('/users/logout')
      .then(() => {
        this.props.logoutUser();
        return this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  render() {
    const {current_user, loading} = this.props;
    const {path, params} = this.props.match;

    let dashboard = null;
    if (!(Object.keys(current_user).length > 0) && !loading) {
      dashboard = <NotLoggedIn />;
    } else if (path.includes('/owner/') && !loading) {
      dashboard = (
        <div className="Dashboard">
          <nav className="Dashboard__nav">
            <h1 className="Dashboard__resident-greeting">
              Welcome,
              <p className="Dashboard__resident-greeting-name">
                {current_user.firstName} {current_user.lastName}
              </p>
            </h1>
            <NavLink
              activeClassName="Dashboard__link--active"
              className="Dashboard__link Dashboard__link--back Link__none"
              to="/owner/properties"
            >
              <FontAwesome className="Dashboard__symbol--back" name="long-arrow-alt-left" />
              Back
            </NavLink>
            <NavLink
              exact
              activeClassName="Dashboard__link--active"
              className="Dashboard__link Link__none"
              to={`/owner/dashboard/property/${params.id}`}
            >
              Home
            </NavLink>
            <NavLink
              activeClassName="Dashboard__link--active"
              className="Dashboard__link Link__none"
              to={`/owner/dashboard/property/${params.id}/units`}
            >
              Units
            </NavLink>
            <NavLink
              activeClassName="Dashboard__link--active"
              className="Dashboard__link Link__none"
              to={`/owner/dashboard/property/${params.id}/residents`}
            >
              Residents
            </NavLink>
            <NavLink
              activeClassName="Dashboard__link--active"
              className="Dashboard__link Link__none"
              to={`/owner/dashboard/property/${params.id}/metrics`}
            >
              Metrics
            </NavLink>
            <NavLink
              activeClassName="Dashboard__link--active"
              className="Dashboard__link Link__none"
              to={`/owner/dashboard/property/${params.id}/maintenance`}
            >
              Maintenance
            </NavLink>
            <NavLink
              activeClassName="Dashboard__link--active"
              className="Dashboard__link Link__none"
              to={`/owner/dashboard/property/${params.id}/settings`}
            >
              Settings
            </NavLink>
            <button className="Dashboard__link" onClick={() => this.onLogout()}>
              Logout
            </button>
            <img className="Dashboard__logo" src={logo} alt="logo" />
          </nav>
          <div className="Dashboard__body">{this.props.children}</div>
        </div>
      );
    } else if (path.includes('/resident/') && !loading) {
      dashboard = (
        <div className="Dashboard">
          <nav className="Dashboard__nav">
            <h1 className="Dashboard__resident-greeting">
              Welcome,
              <p className="Dashboard__resident-greeting-name">
                {current_user.firstName} {current_user.lastName}
              </p>
            </h1>
            <NavLink
              exact
              activeClassName="Dashboard__link--active"
              className="Dashboard__link Link__none"
              to="/resident/dashboard/"
            >
              Home
            </NavLink>
            <NavLink
              activeClassName="Dashboard__link--active"
              className="Dashboard__link Link__none"
              to="/resident/dashboard/billing/pay"
            >
              Pay Bills
            </NavLink>
            <NavLink
              activeClassName="Dashboard__link--active"
              className="Dashboard__link Link__none"
              to="/resident/dashboard/billing/history"
            >
              Billing History
            </NavLink>
            <NavLink
              activeClassName="Dashboard__link--active"
              className="Dashboard__link Link__none"
              to="/resident/dashboard/maintenance/create"
            >
              Maintenance Request
            </NavLink>
            <NavLink
              activeClassName="Dashboard__link--active"
              className="Dashboard__link Link__none"
              to="/resident/dashboard/maintenance/history"
            >
              Maintenance History
            </NavLink>
            <NavLink
              activeClassName="Dashboard__link--active"
              className="Dashboard__link Link__none"
              to="/resident/dashboard/settings"
            >
              Settings
            </NavLink>
            <button className="Dashboard__link" onClick={() => this.onLogout()}>
              Logout
            </button>
            <img className="Dashboard__logo" src={logo} alt="logo" />
          </nav>
          <div className="Dashboard__body">{this.props.children}</div>
        </div>
      );
    } else {
      dashboard = <Loading />;
    }

    return <Fragment>{dashboard}</Fragment>;
  }
}

const mapStateToProps = state => ({
  ...state.userReducer,
});

export default withRouter(connect(mapStateToProps, {logoutUser, getResidentInfo})(Dashboard));
