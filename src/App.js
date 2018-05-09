import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getUser} from './redux/ducks/userReducer';
import Routes from './routes';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    console.log('App.js :: getUser :: ', this.props.current_user);
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

const mapStateToProps = state => ({...state.userReducer});

export default withRouter(connect(mapStateToProps, {getUser})(App));
