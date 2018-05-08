import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginResident} from '../../../../../redux/ducks/userReducer';

class CreateWorkorder extends Component {
  constructor() {
    super();

    this.state = {
      content: '',
      urgency: '',
    };

    handleSubmit = () => {};
  }
  render() {
    return (
      <div>
        <h1>CreateWorkorder</h1>
        <form onSubmit={() => this.handleSubmit}>
          <div>
            <label> Content </label>
            <textarea />
          </div>
          <br />
          <div className="radio">
            <label>Urgency</label>
            <label>
              <input type="radio" value="option1" checked />
              Option 1
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="option2" />
              Option 2
            </label>
          </div>
          <div className="radio">
            <input type="radio" value="option3"> Option 3 </input>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateWorkorder;
