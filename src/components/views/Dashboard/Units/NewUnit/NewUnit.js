import React, {Component, Fragment} from 'react';
import './NewUnit.css';

class NewUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bath: this.props.unit.bath,
      bed: this.props.unit.bed,
      occupied: this.props.unit.occupied,
      propertyid: this.props.unit.propertyid,
      rent: this.props.unit.rent,
      roomnum: this.props.unit.roomnum,
      size: this.props.unit.size,
      unitid: this.props.unit.unitid,
      editing: this.props.unit.editing,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onEditHandler = this.onEditHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onEditHandler() {
    this.setState(prevState => ({editing: !prevState.editing}));
  }

  render() {
    const {
      bath, bed, occupied, propertyid, rent, roomnum, size, unitid,
    } = this.props.unit;

    const {editing} = this.state;

    const display = editing ? (
      <Fragment>
        <input
          value={this.state.bath || bath}
          className="NewUnit__input"
          required
          onChange={this.onChangeHandler}
          name="bath"
          type="number"
        />
        <input
          value={this.state.bed || bed}
          className="NewUnit__input"
          required
          onChange={this.onChangeHandler}
          name="bed"
          type="number"
        />
        <input
          value={this.state.occupied || occupied}
          className="NewUnit__input"
          required
          onChange={this.onChangeHandler}
          name="occupied"
          type="text"
        />
        <input
          value={this.state.propertyid || propertyid}
          className="NewUnit__input"
          required
          onChange={this.onChangeHandler}
          name="propertyid"
          type="text"
        />
        <input
          value={this.state.rent || rent}
          className="NewUnit__input"
          required
          onChange={this.onChangeHandler}
          name="rent"
          type="number"
        />
        <input
          value={this.state.roomnum || roomnum}
          className="NewUnit__input"
          required
          onChange={this.onChangeHandler}
          name="roomnum"
          type="number"
        />
        <input
          value={this.state.size || size}
          className="NewUnit__input"
          required
          onChange={this.onChangeHandler}
          name="size"
          type="number"
        />
        <input
          value={this.state.unitid || unitid}
          className="NewUnit__input"
          required
          onChange={this.onChangeHandler}
          name="unitid"
          type="number"
        />
      </Fragment>
    ) : (
      <Fragment>
        <p>{bath}</p>
        <p>{bed}</p>
        <p>{occupied}</p>
        <p>{propertyid}</p>
        <p>{rent}</p>
        <p>{roomnum}</p>
        <p>{size}</p>
        <p>{unitid}</p>
      </Fragment>
    );

    return (
      <div className="NewUnit">
        {display}
        <button onClick={this.onEditHandler}>{editing ? 'Save' : 'Edit'}</button>
      </div>
    );
  }
}

export default NewUnit;
