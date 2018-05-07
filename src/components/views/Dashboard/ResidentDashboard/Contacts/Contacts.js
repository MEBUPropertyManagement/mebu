import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getResidentInfo} from '../../../../../redux/ducks/residentReducer';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      residentInfo: null,
    };
  }
  componentDidMount() {
    this.props.getResidentInfo();
  }

  render() {
    return <div />;
  }
}

const mapStateToProps = state => ({...state.residentReducer});

export default connect(mapStateToProps, {getResidentInfo})(Contacts);
