import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginResident} from '../../../redux/ducks/userReducer';

import './ResidentLogin';

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
        This is the Resident login page.
        <div>
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
            className="ResidentLogin__input ResidentLogin__input--email"
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
          Don't have an account? <Link to="/login/resident/new">Sign Up.</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.userReducer,
});

export default connect(mapStateToProps, {loginResident})(ResidentLogin);
