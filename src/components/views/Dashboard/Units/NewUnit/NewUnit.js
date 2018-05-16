import React, {Component, Fragment} from 'react';
import axios from 'axios';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getPropertyById} from '../../../../../redux/ducks/propertyReducer';
import './NewUnit.css';

class NewUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bath: this.props.unit.bath || '',
      bed: this.props.unit.bed || '',
      occupied: this.props.unit.occupied || false,
      rent: this.props.unit.rent || '',
      roomnum: this.props.unit.roomnum || '',
      size: this.props.unit.size || '',
      editing: this.props.editing,
      creating: this.props.creating,
      unitid: this.props.unit.unitid || 0,
      propertyid: this.props.unit.propertyid || 0,
      index: this.props.index || -1,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onEditHandler = this.onEditHandler.bind(this);
  }

  onChangeHandler(e) {
    const {target} = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const {name} = target;
    this.setState({[name]: value});
  }

  onEditHandler() {
    if (this.state.editing && this.state.creating) {
      axios
        .post('/unit/add', {...this.state, propertyid: this.props.match.params.id})
        .then((response) => {
          this.props.getPropertyById(response.data[0].propertyid);
        });
    } else if (this.state.editing) {
      const propertyid = this.props.unit.propertyid
        ? this.props.unit.propertyid
        : this.state.propertyid;
      const unitid = this.props.unit.unitid ? this.props.unit.unitid : this.state.unitid;
      axios
        .post('/unit/update', {
          ...this.state,
          propertyid,
          unitid,
        })
        .then((response) => {
          this.props.getPropertyById(response.data.response[0].propertyid);
        });
    }
    this.setState(prevState => ({editing: this.state.creating ? true : !prevState.editing}));
  }

  render() {
    const {
      bath, bed, occupied, rent, roomnum, size,
    } = this.props.unit;

    const {editing} = this.state;

    const display = editing ? (
      <Fragment>
        <tr>
          <td>
            <input
              placeholder="# Bathrooms"
              value={this.state.bath || bath}
              className="NewUnit__input"
              required
              onChange={this.onChangeHandler}
              name="bath"
              type="number"
            />
          </td>
          <td>
            <input
              placeholder="# Bedrooms"
              value={this.state.bed || bed}
              className="NewUnit__input"
              required
              onChange={this.onChangeHandler}
              name="bed"
              type="number"
            />
          </td>
          <td>
            <input
              checked={this.state.occupied}
              className="NewUnit__input"
              onChange={this.onChangeHandler}
              name="occupied"
              type="checkbox"
              id="cbx"
              style={{display: 'none'}}
            />
          </td>
          <td>
            <label htmlFor="cbx" className="check">
              <svg width="18px" height="18px" viewBox="0 0 18 18">
                <path d="M1,9 L1,3.5 C1,2.11928813 2.11928813,1 3.5,1 L14.5,1 C15.8807119,1 17,2.11928813 17,3.5 L17,14.5 C17,15.8807119 15.8807119,17 14.5,17 L3.5,17 C2.11928813,17 1,15.8807119 1,14.5 L1,9 Z" />
                <polyline points="1 9 7 14 15 4" />
              </svg>
            </label>
          </td>
          <td>
            <input
              placeholder="$Rent"
              value={this.state.rent || rent}
              className="NewUnit__input"
              required
              onChange={this.onChangeHandler}
              name="rent"
              type="number"
            />
          </td>
          <td>
            <input
              placeholder="Room #"
              value={this.state.roomnum || roomnum}
              className="NewUnit__input"
              required
              onChange={this.onChangeHandler}
              name="roomnum"
              type="number"
            />
          </td>
          <td>
            <input
              placeholder="Size in sq ft."
              value={this.state.size || size}
              className="NewUnit__input"
              required
              onChange={this.onChangeHandler}
              name="size"
              type="number"
            />
          </td>
          <td>
            <button onClick={this.onEditHandler}>{editing ? 'Save' : 'Edit'}</button>
          </td>
        </tr>
      </Fragment>
    ) : (
      <Fragment>
        <tr>
          <td>
            <Link
              className="Link__none"
              to={`/owner/dashboard/property/${this.state.propertyid}/units/${
                this.state.unitid
              }/residents`}
            >
              <p>{this.state.bath}</p>
            </Link>
          </td>
          <td>
            <Link
              className="Link__none"
              to={`/owner/dashboard/property/${this.state.propertyid}/units/${
                this.state.unitid
              }/residents`}
            >
              <p>{this.state.bed}</p>
            </Link>
          </td>
          <td>
            <Link
              className="Link__none"
              to={`/owner/dashboard/property/${this.state.propertyid}/units/${
                this.state.unitid
              }/residents`}
            >
              <p>{this.state.occupied ? 'Yes' : 'No'}</p>
            </Link>
          </td>
          <td>
            <Link
              className="Link__none"
              to={`/owner/dashboard/property/${this.state.propertyid}/units/${
                this.state.unitid
              }/residents`}
            >
              <p>{this.state.rent}</p>
            </Link>
          </td>
          <td>
            <Link
              className="Link__none"
              to={`/owner/dashboard/property/${this.state.propertyid}/units/${
                this.state.unitid
              }/residents`}
            >
              <p>{this.state.roomnum}</p>
            </Link>
          </td>
          <td>
            <Link
              className="Link__none"
              to={`/owner/dashboard/property/${this.state.propertyid}/units/${
                this.state.unitid
              }/residents`}
            >
              <p>{this.state.size}</p>
            </Link>
          </td>
          <td>
            <button onClick={this.onEditHandler}>{editing ? 'Save' : 'Edit'}</button>
          </td>
        </tr>
      </Fragment>
    );

    return <Fragment>{display}</Fragment>;
  }
}

export default withRouter(connect(null, {getPropertyById})(NewUnit));
