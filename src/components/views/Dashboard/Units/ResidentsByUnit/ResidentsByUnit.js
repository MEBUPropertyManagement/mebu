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
    let residentsDisplay = null;
    if (residents && residents.length > 0 && !loading) {
      residentsDisplay = residents.map(({
        email, firstname, lastname, isresident,
      }) => (
        <tr>
          <td className="ResidentsByUnit__td--email">{email}</td>
          <td className="ResidentsByUnit__td">{firstname}</td>
          <td className="ResidentsByUnit__td">{lastname}</td>
          <td>{isresident ? 'Yes' : 'No'}</td>
        </tr>
      ));
    }
    return (
      <div className="ResidentsByUnit">
        {loading && <Loading />}
        <table className="ResidentsByUnit__table">
          <thead>
            <tr className="ResidentsByUnit__th">
              <th>email</th>
              <th>firstname</th>
              <th>lastname</th>
              <th>Current</th>
            </tr>
          </thead>
          <tbody>{residentsDisplay}</tbody>
        </table>
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
// export default connect(mapStateToProps, {getResidentsByUnitId})(ResidentsByUnit);
