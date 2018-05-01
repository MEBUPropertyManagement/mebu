import React, {Component} from 'react';
import {connect} from 'react-redux';

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
    e.preventDefault();
  }

  onChangeHandler(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    console.log(this.state);
    const {
      name, address, value, units, expenses, photourl,
    } = this.state;

    return (
      <div>
        This is the AddProperty route within Dashboard.
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
          <button>Add Property</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.userReducer,
});

export default connect(mapStateToProps, {addProperty})(AddProperty);
