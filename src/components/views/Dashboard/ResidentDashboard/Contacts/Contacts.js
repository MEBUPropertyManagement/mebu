import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getResidentInfo} from '../../../../../redux/ducks/residentReducer';
import Loading from '../../../../Loading/Loading';
import './Contacts.css';

class Contacts extends Component {
  componentDidMount() {
    this.props.getResidentInfo();
  }

  render() {
    const {residentInfo, loading, error} = this.props;
    let residentInfoDisplay = <Loading />;
    if (Object.keys(residentInfo).length > 0 && !loading && !error) {
      residentInfoDisplay = (
        <div className="Contacts">
          <div className="Contacts-resident-info">
            <div>
              {/* <h3 className="Contacts-header">Property</h3> */}
              <h5 className="Contacts-property-name">
                {residentInfo.name}
                <div className="Contacts__border__bottom" />
              </h5>
              <p className="Contacts-property-address">{residentInfo.address}</p>
            </div>
            <div>
              <h6 className="Contacts-header">Owner</h6>
              <p className="Contacts-text">{residentInfo.firstname}</p>
              <p className="Contacts-text">{residentInfo.lastname}</p>
              <p className="Contacts-text">{residentInfo.email}</p>
            </div>
            <div>
              <h6 className="Contacts-header">Details about you: </h6>
              <p className="Contacts-text">Your monthly rent is ${residentInfo.rent}</p>
              <p className="Contacts-text">Your apartment number is {residentInfo.roomnum}</p>
            </div>
          </div>
          <div className="Property__photo-container">
            <img className="Contacts__photo" src={residentInfo.photourl} alt="apartment" />
          </div>
        </div>
      );
    }

    return <div className="Contacts-container">{residentInfoDisplay}</div>;
  }
}

const mapStateToProps = state => ({...state.residentReducer});

export default connect(mapStateToProps, {getResidentInfo})(Contacts);
