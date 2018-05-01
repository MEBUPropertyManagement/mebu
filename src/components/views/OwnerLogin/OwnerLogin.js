import React, {Component} from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import {timingSafeEqual} from 'crypto';
import {loginOwner} from '../../../redux/ducks/users';
import {connect} from 'react-redux';

import './OwnerLogin';

class OwnerLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      authenticated: false,
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }

  handleChangeEmail(value) {
    this.setState({email: value});
  }

  handleChangePassword(value) {
    this.setState({password: value});
  }

  render() {
    return (
      <div>
        This is the owner login page.
        <div>
          <input
            value={this.state.email}
            placeholder="email"
            className=""
            type="text"
            onChange={e => this.handleChangeEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            value={this.state.password}
            placeholder="password"
            className=""
            type="password"
            onChange={e => this.handleChangePassword(e.target.value)}
          />
        </div>
        <button
          value={this.state.redirect}
          className=""
          onClick={() => this.props.loginOwner(this.state.email, this.state.password)}
        >
          Login
        </button>
        <div>
          Don't have an account? <Link to="/login/owner/new">Sign Up.</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.userReducer,
});

export default connect(mapStateToProps, {loginOwner})(OwnerLogin);
