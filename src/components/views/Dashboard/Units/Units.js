import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddUnits from './AddUnits/AddUnits';
import EditUnit from './EditUnit/EditUnit';
import {getUnits, updateUnit} from '../../../../redux/ducks/unitReducer';
import Loading from '../../../Loading/Loading';
import './Units.css';

class Units extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addingUnits: false
    };
    this.onAddNewUnits = this.onAddNewUnits.bind(this);
    this.addingStateToFalse = this.addingStateToFalse.bind(this);
    this.toResidentsByUnit = this.toResidentsByUnit.bind(this);
    this.reload = this.reload.bind(this);
  }

  componentDidMount() {
    this.reload();
  }

  onAddNewUnits() {
    this.setState(prevState => ({addingUnits: !prevState.addingUnits}));
  }

  reload() {
    this.props.getUnits(this.props.match.params.id);
  }

  addingStateToFalse() {
    this.setState({addingUnits: false});
  }

  toResidentsByUnit(unitid) {
    this.props.history.push(
      `/owner/dashboard/property/${
        this.props.match.params.id
      }/units/${unitid}/residents`
    );
  }

  render() {
    const {addingUnits} = this.state;
    const {loading, units} = this.props;

    let unitsDisplay = <Loading />;
    if (units.length > 0 && !loading) {
      unitsDisplay = (
        <table>
          <thead>
            <tr className="Units__table-header">
              <th>Bath</th>
              <th>Bed</th>
              <th>Occupied</th>
              <th>Rent</th>
              <th>Apt #</th>
              <th>Size</th>
              <th>Edit / Delete</th>
            </tr>
          </thead>
          <tbody>
            {units &&
              units.map(unit => (
                <EditUnit
                  reload={this.reload}
                  key={unit.unitid}
                  toUnit={this.toResidentsByUnit}
                  unit={{...unit}}
                />
              ))}
          </tbody>
        </table>
      );
    } else {
      unitsDisplay = <p>No Units To Display</p>;
    }

    return (
      <div className="Units">
        <h1 className="Units__title">Units</h1>
        {unitsDisplay}
        <button className="Units__add-btn" onClick={this.onAddNewUnits}>
          {addingUnits ? 'Cancel' : 'Add New Units'}
        </button>
        {addingUnits && <AddUnits hide={this.addingStateToFalse} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.unitReducer
});

export default connect(mapStateToProps, {getUnits, updateUnit})(Units);
