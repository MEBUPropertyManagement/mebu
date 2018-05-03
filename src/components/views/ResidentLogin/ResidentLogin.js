import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginResident} from '../../../redux/ducks/userReducer';

import './ResidentLogin.css';

class ResidentLogin extends Component {
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
      this.props.history.push('/');
    }

    return (
      <div className="ResidentLogin">
        <div className="login-container">
          <div>
            <h3 className="residentlogin-header">Please sign into MEBU.</h3>
            <p>Enter your details below.</p>
            <input
              value={this.state.email}
              placeholder="email"
              className="ResidentLogin__input ResidentLogin__input--email"
              type="text"
              onChange={e => this.handleChangeEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              className="ResidentLogin__input ResidentLogin__input--password"
              value={this.state.password}
              placeholder="password"
              type="password"
              onChange={e => this.handleChangePassword(e.target.value)}
            />
          </div>
          <button
            className="ResidentLogin__submit"
            value={this.state.redirect}
            onClick={() => this.props.loginResident(this.state.email, this.state.password)}
          >
            Login
          </button>
          <div className="ResidentLogin__new-user">
            Don't have an account?{' '}
            <Link className="Link__none" to="/login/resident/new">
              Get Started
            </Link>
          </div>
        </div>
        <div className="logo-container">
          <h3 className="ownerlogin-logo-header">Resident Portal</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.userReducer,
});

export default connect(mapStateToProps, {loginResident})(ResidentLogin);
