import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginResident} from '../../../../../redux/ducks/userReducer';
import axios from 'axios';

import './CreateWorkorder.css';

class CreateWorkorder extends Component {
  constructor() {
    super();

    this.state = {
      content: '',
      urgency: '',
    };
  }

  handleContent = e => {
    this.setState({
      content: e.target.value,
    });
  };

  handleUrgency = e => {
    this.setState({
      urgency: e.target.value,
    });
  };

  submit = () => {
    axios
      .post('/workorder/addWorkorder', {
        content: this.state.content,
        urgency: this.state.urgency,
      })
      .then();
  };

  render() {
    return (
      <div>
        <div className="CreateWorkorder-title">Maintenance Request</div>
        <form onSubmit={() => this.submit()}>
          <div className="radio">
            <label className="CreateWorkorder__label-1">Priority</label>
            <br />
            <div onChange={e => this.handleUrgency(e)} value={this.state.urgency}>
              <label className="CreateWorkorder__text">
                <input
                  className="CreateWorkorder__radio"
                  type="radio"
                  value="Low Priority"
                  name="Priority"
                  required
                />{' '}
                Low
              </label>
              <label className="CreateWorkorder__text">
                <input
                  className="CreateWorkorder__radio"
                  type="radio"
                  value="Routine"
                  name="Priority"
                />{' '}
                Routine
              </label>
              <label className="CreateWorkorder__text">
                <input
                  className="CreateWorkorder__radio"
                  type="radio"
                  value="Urgent"
                  name="Priority"
                />{' '}
                Urgent
              </label>
            </div>
            <br />
            <div>
              <label className="CreateWorkorder__label-2">
                Send any of your maintenance requests here.
              </label>
              <br />
              <textarea
                name="content"
                onChange={e => this.handleContent(e)}
                value={this.state.content}
                id="exampleFormControlTextarea1"
                rows="6"
                type="message"
                required
                placeholder="Enter your comments here..."
              />
            </div>
          </div>
          <button className="CreateWorkorder-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({...state.residentReducer});

export default connect(mapStateToProps, {loginResident})(CreateWorkorder);
