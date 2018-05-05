import React, {Component} from 'react';
import './ForgotPassword.css';
import {connect} from 'react-redux';
import {forgotPassword} from '../../../redux/ducks/userReducer';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onHandleChange(value) {
    this.setState({email: value});
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.forgotPassword(this.state.email);
  }

  render() {
    return (
      <div>
        <h1>Reset Password </h1>
        <div>
          Enter your email address:
          <form onSubmit={this.onSubmitHandler} className="">
            <input
              type="text"
              value={this.state.email}
              onChange={e => this.onHandleChange(e.target.value)}
              placeholder="Email Address"
            />
            <input type="submit" value="Submit" className="" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.userReducer,
});

export default connect(mapStateToProps, {forgotPassword})(ForgotPassword);
