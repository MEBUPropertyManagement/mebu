import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './Properties.css';
import {getProperties} from '../../../redux/ducks/propertyReducer';

class Properties extends Component {
  componentDidMount() {
    this.props.getProperties();
  }

  render() {
    const properties =
      this.props.properties[0] &&
      this.props.properties.map(property => (
        <Link key={property.propertyid} to={`/owner/dashboard/property/${property.propertyid}`}>
          <div className="">
            <img className="Properties__photo" src={property.photourl} alt="apartment" />
            <div className="Properties__name">{property.name}</div>
            <div className="Properties__address">{property.address}</div>
            <div className="Properties__units">{property.units}</div>
          </div>
        </Link>
      ));

    return (
      <div className="Properties">
        <div className="Properties-navbar">
          <h2 className="Properties-navbar-header">My Properties</h2>
          <Link className="Properties-navbar-addProp" to="/owner/properties/new">
            Add Property
          </Link>
        </div>
        <div className="Properties__form" />
        {properties}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.propertyReducer,
});

export default connect(mapStateToProps, {getProperties})(Properties);
