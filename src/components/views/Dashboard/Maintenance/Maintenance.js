import React, {Component} from 'react';
import {getWorkorderById, closeWorkorderById} from '../../../../redux/ducks/workorderReducer';
import {connect} from 'react-redux';
import {isThisSecond} from 'date-fns';

class Maintenance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      fiteredArray: [],
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.props.getWorkorderById(this.props.match.params.id);
  }

  render() {
    const workorders =
      this.props.workorders &&
      this.props.workorders[0] &&
      this.props.workorders.map((workorder) => {
        const workorderid = workorder.workorderid;
        console.log(workorder);
        return (
          <div>
            <div>Work order ID: {workorder.workorderid}</div>
            <div>Date Start: {workorder.datestart}</div>
            <div>Date End: {workorder.dateend}</div>
            <div>Resident First Name: {workorder.firstname}</div>
            <div>Resident last Name: {workorder.lastname}</div>
            <div>Unit ID: {workorder.unitid}</div>
            <div>Work order ID: {workorder.workorderid}</div>
            <div>Content: {workorder.content}</div>
            <button onClick={() => this.props.closeWorkorderById(workorderid)}>
              Close this order
            </button>
          </div>
        );
      });
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

export default connect(mapStateToProps, {getWorkorderById, closeWorkorderById})(Maintenance);
