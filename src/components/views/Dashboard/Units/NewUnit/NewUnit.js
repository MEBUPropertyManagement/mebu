import React, {Component, Fragment} from 'react';
import axios from 'axios';
import './NewUnit.css';

class NewUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bath: this.props.unit.bath,
      bed: this.props.unit.bed,
      occupied: this.props.unit.occupied,
      rent: this.props.unit.rent,
      roomnum: this.props.unit.roomnum,
      editing: this.props.unit.editing,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onEditHandler = this.onEditHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onEditHandler() {
    if (this.state.editing) {
      const {propertyid, unitid, size} = this.props.unit;
      axios
        .post('/unit/update', {
          ...this.state,
          propertyid,
          unitid,
          size,
        })
        .then((response) => {
          console.log('response.data: ', response.data);
          const {
            bath, bed, occupied, rent, roomnum,
          } = response.data[0];
          this.setState({
            bath,
            bed,
            occupied,
            rent,
            roomnum,
          });
        });
    }
    this.setState(prevState => ({editing: !prevState.editing}));
  }

  render() {
    console.log(this.state);
    const {
      bath, bed, occupied, rent, roomnum, size,
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
        <p>{size}</p>
      </Fragment>
    ) : (
      <Fragment>
        <p>{this.state.bath}</p>
        <p>{this.state.bed}</p>
        <p>{this.state.occupied ? 'Yes' : 'No'}</p>
        <p>{this.state.rent}</p>
        <p>{this.state.roomnum}</p>
        <p>{size}</p>
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
