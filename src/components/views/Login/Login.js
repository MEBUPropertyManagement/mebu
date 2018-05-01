import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

const Login = () => (
  <div className="Login">
    Title
    <div className="Login__links">
      <Link className="Login__link Login__link--owner" to="/login/owner/returning">
        Owner
      </Link>
      <Link className="Login__link Login__link--resident" to="/login/resident/returning">
        Resident
      </Link>
    </div>
  </div>
);

export default Login;
