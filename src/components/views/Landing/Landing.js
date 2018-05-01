import React from 'react';
import {Link} from 'react-router-dom';
import './Landing.css';

const Landing = () => (
  <div className="Landing">
    This is the landing page.
    <div className="Landing__links">
      <Link className="Landing__link Landing__link--owner" to="/login/owner/returning">
        Owner Login
      </Link>
      <Link className="Landing__link Landing__link--resident" to="/">
        Resident Login
      </Link>
    </div>
  </div>
);

export default Landing;
