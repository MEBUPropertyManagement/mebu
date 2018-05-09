import React from 'react';
import {withRouter} from 'react-router-dom';

import './NotLoggedIn.css';

const NotLoggedIn = props => (
  <div className="NotLoggedIn">
    <p className="NotLoggedIn__text">You have been logged out.</p>
    <button onClick={() => props.history.push('/')} className="NotLoggedIn__button">
        Login
    </button>
  </div>
);

export default withRouter(NotLoggedIn);
