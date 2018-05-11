import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addResident} from '../../../../../redux/ducks/residentReducer';
import './AddResident.css';

class AddResident extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.addResident({
      ...this.state,
      unitID: this.props.match.params.unitid,
      propertyID: this.props.match.params.id,
    });
    this.props.history.push(this.props.location.pathname.replace('/new', ''));
  }

  render() {
    const {
      email, unitID, firstName, lastName,
    } = this.state;
    return (
      <div className="AddResident">
        <h1 className="AddResident__header">Add Resident</h1>
        <form className="AddResident__form" onSubmit={this.onSubmitHandler}>
          <label className="AddResident__label">
            <span className="AddResident__label-text">email</span>
            <input
              className="AddResident__input AddResident__input--email"
              required
              onChange={this.onChangeHandler}
              placeholder="email"
              name="email"
              value={email}
              type="email"
            />
          </label>
          <label className="AddResident__label">
            <span className="AddResident__label-text">firstName</span>
            <input
              className="AddResident__input AddResident__input--firstname"
              required
              onChange={this.onChangeHandler}
              placeholder="firstName"
              name="firstName"
              value={firstName}
              type="text"
            />
          </label>
          <label className="AddResident__label">
            <span className="AddResident__label-text">lastName</span>
            <input
              className="AddResident__input AddResident__input--lastname"
              required
              onChange={this.onChangeHandler}
              placeholder="lastName"
              name="lastName"
              value={lastName}
              type="text"
            />
          </label>

          <input className="AddResident__btn" type="submit" value="Add Resident" />
          <p className="AddResident__warning">
            *New residents will only show up as a resident once <br /> they have logged in through
            the Resident Portal.
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.residentReducer,
});

export default connect(mapStateToProps, {addResident})(AddResident);
