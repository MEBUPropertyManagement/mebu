import React, {Component} from 'react';
import {getWorkorderById} from '../../../../redux/ducks/workorderReducer';
import {connect} from 'react-redux';

class Maintenance extends Component {
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
          <div>{workorder.content}</div>
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
