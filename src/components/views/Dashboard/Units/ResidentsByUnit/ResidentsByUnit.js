import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {getResidents} from '../../../../../redux/ducks/residentReducer';
import './ResidentsByUnit.css';

class ResidentsByUnit extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    console.log(this.props.match.params.unitid);
    this.props.getResidents(this.props.match.params.id);
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

export default connect(mapStateToProps, {getResidents})(ResidentsByUnit);
// export default connect(mapStateToProps, {getResidentsByUnitId})(ResidentsByUnit);
