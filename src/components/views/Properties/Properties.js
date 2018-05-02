import React, {Component} from 'react';
<<<<<<< HEAD:src/components/views/Dashboard/Properties/Properties.js
// import PropertiesTable from './PropertiesTable';
import './Properties';
=======
>>>>>>> 677ae39ba73b69e931535b3345faa13d43579acc:src/components/views/Properties/Properties.js
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropertiesTable from './PropertiesTable';
import './Properties';
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
<<<<<<< HEAD:src/components/views/Dashboard/Properties/Properties.js
        <div className="">
          <div className="">{property.name}</div>
          <div className="">{property.address}</div>
          <div className="">{property.units}</div>
          <div className="">{property.value}</div>
          <div className="">{property.expenses}</div>
        </div>
      ));
=======
        <div>
          <div>{property.name}</div>
          <div>{property.address}</div>
          <div>{property.units}</div>
          <div>{property.value}</div>
          <div>{property.expenses}</div>
        </div>
      ));
    console.log(this.props.properties);
>>>>>>> 677ae39ba73b69e931535b3345faa13d43579acc:src/components/views/Properties/Properties.js

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
