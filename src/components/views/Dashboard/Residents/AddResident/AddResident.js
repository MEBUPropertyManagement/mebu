import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addResident} from '../../../../../redux/ducks/residentReducer';

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
  }

  render() {
    const {
      email, unitID, firstName, lastName,
    } = this.state;
    return (
      <div className="AddResident">
        <form onSubmit={this.onSubmitHandler}>
          <input
            required
            onChange={this.onChangeHandler}
            placeholder="email"
            name="email"
            value={email}
            type="email"
          />
          <input
            required
            onChange={this.onChangeHandler}
            placeholder="firstName"
            name="firstName"
            value={firstName}
            type="text"
          />
          <input
            required
            onChange={this.onChangeHandler}
            placeholder="lastName"
            name="lastName"
            value={lastName}
            type="text"
          />
          <input type="submit" value="Add Resident" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.residentReducer,
});

export default connect(mapStateToProps, {addResident})(AddResident);
