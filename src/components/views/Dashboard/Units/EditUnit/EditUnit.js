import React, {Component, Fragment} from 'react';
import FontAwesome from 'react-fontawesome';
import axios from 'axios';

import './EditUnit.css';

class EditUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      bath: this.props.unit.bath || '',
      bed: this.props.unit.bed || '',
      occupied: this.props.unit.occupied || false,
      rent: this.props.unit.rent || '',
      roomnum: this.props.unit.roomnum || '',
      size: this.props.unit.size || '',
      unitid: this.props.unit.unitid,
      propertyid: this.props.unit.propertyid,
    };
    this.onEditHandler = this.onEditHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onEditHandler() {
    if (this.state.editing) {
      // this.props.update({...this.state});
      axios.post('/unit/update', {...this.state}).then((response) => {
        const {
          bath, bed, occupied, rent, roomnum, size,
        } = response.data.response[0];
        this.setState({
          editing: false,
          bath,
          bed,
          occupied,
          rent,
          roomnum,
          size,
        });
      });
    } else {
      this.setState(prevState => ({editing: !prevState.editing}));
    }
  }

  onChangeHandler(event) {
    const {target} = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const {name} = target;

    this.setState({
      [name]: value,
    });
  }
  /* eslint-disable */
  render() {
    const {editing} = this.state;
    const {bath, bed, occupied, rent, roomnum, size, unitid} = this.props.unit;

    const editDisplay = editing ? (
      <Fragment>
        <td>
          <input
            value={this.state.bath || ''}
            onChange={this.onChangeHandler}
            placeholder="bath"
            name="bath"
            type="number"
          />
        </td>
        <td>
          <input
            value={this.state.bed || ''}
            onChange={this.onChangeHandler}
            placeholder="bed"
            name="bed"
            type="number"
          />
        </td>
        <td>
          <input
            checked={this.state.occupied || false}
            onChange={this.onChangeHandler}
            name="occupied"
            type="checkbox"
          />
        </td>
        <td>
          <input
            value={this.state.rent || ''}
            onChange={this.onChangeHandler}
            placeholder="rent"
            name="rent"
            type="number"
          />
        </td>
        <td>
          <input
            value={this.state.roomnum || ''}
            onChange={this.onChangeHandler}
            placeholder="roomnum"
            name="roomnum"
            type="number"
          />
        </td>
        <td>
          <input
            value={this.state.size || ''}
            onChange={this.onChangeHandler}
            placeholder="size"
            name="size"
            type="number"
          />
        </td>
      </Fragment>
    ) : (
      <Fragment>
        <td className="EditUnit__link" onClick={() => this.props.toUnit(unitid)}>
          {this.state.bath || bath}
        </td>
        <td className="EditUnit__link" onClick={() => this.props.toUnit(unitid)}>
          {this.state.bed || bed}
        </td>
        <td className="EditUnit__link" onClick={() => this.props.toUnit(unitid)}>
          {this.state.occupied || occupied ? 'Yes' : 'No'}
        </td>
        <td className="EditUnit__link" onClick={() => this.props.toUnit(unitid)}>
          {this.state.rent || rent}
        </td>
        <td className="EditUnit__link" onClick={() => this.props.toUnit(unitid)}>
          {this.state.roomnum || roomnum}
        </td>
        <td className="EditUnit__link" onClick={() => this.props.toUnit(unitid)}>
          {this.state.size || size}
        </td>
      </Fragment>
    );

    /* eslint-enable */

    return (
      <tr className="Unit__table-row">
        {editDisplay}
        <td>
          <button
            style={{display: editing ? 'block' : 'none'}}
            className="EditUnit__button"
            onClick={this.onEditHandler}
          >
            <FontAwesome name="name" />
          </button>
          <button
            style={{display: editing ? 'none' : 'block'}}
            className="EditUnit__button"
            onClick={this.onEditHandler}
          >
            <FontAwesome name="edit" />
          </button>
        </td>
      </tr>
    );
  }
}

export default EditUnit;
