import React, {Component} from 'react';
import {connect} from 'react-redux';

import {forgotPassword} from '../../../redux/ducks/userReducer';
import logo from '../../../images/logo_final_white.svg';
import './ForgotPassword.css';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.forgotPassword(this.state.email);
    this.props.history.push('/login/owner/returning');
  }

  render() {
    return (
      <div className="ForgotPassword">
        <div className="ForgotPassword__logo-container">
          <img className="ForgotPassword__logo" src={logo} alt="logo" />
          <h3 className="ForgotPassword__logo-header">
            Owner<br />Password<br />Reset
          </h3>
        </div>
        <div className="ForgotPassword__login-container">
          <form onSubmit={this.onSubmitHandler} className="">
            <div>
              <h3 className="ForgotPassword__header">Reset Password </h3>
              <div className="ForgotPassword__subheader">Enter your email address:</div>
              <input
                className="ForgotPassword__input ForgotPassword__input--email"
                type="email"
                value={this.state.email}
                required
                autoFocus
                onChange={e => this.setState({email: e.target.value})}
                placeholder="Email Address"
              />
            </div>
            <input className="ForgotPassword__submit" type="submit" value="Submit" />
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
