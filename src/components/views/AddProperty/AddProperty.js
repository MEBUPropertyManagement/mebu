import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {createProperty} from '../../../redux/ducks/propertyReducer';
import {logoutUser} from '../../../redux/ducks/userReducer';
import logo from '../../../images/logo_final_blue.svg';
import './AddProperty.css';

class AddProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      value: 0,
      units: 0,
      expenses: 0,
      photourl: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(e) {
    const {
      name, address, value, units, expenses, photourl,
    } = this.state;
    e.preventDefault();
    this.props.createProperty({
      name,
      address,
      value,
      units,
      expenses,
      photourl,
    });
    this.props.history.push('/owner/properties');
  }

  onChangeHandler(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onLogout() {
    console.log('logging out!');
    axios
      .get('/users/logout')
      .then((response) => {
        this.props.logoutUser();
        return this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  render() {
    const {
      name, address, value, units, expenses, photourl,
    } = this.state;

    return (
      <div className="AddProperty">
        <div className="AddProperty-navbar">
          <h2 className="AddProperty-navbar-header">Add New Property</h2>
          <button
            className="Properties__button Properties__button--logout"
            onClick={() => this.onLogout()}
          >
            Logout
          </button>
          <img className="Properties__logo" src={logo} alt="logo" />
        </div>
        <form onSubmit={this.onSubmitHandler}>
          <label htmlFor="name">
            Name
            <input
              className="AddProperty__input AddProperty__input--name"
              onChange={this.onChangeHandler}
              required
              placeholder="John Smith"
              name="name"
              maxLength="35"
              value={name}
              type="text"
            />
          </label>
          <label htmlFor="address">
            Address
            <input
              className="AddProperty__input AddProperty__input--address"
              onChange={this.onChangeHandler}
              required
              placeholder="1234 Address Blvd."
              name="address"
              value={address}
              type="text"
            />
          </label>
          <label htmlFor="value">
            Value
            <input
              className="AddProperty__input AddProperty__input--value"
              onChange={this.onChangeHandler}
              required
              placeholder="00,000"
              name="value"
              value={value}
              type="number"
            />
          </label>
          <label htmlFor="photourl">
            Photo URL
            <input
              className="AddProperty__input AddProperty__input--photourl"
              onChange={this.onChangeHandler}
              required
              placeholder="http://pathtoimage.com"
              name="photourl"
              maxLength="180"
              value={photourl}
              type="url"
            />
          </label>
          <label htmlFor="units">
            Number of Units
            <input
              className="AddProperty__input AddProperty__input--units"
              onChange={this.onChangeHandler}
              required
              placeholder="0"
              name="units"
              value={units}
              type="number"
            />
          </label>
          <label htmlFor="expenses">
            Expenses
            <input
              className="AddProperty__input AddProperty__input--expenses"
              onChange={this.onChangeHandler}
              required
              placeholder="00,000"
              name="expenses"
              value={expenses}
              type="number"
            />
          </label>
          <button className="AddProperty__button">Add Property</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.propertyReducer,
});

export default connect(mapStateToProps, {createProperty, logoutUser})(AddProperty);
