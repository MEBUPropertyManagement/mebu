import React from 'react';
import {Link} from 'react-router-dom';
import './OwnerLogin';

const OwnerLogin = () => (
  <div>
    This is the owner login page.
    <div>
      Don't have an account? <Link to="/login/owner/new">Sign Up.</Link>
    </div>
  </div>
);

export default OwnerLogin;
