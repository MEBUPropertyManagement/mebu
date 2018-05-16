import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getResidents} from '../../../../redux/ducks/residentReducer';
import Loading from '../../../Loading/Loading';
import './Residents.css';

class Residents extends Component {
  componentDidMount() {
    this.props.getResidents(this.props.match.params.id);
  }

  render() {
    const {residents, loading} = this.props;
    let residentDisplay =
      'There are currently no residents. Click the "Units" tab to start adding residents to a specified room number.';
    if (residents && residents[0] && !loading) {
      const residentsMap = residents.map(resident => (
        <tr key={resident.residentid} className="Residents__table-data">
          <td>{resident.firstname}</td>
          <td>{resident.lastname}</td>
          <td>{resident.roomnum}</td>
          <td>{resident.email}</td>
        </tr>
      ));
      residentDisplay = (
        <table>
          <thead>
            <tr className="Residents__table-header">
              <th>First Name</th>
              <th>Last Name</th>
              <th>Room No.</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{residentsMap}</tbody>
        </table>
      );
    }

    return (
      <div className="Residents">
        <div className="Residents__title">Residents</div>
        {residentDisplay}
        {loading && <Loading />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.residentReducer,
});

export default connect(mapStateToProps, {getResidents})(Residents);
