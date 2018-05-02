import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginOwner} from '../../../redux/ducks/userReducer';

import './OwnerLogin';

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
        This is the owner login page.
        <div>
          <input
            className="OwnerLogin__input OwnerLogin__input--email"
            value={this.state.email}
            placeholder="email"
            type="text"
            onChange={e => this.handleChangeEmail(e.target.value)}
          />
        </div>
        <div className="OwnerLogin__input OwnerLogin__input--password">
          <input
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
