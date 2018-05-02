import React, {Component} from 'react';

class Property extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   property: {},
    // };
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.address}</p>
        <p>{this.props.units}</p>
        <p>{this.props.value}</p>
        <p>{this.props.expenses}</p>
      </div>
    );
  }
}

export default Property;
