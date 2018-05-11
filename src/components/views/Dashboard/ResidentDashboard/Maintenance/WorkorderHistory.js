import React, { Component } from "react";
import { getResidentWorkOrder } from "../../../../../redux/ducks/workorderReducer";
import { connect } from "react-redux";

import "./WorkorderHistory.css";
import './WorkorderItems'
import WorkorderItems from "./WorkorderItems";

class WorkorderHistory extends Component {
  componentDidMount() {
    this.props.getResidentWorkOrder();
  }

  render() {
    const workorders =
      this.props.workorders &&
      this.props.workorders[0] &&
      this.props.workorders.map(workorder => (
        <WorkorderItems
          workorderid={workorder.workorderid}
          datestart={workorder.datestart}
          content={workorder.content}
          dateend={workorder.dateend}
        />
      ));
    return (
      <div className="WorkorderHistory">
        <div className="WorkorderHistory-title">Service History</div>
        <table className="WorkorderHistory-table">
          <thead>
            <tr className="Residents__table-header">
              <th>Work Order ID</th>
              <th>Date Start</th>
              <th>Description</th>
              <th>Date Completed</th>
            </tr>
          </thead>
          <tbody>{workorders}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.workorderReducer
});

export default connect(mapStateToProps, { getResidentWorkOrder })(
  WorkorderHistory
);
