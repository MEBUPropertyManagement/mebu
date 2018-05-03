import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addResident} from '../../../../../redux/ducks/residentReducer';

class AddResident extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      unitID: '',
      firstName: '',
      lastName: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.addResident({...this.state, propertyID: this.props.match.params.id});
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
            value={email}
            type="email"
          />
          <input
            required
            onChange={this.onChangeHandler}
            placeholder="unitID"
            value={unitID}
            type="number"
          />
          <input
            required
            onChange={this.onChangeHandler}
            placeholder="firstName"
            value={firstName}
            type="text"
          />
          <input
            required
            onChange={this.onChangeHandler}
            placeholder="lastName"
            value={lastName}
            type="text"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.residentReducer,
});

export default connect(mapStateToProps, {addResident})(AddResident);
