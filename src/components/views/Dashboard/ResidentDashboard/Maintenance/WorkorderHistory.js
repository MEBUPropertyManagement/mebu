import React, {Component} from 'react';
import {getWorkorderById} from '../../../../../redux/ducks/workorderReducer';
import {connect} from 'react-redux';

class WorkorderHistory extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getWorkorderById(this.props.match.params.id);
  }

  render() {
    const workorders =
      this.props.workorders &&
      this.props.workorders[0] &&
      this.props.workorders.map(workorder => (
        <div>
          <div>Work order ID: {workorder.workorderid}</div>
          <div>Date Start: {workorder.datestart}</div>
          <div>Date End: {workorder.dateend}</div>
          <div>Resident First Name: {workorder.firstname}</div>
          <div>Resident last Name: {workorder.lastname}</div>
          <div>Unit ID: {workorder.unitid}</div>
          <div>Work order ID: {workorder.workorderid}</div>
          <div>Content: {workorder.content}</div>
        </div>
      ));
    return <div>{workorders}</div>;
  }
}

const mapStateToProps = state => ({
  ...state.workorderReducer,
});

export default connect(mapStateToProps, {getWorkorderById})(WorkorderHistory);
