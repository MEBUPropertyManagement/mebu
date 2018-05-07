import React, {Component} from 'react';
import {
  getWorkorderById,
  closeWorkorderById,
  changeFilteredWorkorder,
} from '../../../../redux/ducks/workorderReducer';
import {connect} from 'react-redux';
import {isThisSecond} from 'date-fns';

class Maintenance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
    };
    this.filterWorkorder = this.filterWorkorder.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
    this.props.getWorkorderById(this.props.match.params.id);
  }

  onHandleChange(value) {
    this.setState({userInput: value});
    this.filterWorkorder();
  }

  filterWorkorder() {
    const {workorders} = this.props;
    const filterWorkorders = [];
    for (let i = 0; i < workorders.length; i++) {
      if (workorders[i].dateend.includes(this.state.userInput)) {
        filterWorkorders.push(workorders[i]);
      }
    }
    this.props.changeFilteredWorkorder(filterWorkorders);
  }

  render() {
    const workorders =
      this.props.workorders &&
      this.props.workorders[0] &&
      this.props.workorders.map((workorder) => {
        const workorderid = workorder.workorderid;
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

    const filterWorkorders =
      this.props.filterWorkorders &&
      this.props.filterWorkorders[0] &&
      this.props.filterWorkorders.map(workorder => (
        <div>
          <div>Work order ID: {workorder.workorderid}</div>
          <div>Date Start: {workorder.datestart}</div>
          <div>Date End: {workorder.dateend}</div>
          <div>Resident First Name: {workorder.firstname}</div>
          <div>Resident last Name: {workorder.lastname}</div>
          <div>Unit ID: {workorder.unitid}</div>
          <div>Work order ID: {workorder.workorderid}</div>
          <div>Content: {workorder.content}</div>
          <button onClick={() => this.props.closeWorkorderById(workorder.workorderid)}>
            Close this order
          </button>
        </div>
      ));

    return (
      <div>
        <input
          placeholder="Filter by Date End"
          onChange={e => this.onHandleChange(e.target.value)}
        />
        {this.state.userInput.length > 0 ? filterWorkorders : workorders}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state.workorderReducer,
});

export default connect(mapStateToProps, {
  getWorkorderById,
  closeWorkorderById,
  changeFilteredWorkorder,
})(Maintenance);
