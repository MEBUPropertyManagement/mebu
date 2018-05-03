import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import './NewUnit.css';

class NewUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bath: this.props.unit.bath || 0,
      bed: this.props.unit.bed || 0,
      occupied: this.props.unit.occupied,
      rent: this.props.unit.rent || 0,
      roomnum: this.props.unit.roomnum || 0,
      size: this.props.unit.size || 0,
      editing: this.props.editing,
      creating: this.props.creating,
      unitid: this.props.unit.unitid || 0,
      propertyid: this.props.unit.propertyid || 0,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onEditHandler = this.onEditHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onEditHandler() {
    if (this.state.editing && this.state.creating) {
      axios
        .post('/unit/add', {...this.state, propertyid: this.props.match.params.id})
        .then((response) => {
          const {
            bath, bed, occupied, rent, roomnum, size, unitid, propertyid,
          } = response.data[0];
          this.setState({
            bath,
            bed,
            occupied,
            rent,
            roomnum,
            size,
            propertyid,
            unitid,
            creating: false,
          });
        });
    } else if (this.state.editing) {
      const propertyid = this.props.unit.propertyid
        ? this.props.unit.propertyid
        : this.state.propertyid;
      console.log('this.state.propertyid: ', this.state.propertyid);
      const unitid = this.props.unit.unitid ? this.props.unit.unitid : this.state.unitid;
      console.log('this.state.unitid: ', this.state.unitid);
      // const {propertyid, unitid} = this.props.unit || this.state;
      console.log('unitid: ', unitid);
      console.log('propertyid: ', propertyid);

      axios
        .post('/unit/update', {
          ...this.state,
          propertyid,
          unitid,
        })
        .then((response) => {
          const {
            bath, bed, occupied, rent, roomnum, size,
          } = response.data[0];
          this.setState({
            bath,
            bed,
            occupied,
            rent,
            roomnum,
            size,
          });
        });
    }
    this.setState(prevState => ({editing: !prevState.editing}));
  }

  render() {
    const {
      bath, bed, occupied, rent, roomnum, size,
    } = this.props.unit;

    const {editing} = this.state;

    const display = editing ? (
      <Fragment>
        <input
          placeholder="# Bathrooms"
          value={this.state.bath || bath}
          className="NewUnit__input"
          required
          onChange={this.onChangeHandler}
          name="bath"
          type="number"
        />
        <input
          placeholder="# Bedrooms"
          value={this.state.bed || bed}
          className="NewUnit__input"
          required
          onChange={this.onChangeHandler}
          name="bed"
          type="number"
        />
        <input
          placeholder="Is it occupied?"
          value={this.state.occupied || occupied}
          className="NewUnit__input"
          required
          onChange={this.onChangeHandler}
          name="occupied"
          type="text"
        />
        <input
          placeholder="$Rent"
          value={this.state.rent || rent}
          className="NewUnit__input"
          required
          onChange={this.onChangeHandler}
          name="rent"
          type="number"
        />
        <input
          placeholder="Room #"
          value={this.state.roomnum || roomnum}
          className="NewUnit__input"
          required
          onChange={this.onChangeHandler}
          name="roomnum"
          type="number"
        />
        <input
          placeholder="Size in sq ft."
          value={this.state.size || size}
          className="NewUnit__input"
          required
          onChange={this.onChangeHandler}
          name="size"
          type="number"
        />
      </Fragment>
    ) : (
      <Fragment>
        <p>{this.state.bath}</p>
        <p>{this.state.bed}</p>
        <p>{this.state.occupied ? 'Yes' : 'No'}</p>
        <p>{this.state.rent}</p>
        <p>{this.state.roomnum}</p>
        <p>{this.state.size}</p>
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

export default withRouter(NewUnit);
