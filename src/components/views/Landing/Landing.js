import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Landing.css';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      left: null,
      right: null,
    };
  }
  expand(side, otherside) {
    if (this.state[side] === side) {
      return {width: '85vw', zIndex: '3'};
    } else if (this.state[side] === otherside) {
      return {width: '15vw', opacity: '0.3', zIndex: '2'};
    }
    return {width: '50vw'};
  }
  size(first, second) {
    this.setState({[first]: first, [second]: first});
  }
  leave() {
    this.setState({left: null, right: null});
  }
  render() {
    return (
      <div className="Landing">
        <div
          style={this.expand('left', 'right')}
          onMouseEnter={() => this.size('left', 'right')}
          onMouseLeave={() => this.leave()}
          className="Landing_left-owner split"
        >
          <h1 className="Landing__header">Owners</h1>
          <Link
            className="landing-button Link__none Landing_link Landing_link--owner"
            to="/login/owner/returning"
          >
            Sign In
          </Link>
        </div>
        <div
          style={this.expand('right', 'left')}
          onMouseEnter={() => this.size('right', 'left')}
          onMouseLeave={() => this.leave()}
          className="Landing_right-resident split"
        >
          <h1 className="Landing__header">Residents</h1>
          <Link
            className="landing-button Link__none Landing_link Landing_link--resident"
            to="/login/resident/returning"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
