import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {addUnits, getUnits} from '../../../../../redux/ducks/unitReducer';
import NewUnit from './NewUnit/NewUnit';

class AddUnits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      newUnits: [],
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.newUnitUpdate = this.newUnitUpdate.bind(this);
    this.addAllHandler = this.addAllHandler.bind(this);
  }

  onChangeHandler(e) {
    const newUnitsCopy = [...this.state.newUnits];
    const diff = +e.target.value - this.state.newUnits.length;
    if (diff >= 0) {
      for (let i = 0; i < diff; i += 1) {
        newUnitsCopy.push({
          size: '',
          occupied: false,
          bed: '',
          bath: '',
          roomnum: '',
          rent: '',
        });
      }
    } else {
      newUnitsCopy.splice(diff);
    }
    this.setState({count: e.target.value >= 0 && e.target.value, newUnits: newUnitsCopy});
  }

  newUnitUpdate(index, prop, value) {
    const newUnitsCopy = [...this.state.newUnits];
    newUnitsCopy[index][prop] = value;
    this.setState({newUnits: newUnitsCopy});
  }

  addAllHandler() {
    const promises = [];
    const filteredArray = this.state.newUnits.filter((unit) => {
      if (unit.size && unit.bed && unit.bath && unit.roomnum && unit.rent) {
        promises.push(axios.post('/unit/add', {...unit, propertyid: this.props.match.params.id}));
      } else {
        return unit;
      }
      return null;
    });
    axios.all(promises).then(() => {
      this.setState({newUnits: filteredArray, count: 0});
      this.props.getUnits(this.props.match.params.id);
      this.props.hide();
    });
  }

  render() {
    const {count, newUnits} = this.state;
    const newUnitsDisplay = [];
    for (let i = 0; i < count; i += 1) {
      newUnitsDisplay.push(<NewUnit index={i} updateModel={this.newUnitUpdate} />);
    }

    return (
      <div>
        <input onChange={this.onChangeHandler} value={count} type="number" />
        <table>
          <thead>
            <tr>
              <th>Bath</th>
              <th>Bed</th>
              <th>Occupied</th>
              <th>Rent</th>
              <th>Room #</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>{newUnitsDisplay}</tbody>
        </table>
        <button onClick={this.addAllHandler}>Add All</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({...state.unitReducer});

export default withRouter(connect(mapStateToProps, {addUnits, getUnits})(AddUnits));
