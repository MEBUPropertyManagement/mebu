import React, {Component} from 'react';
import './Properties';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropertiesTable from './PropertiesTable';
import {getProperties} from '../../../redux/ducks/propertyReducer';

class Properties extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProperties();
  }

  render() {
    const properties =
      this.props.properties[0] &&
      this.props.properties.map(property => (
        <Link to={`/owner/dashboard/property/${property.propertyid}`}>
          <div className="">
            <div className="">{property.name}</div>
            <div className="">{property.address}</div>
            <div className="">{property.units}</div>
            <div className="">{property.value}</div>
            <div className="">{property.expenses}</div>
          </div>
        </Link>
      ));

    return (
      <div className="Properties">
        <div className="Properties__form" />
        {properties}
        <Link className="" to="/owner/properties/new">
          Add Property
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.propertyReducer,
});

export default connect(mapStateToProps, {getProperties})(Properties);
