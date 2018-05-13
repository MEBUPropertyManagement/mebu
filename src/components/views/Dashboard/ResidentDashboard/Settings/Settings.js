import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateResident} from '../../../../../redux/ducks/userReducer';
import './Settings.css';
import Loading from '../../../../Loading/Loading';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.current_user.email,
      firstname: this.props.current_user.firstName,
      lastname: this.props.current_user.lastName,
      disabled: true,
      loading: false,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onEditHandler = this.onEditHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onEditHandler() {
    const {
      email, firstname, lastname, disabled,
    } = this.state;

    if (!disabled && email && firstname && lastname) {
      this.setState({loading: true});
      return axios
        .put('/residents/updateResident', {email, firstName: firstname, lastName: lastname})
        .then((response) => {
          console.log(response.data.response);
          const {email, firstname, lastname} = response.data.response;
          this.props.updateResident(email, firstname, lastname);
          this.setState({disabled: !this.state.disabled, loading: false});
        })
        .catch(err => err);
    }

    this.setState({
      disabled: !this.state.disabled,
    });
  }

  render() {
    const {
      email, firstname, lastname, disabled, loading,
    } = this.state;
    return (
      <div className="Resident-Settings">
        <div className="ResSettings-title">Update My Info</div>
        <div className="ResSettings__form">
          <label className="ResSettings-label" htmlFor="email">
            <span className="Settings__label-text">Email</span>
            <input
              onChange={this.onChangeHandler}
              className="ResSettings__input Settings__input--email"
              value={email}
              name="email"
              type="email"
              disabled={disabled ? 'disabled' : ''}
            />
          </label>
          <label className="ResSettings-label" htmlFor="firstname">
            <span className="Settings__label-text">First Name</span>
            <input
              onChange={this.onChangeHandler}
              className="ResSettings__input Settings__input--firstname"
              value={firstname}
              name="firstname"
              type="text"
              disabled={disabled ? 'disabled' : ''}
            />
          </label>
          <label className="ResSettings-label" htmlFor="lastname">
            <span className="Settings__label-text">Last Name</span>
            <input
              onChange={this.onChangeHandler}
              className="ResSettings__input Settings__input--lastname"
              value={lastname}
              name="lastname"
              type="text"
              disabled={disabled ? 'disabled' : ''}
            />
          </label>
          <button style={{display: 'none'}} />
        </div>
        <button className="ResSettings-button" onClick={this.onEditHandler}>
          {disabled ? 'Edit' : 'Save'} Profile
        </button>
        {loading && <Loading />}
      </div>
    );
  }
}

const mapStateToProps = state => ({...state.userReducer});

export default connect(mapStateToProps, {updateResident})(Settings);
