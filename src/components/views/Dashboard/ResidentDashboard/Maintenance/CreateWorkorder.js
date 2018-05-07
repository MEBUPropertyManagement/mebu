import React, {Component} from 'react';

class CreateWorkorder extends Component {
  constructor() {
    super();

    this.state = {
      dateStart: '',
      content: '',
      urgency: '',
    };
  }
  render() {
    return (
      <div>
        <h1>
        CreateWorkorder
        </h1>
        <form>
          <label> Comment </label>
          <textarea />
        </form>
      </div>
    );
  }
}

export default CreateWorkorder;
