import React from 'react';
import {Link} from 'react-router-dom';
import './OwnerRegistration.css';

const OwnerRegistration = () => (
  <div>
    This is the owner registration page.
    <div>
      Already have an account? <Link to="/login/owner/returning">Sign In.</Link>
    </div>
  </div>
);

export default OwnerRegistration;
