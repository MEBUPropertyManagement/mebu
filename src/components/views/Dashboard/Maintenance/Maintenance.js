import React, {Component} from 'react';
import {getWorkorderById, closeWorkorderById} from '../../../../redux/ducks/workorderReducer';
import {connect} from 'react-redux';

class Maintenance extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   workorderid: '',
    // };
  }

  componentDidMount() {
    console.log(this.props);
    this.props.getWorkorderById(this.props.match.params.id);
  }

  closeWorkorderHandler() {
    console.log(this.props);
    // this.props.closeWorkorderHandler(this.props.match.params.id);
  }

  render() {
    const workorders =
      this.props.workorders &&
      this.props.workorders[0] &&
      this.props.workorders.map(workorder => (
        <div>
          <div>Work order ID: {workorder.workorderid}</div>
          <div>Resident First Name: {workorder.firstname}</div>
          <div>Resident last Name: {workorder.lastname}</div>
          <div>Unit ID: {workorder.unitid}</div>
          <div>Work order ID: {workorder.workorderid}</div>
          <div>Content: {workorder.content}</div>
        </div>
      ));
    return (
      <div>
        <div>{workorders}</div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state.workorderReducer,
});

export default connect(mapStateToProps, {getWorkorderById})(Maintenance);
