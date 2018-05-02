import React, {Component} from 'react';
import {getPropertyById} from '../../../../redux/ducks/propertyReducer';
import {connect} from 'react-redux';

class Property extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPropertyById();
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

const mapStateToProps = state => ({
  ...state.propertyReducer,
});

export default connect(mapStateToProps, {getPropertyById})(Property);
