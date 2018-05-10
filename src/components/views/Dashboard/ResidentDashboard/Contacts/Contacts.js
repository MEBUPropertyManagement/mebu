import React, { Component } from "react";
import { connect } from "react-redux";
import { getResidentInfo } from "../../../../../redux/ducks/residentReducer";
import "./Contacts.css";

class Contacts extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getResidentInfo();
  }

  render() {
    const { residentInfo, loading, error } = this.props;
    console.log(residentInfo);
    let residentInfoDisplay = <p>Loading...</p>;
    if (Object.keys(residentInfo).length > 0 && !loading && !error) {
      residentInfoDisplay = (
        <div className="Contacts-container">
          <div className="Contacts-resident-info">
            <div>
              <h3 className="Contacts-header">Property</h3>
              <p className="Contacts-property-name">
                {residentInfo.name}
                <div className="Contacts__border__bottom" />
              </p>
              <p className="Contacts-property-address">
                {residentInfo.address}
              </p>
              {/* <p className="Contacts-property-image">
                Image: {residentInfo.photourl}
              </p> */}
            </div>
            <div>
              <h3 className="Contacts-header">Owner</h3>
              <p className="Contacts-text">
                {residentInfo.firstname}
              </p>
              <p className="Contacts-text">{residentInfo.lastname}</p>
              <p className="Contacts-text">{residentInfo.email}</p>
            </div>
            <div>
              <h3 className="Contacts-header">Details about you: </h3>
              <p className="Contacts-text">
                Your monthly rent is ${residentInfo.rent}
              </p>
              <p className="Contacts-text">
                Your apartment: {residentInfo.roomnum}
              </p>
            </div>
          </div>
        </div>
      );
    }

    return <div>{residentInfoDisplay}</div>;
  }
}

const mapStateToProps = state => ({ ...state.residentReducer });

export default connect(mapStateToProps, { getResidentInfo })(Contacts);
