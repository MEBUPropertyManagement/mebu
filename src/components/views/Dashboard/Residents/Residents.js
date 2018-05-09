import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {getResidents} from '../../../../redux/ducks/residentReducer';
import './Residents.css';

class Residents extends Component {
  componentDidMount() {
    this.props.getResidents(this.props.match.params.id);
  }

  render() {
    const {residents, loading} = this.props;
    let residentDisplay = <p>Loading...</p>;
    if (residents && residents[0] && !loading) {
      residentDisplay = residents.map(resident => (
        <tr key={resident.residentid} className="Residents__table-data">
          <td>{resident.firstname}</td>
          <td>{resident.lastname}</td>
          <td>{resident.roomnum}</td>
          <td>{resident.email}</td>
        </tr>
      ));
    }

    return (
      <div className="Residents">
        <div className="Residents__title">Residents</div>
        <table>
          <tr className="Residents__table-header">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Room No.</th>
            <th>Email</th>
          </tr>
          {residentDisplay}
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.residentReducer
});

export default connect(mapStateToProps, {getResidents})(Residents);
