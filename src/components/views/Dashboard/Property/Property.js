import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPropertyById} from '../../../../redux/ducks/propertyReducer';

import './Property.css';

class Property extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getPropertyById(this.props.match.params.id);
  }

  render() {
    let property = <p>...loading</p>;
    if (this.props.selectedProperty && !this.props.loading) {
      console.log(this.props.selectedProperty);
      const prop = this.props.selectedProperty;
      property = (
        <div>
          <h2 className="Property-name">{prop.name}</h2>
          <p>Address: {prop.address}</p>
          <p>Units: {prop.units}</p>
          <p>Value: {prop.value}</p>
          <p>Expenses: {prop.expenses}</p>
          <img className="Property__photo" src={prop.photourl} alt="apartment" />
        </div>
      );
    }

    return <div>{property}</div>;
  }
}

const mapStateToProps = state => ({
  ...state.propertyReducer,
});

export default connect(mapStateToProps, {getPropertyById})(Property);
