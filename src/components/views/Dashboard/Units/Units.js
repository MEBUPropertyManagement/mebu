import React, {Component, Fragment} from 'react';
import NewUnit from './NewUnit/NewUnit';
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
      const prop = selectedProperty;
      property =
        selectedProperty.occupiedUnits &&
        selectedProperty.occupiedUnits.map(unit => <NewUnit key={unit.unitid} unit={unit} />);
    }

    return (
      <div className="Units container">
        <div className="Units__titles">
          <p>Bath</p>
          <p>Bed</p>
          <p>Occupied</p>
          <p>Rent</p>
          <p>Roomnum</p>
          <p>Size</p>
          <button>Add Unit</button>
        </div>
        {property}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.propertyReducer,
});

export default connect(mapStateToProps, {getPropertyById})(Units);
