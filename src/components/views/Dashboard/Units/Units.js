import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPropertyById} from '../../../../redux/ducks/propertyReducer';

class Units extends Component {
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
          <h1>Name: {prop.name}</h1>
          <p>Address: {prop.address}</p>
          <p>Units: {prop.units}</p>
          <p>Value: {prop.value}</p>
          <p>Expenses: {prop.expenses}</p>
        </div>
      );
    }

    return <div>{property}</div>;
  }
}

const mapStateToProps = state => ({
  ...state.propertyReducer,
});

export default connect(mapStateToProps, {getPropertyById})(Units);
