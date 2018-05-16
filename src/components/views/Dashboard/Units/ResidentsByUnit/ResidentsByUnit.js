import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {getResidentsByUnitId} from '../../../../../redux/ducks/residentReducer';
import Loading from '../../../../Loading/Loading';
import './ResidentsByUnit.css';

class ResidentsByUnit extends Component {
  componentDidMount() {
    this.props.getResidentsByUnitId(this.props.match.params.unitid);
  }

  render() {
    const {residents, loading} = this.props;
    let residentsDisplay = <p>This unit is currently unoccupied.</p>;
    if (residents && residents.length > 0 && !loading) {
      const allResidents = residents.map(({
        email, firstname, lastname, isresident,
      }) => (
        <tr>
          <td className="ResidentsByUnit__td--email">{email}</td>
          <td className="ResidentsByUnit__td">{firstname}</td>
          <td className="ResidentsByUnit__td">{lastname}</td>
          <td>{isresident ? 'Yes' : 'No'}</td>
        </tr>
      ));
      residentsDisplay = (
        <table className="ResidentsByUnit__table">
          <thead>
            <tr className="ResidentsByUnit__th">
              <th>email</th>
              <th>firstname</th>
              <th>lastname</th>
              <th>Current</th>
            </tr>
          </thead>
          <tbody>{allResidents}</tbody>
        </table>
      );
    }
    return (
      <div className="ResidentsByUnit">
        {loading && <Loading />}
        {residentsDisplay}
        <Link
          className="ResidentsByUnit__btn Link__none"
          to={`/owner/dashboard/property/${this.props.match.params.id}/units/${
            this.props.match.params.unitid
          }/residents/new`}
        >
          Add Resident
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({...state.residentReducer});

export default connect(mapStateToProps, {getResidentsByUnitId})(ResidentsByUnit);
