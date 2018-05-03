import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getResidents} from '../../../../redux/ducks/residentReducer';

class Residents extends Component {
  componentDidMount() {
    this.props.getResidents(this.props.match.params.id);
  }

  render() {
    const {residents, loading} = this.props;
    let residentDisplay = <p>Loading...</p>;
    if (residents && residents[0] && !loading) {
      residentDisplay = residents.map(resident => (
        <div key={resident.residentid}>
          <p>{`${resident.firstname} ${resident.lastname} ${resident.email}`}</p>
        </div>
      ));
    }

    return (
      <div className="Residents">
        {residentDisplay}
        <div className="Residents__button-c">
          <Link to={`${this.props.location.pathname}/new`}>Add New Resident</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.residentReducer,
});

export default connect(mapStateToProps, {getResidents})(Residents);
