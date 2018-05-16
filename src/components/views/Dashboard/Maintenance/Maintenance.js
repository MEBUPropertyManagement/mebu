import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getWorkorderById, closeWorkorderById} from '../../../../redux/ducks/workorderReducer';

import Workorder from './Workorder';
import './Maintenance.css';

class Maintenance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'all',
    };
  }

  componentDidMount() {
    this.props.getWorkorderById(this.props.match.params.id);
  }

  closeWorkorder = id => {
    this.props.closeWorkorderById(id);
    this.props.getWorkorderById(this.props.match.params.id);
  };

  render() {
    const open = this.props.workorders.filter(workorder => !workorder.dateend).map(order => {
      const {workorderid, datestart, dateend, firstname, lastname, unitid, content} = order;
      return (
        <Workorder
          workorderid={workorderid}
          datestart={datestart}
          dateend={dateend}
          firstname={firstname}
          lastname={lastname}
          unitid={unitid}
          content={content}
          close={this.closeWorkorder}
        />
      );
    });

    const closed = this.props.workorders.filter(workorder => workorder.dateend).map(order => {
      const {workorderid, datestart, dateend, firstname, lastname, unitid, content} = order;
      return (
        <Workorder
          workorderid={workorderid}
          datestart={datestart}
          dateend={dateend}
          firstname={firstname}
          lastname={lastname}
          unitid={unitid}
          content={content}
          close={this.closeWorkorder}
        />
      );
    });

    const all = this.props.workorders.map(order => {
      const {workorderid, datestart, dateend, firstname, lastname, unitid, content} = order;
      return (
        <Workorder
          workorderid={workorderid}
          datestart={datestart}
          dateend={dateend}
          firstname={firstname}
          lastname={lastname}
          unitid={unitid}
          content={content}
          close={this.closeWorkorder}
        />
      );
    });

    return (
      <div className="Tb">
        <div className="Maintenance__title">Maintenance</div>
        <div>
          <input
            type="radio"
            value="all"
            name="filter"
            required
            onChange={e => this.setState({filter: e.target.value})}
            checked={this.state.filter === 'all'}
          />
          All
          <input
            type="radio"
            value="open"
            name="filter"
            checked={this.state.filter === 'open'}
            onChange={e => this.setState({filter: e.target.value})}
          />
          Open
          <input
            type="radio"
            value="closed"
            name="filter"
            checked={this.state.filter === 'closed'}
            onChange={e => this.setState({filter: e.target.value})}
          />
          Closed
        </div>
        <table className="Maintenance__table">
          <thead>
            <tr className="Maintenance__table-header">
              <th>Workorder ID</th>
              <th>Date Start</th>
              <th>Date End</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Unit ID</th>
              <th>Content</th>
              <th>Closed</th>
            </tr>
          </thead>

          <tbody>
            {this.state.filter === 'all' ? all : this.state.filter === 'closed' ? closed : open}
          </tbody>
        </table>
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
})(Maintenance);
