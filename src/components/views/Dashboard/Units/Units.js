import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import NewUnit from './NewUnit/NewUnit';
import {getPropertyById} from '../../../../redux/ducks/propertyReducer';
import './Units.css';

class Units extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUnits: [],
      savedUnits: [],
    };
    this.onAddHandler = this.onAddHandler.bind(this);
    this.onRemoveHandler = this.onRemoveHandler.bind(this);
    this.onFromArrayDelete = this.onFromArrayDelete.bind(this);
  }
  componentDidMount() {
    console.log(this.props);
    this.props.getPropertyById(this.props.match.params.id);
  }

  onAddHandler() {
    const arrCopy = this.state.newUnits.slice();
    arrCopy.push(<NewUnit
      creating
      editing
      unit={{
          bath: 0,
          bed: 0,
          occupied: true,
          rent: 0,
          roomnum: 0,
          size: 0,
        }}
    />);
    this.setState({newUnits: arrCopy});
  }

  onRemoveHandler() {
    if (this.state.newUnits.length > 0) {
      const arrCopy = this.state.newUnits.slice();
      arrCopy.pop();
      this.setState({newUnits: arrCopy});
    }
  }

  onFromArrayDelete(index) {
    const {newUnits, savedUnits} = this.state;
    console.log('index: ', index);
    if (newUnits.length > 0) {
      // const newUnitsCopy = this.state.newUnits.slice();
      const newUnitsCopy = [...newUnits];
      const saved = newUnitsCopy.splice(index, 1);
      const savedUnitsCopy = [...savedUnits];
      savedUnitsCopy.push(saved[0]);

      // const deleted = this.state.newUnits[index];
      // const arrCopy = this.state.newUnits.slice().splice(index, 1);
      // console.log('deleted: ', deleted);
      this.setState({newUnits: newUnitsCopy, savedUnits: savedUnitsCopy});
    }
  }

  render() {
    const {selectedProperty, loading} = this.props;
    const {newUnits, savedUnits} = this.state;
    let property = <p>...loading</p>;
    if (selectedProperty && !loading) {
      property =
        selectedProperty.occupiedUnits &&
        selectedProperty.occupiedUnits.map(unit => (
          <NewUnit index={-1} creating={false} editing={false} key={unit.unitid} unit={unit} />
        ));
    }
    const newUnitDisplay =
      newUnits.length > 0 &&
      newUnits.map((newUnit, index) => (
        <NewUnit
          remove={this.onFromArrayDelete}
          key={index}
          index={index}
          creating
          editing
          unit={{
            bath: 0,
            bed: 0,
            occupied: true,
            rent: 0,
            roomnum: 0,
            size: 0,
          }}
        />
      ));
    const savedUnitsDisplay = savedUnits.length > 0 && savedUnits.map(unit => unit);
    console.log(savedUnitsDisplay);
    return (
      <div className="Units container">
        <div className="Units__titles">
          <p>Bath</p>
          <p>Bed</p>
          <p>Occupied</p>
          <p>Rent</p>
          <p>Roomnum</p>
          <p>Size</p>
          <div>
            <button onClick={this.onAddHandler}>Add</button>
            <button onClick={this.onRemoveHandler}>Remove</button>
          </div>
        </div>
        {newUnitDisplay}
        {savedUnitsDisplay}
        {property}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.propertyReducer,
});

export default connect(mapStateToProps, {getPropertyById})(Units);
