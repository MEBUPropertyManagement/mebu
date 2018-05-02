import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginOwner} from '../../../redux/ducks/userReducer';

import './OwnerLogin.css';

class OwnerLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeEmail(value) {
    this.setState({email: value});
  }

  handleChangePassword(value) {
    this.setState({password: value});
  }

  render() {
    if (this.props.authenticated) {
      this.props.history.push('/owner/properties');
    }

    return (
      <div className="OwnerLogin">
        <div className="logo-container">
          <h3 className="ownerlogin-logo-header">Owner Portal</h3>
        </div>
        <div className="login-container">
          <div>
            <h3 className="ownerlogin-header">Please sign into MEBU.</h3>
            <p>Enter your details below.</p>
            <input
              className="OwnerLogin__input OwnerLogin__input--email"
              value={this.state.email}
              placeholder="email"
              type="text"
              onChange={e => this.handleChangeEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              className="OwnerLogin__input OwnerLogin__input--password"
              value={this.state.password}
              placeholder="password"
              type="password"
              onChange={e => this.handleChangePassword(e.target.value)}
            />
          </div>
          <button
            className="OwnerLogin__submit"
            value={this.state.redirect}
            onClick={() => this.props.loginOwner(this.state.email, this.state.password)}
          >
            Login
          </button>
          <div className="OwnerLogin__new-user">
            Don't have an account?{' '}
            <Link className="Link__none" to="/login/owner/new">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.userReducer,
});

export default connect(mapStateToProps, {loginOwner})(OwnerLogin);
