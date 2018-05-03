import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {getPropertyById} from '../../../../redux/ducks/propertyReducer';
import './Units.css';

class Units extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getPropertyById(this.props.match.params.id);
  }

  render() {
    const {selectedProperty, loading} = this.props;
    let property = <p>...loading</p>;
    if (selectedProperty && !loading) {
      console.log(selectedProperty);
      const prop = selectedProperty;
      property =
        selectedProperty.occupiedUnits &&
        selectedProperty.occupiedUnits.map(unit => (
          <Fragment>
            <p>bath: {unit.bath}</p>
            <p>bed: {unit.bed}</p>
            <p>occupied: {unit.occupied}</p>
            <p>propertyid: {unit.propertyid}</p>
            <p>rent: {unit.rent}</p>
            <p>roomnum: {unit.roomnum}</p>
            <p>size: {unit.size}</p>
            <p>unitid: {unit.unitid}</p>
          </Fragment>
        ));
    }

    return <div className="Units container">{property}</div>;
  }
}

const mapStateToProps = state => ({
  ...state.propertyReducer,
});

export default connect(mapStateToProps, {getPropertyById})(Units);
