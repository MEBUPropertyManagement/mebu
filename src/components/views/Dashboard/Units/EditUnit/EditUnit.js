import React, {Component, Fragment} from 'react';
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
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
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

  onDeleteHandler() {
    if (!this.state.editing) {
      axios.delete(`/unit/delete/${this.props.unit.unitid}`).then(() => this.props.reload());
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
    let classes = ['Unit__table-row'];
    const editDisplay = editing ? (
      <Fragment>
        <td className="EditUnit__td">
          <input
            className="EditUnit__input"
            value={this.state.bath || ''}
            onChange={this.onChangeHandler}
            placeholder="bath"
            name="bath"
            type="number"
          />
        </td>
        <td className="EditUnit__td">
          <input
            className="EditUnit__input"
            value={this.state.bed || ''}
            onChange={this.onChangeHandler}
            placeholder="bed"
            name="bed"
            type="number"
          />
        </td>
        <td className="EditUnit__td">
          <input
            checked={this.state.occupied || false}
            onChange={this.onChangeHandler}
            name="occupied"
            type="checkbox"
            id={`cbx${unitid}`}
            className="EditUnit__toggle"
            style={{display: 'none'}}
          />
          <label htmlFor={`cbx${unitid}`} className="toggle">
            <span />
          </label>
        </td>
        <td className="EditUnit__td">
          <input
            className="EditUnit__input"
            value={this.state.rent || ''}
            onChange={this.onChangeHandler}
            placeholder="rent"
            name="rent"
            type="number"
          />
        </td>
        <td className="EditUnit__td">
          <input
            className="EditUnit__input"
            value={this.state.roomnum || ''}
            onChange={this.onChangeHandler}
            placeholder="roomnum"
            name="roomnum"
            type="number"
          />
        </td>
        <td className="EditUnit__td">
          <input
            className="EditUnit__input"
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
    if (editing) {
      classes.push('EditUnit__table-row--editing');
    }
    return (
      <tr className={classes.join(' ')}>
        {editDisplay}
        <td className="EditUnit__td">
          <div className="EditUnit__buttons">
            <button
              style={{display: editing ? 'block' : 'none'}}
              className="EditUnit__button"
              onClick={this.onEditHandler}
            >
              <i className="fas fa-save" />
            </button>
            <button
              style={{display: editing ? 'none' : 'block'}}
              className="EditUnit__button"
              onClick={this.onEditHandler}
            >
              <i className="fas fa-edit" />
            </button>
            <button onClick={this.onDeleteHandler} className="EditUnit__button">
              <i className="fas fa-trash" />
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

export default EditUnit;
