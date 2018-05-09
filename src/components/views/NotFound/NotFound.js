import React from 'react';
import {withRouter} from 'react-router-dom';
import './NotFound.css';

const NotFound = props => (
  <div className="NotFound">
    <p className="NotFound__text">404 - Not Found</p>
    <button onClick={() => props.history.push('/')} className="NotFound__button">
      Back To MEBU
    </button>
  </div>
);

export default withRouter(NotFound);
