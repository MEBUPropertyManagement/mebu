import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
import './Properties.css';
import {getProperties} from '../../../redux/ducks/propertyReducer';
import {logoutUser} from '../../../redux/ducks/userReducer';

class Properties extends Component {
  componentDidMount() {
    this.props.getProperties();
  }

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
    const properties =
      this.props.properties[0] &&
      this.props.properties.map(property => (
        <Link
          className="Property-card"
          key={property.propertyid}
          to={`/owner/dashboard/property/${property.propertyid}`}
        >
          <img className="Properties__photo" src={property.photourl} alt="apartment" />
          <h3 className="Properties__name">{property.name}</h3>
          <div className="Properties-imageOverlay">
            <p className="Properties__address">{property.address}</p>
            <p className="Properties__units">Number of units: {property.units}</p>
          </div>
        </Link>
      ));

    return (
      <div className="Properties">
        <div className="Properties-navbar">
          <h2 className="Properties-navbar-header">Properties</h2>
          <Link
            className="Properties__button Properties__button--add Link__none"
            to="/owner/properties/new"
          >
            Add Property
          </Link>
          <button
            className="Properties__button Properties__button--logout"
            onClick={() => this.onLogout()}
          >
            Logout
          </button>
        </div>
        <div className="Properties__all">{properties}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.propertyReducer,
});

export default withRouter(connect(mapStateToProps, {getProperties, logoutUser})(Properties));
