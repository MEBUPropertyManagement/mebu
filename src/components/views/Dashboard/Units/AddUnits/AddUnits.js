import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {getUnits} from '../../../../../redux/ducks/unitReducer';
import NewUnit from './NewUnit/NewUnit';
import './AddUnits.css';

class AddUnits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: '',
      newUnits: [],
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.newUnitUpdate = this.newUnitUpdate.bind(this);
    this.addAllHandler = this.addAllHandler.bind(this);
  }

  onChangeHandler(e) {
    e.target.value = e.target.value > 100 ? 100 : e.target.value;
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
    if (this.state.count > 0) {
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
  }

  render() {
    const {count, newUnits} = this.state;
    const newUnitsDisplay = [];
    for (let i = 0; i < count; i += 1) {
      newUnitsDisplay.push(<NewUnit index={i} updateModel={this.newUnitUpdate} />);
    }

    return (
      <div className="AddUnits">
        <input
          className="AddUnits__input"
          onChange={this.onChangeHandler}
          value={count}
          type="number"
          max={100}
          autoFocus
          placeholder="# of Units to Add"
        />
        <table>
          {count > 0 && (
            <thead>
              <tr className="Units__table-header">
                <th>Bath</th>
                <th>Bed</th>
                <th>Occupied</th>
                <th>Rent</th>
                <th>Apt #</th>
                <th>Size</th>
              </tr>
            </thead>
          )}
          <tbody>{newUnitsDisplay}</tbody>
        </table>
        {count > 0 && (
          <button className="AddUnits__btn" onClick={this.addAllHandler}>
            Add All
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({...state.unitReducer});

export default withRouter(connect(mapStateToProps, {getUnits})(AddUnits));
