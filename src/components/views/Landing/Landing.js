import React from 'react';
import {Link} from 'react-router-dom';

const Landing = () => (
  <div>
    This is the landing page.
    <Link to="/login">Login</Link>
  </div>
);

export default Landing;
