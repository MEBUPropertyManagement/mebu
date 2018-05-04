import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {getResidentsByUnitId} from '../../../../../redux/ducks/residentReducer';
import './ResidentsByUnit.css';

class ResidentsByUnit extends Component {
  componentDidMount() {
    this.props.getResidentsByUnitId(this.props.match.params.unitid);
  }

  render() {
    const {residents, loading} = this.props;
    let residentsDisplay = <p>Loading...</p>;
    if (residents && residents.length > 0 && !loading) {
      residentsDisplay = residents.map(({
        email, firstname, lastname, isresident,
      }) => (
        <Fragment>
          <p>{email}</p>
          <p>{firstname}</p>
          <p>{lastname}</p>
          <p>{isresident ? 'Yes' : 'No'}</p>
        </Fragment>
      ));
    }
    return (
      <div className="ResidentsByUnit">
        <p>email</p>
        <p>firstname</p>
        <p>lastname</p>
        <p>isresident</p>
        {residentsDisplay}
      </div>
    );
  }
}

const mapStateToProps = state => ({...state.residentReducer});

export default connect(mapStateToProps, {getResidentsByUnitId})(ResidentsByUnit);
// export default connect(mapStateToProps, {getResidentsByUnitId})(ResidentsByUnit);
