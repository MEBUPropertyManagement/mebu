import React, {Component} from 'react';
import {connect} from 'react-redux';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstname: '',
      lastname: '',
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  componentDidMount() {
    console.log(this.props.current_user);
  }

  onSubmitHandler(e) {
    e.preventDefault();
  }

  onChangeHandler(e) {
    const {email, firstname, lastname} = this.state;
    if (email && firstname && lastname) {
      this.setState({[e.target.name]: e.target.value});
    }
  }

  render() {
    const {email, firstname, lastname} = this.state;
    return (
      <div className="Settings">
        <form onSubmit={this.onSubmitHandler}>
          <input
            onChange={this.onChangeHandler}
            className="Settings__input Settings__input--email"
            value={email}
            name="email"
            type="email"
          />
          <input
            onChange={this.onChangeHandler}
            className="Settings__input Settings__input--firstname"
            value={firstname}
            name="firstname"
            type="text"
          />
          <input
            onChange={this.onChangeHandler}
            className="Settings__input Settings__input--lastname"
            value={lastname}
            name="lastname"
            type="text"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({...state.userReducer});

export default connect(mapStateToProps, null)(Settings);
