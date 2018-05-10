import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import NewUnit from './NewUnit/NewUnit';
import AddUnits from './AddUnits/AddUnits';
import EditUnit from './EditUnit/EditUnit';
import {getUnits, updateUnit} from '../../../../redux/ducks/unitReducer';
import Loading from '../../../Loading/Loading';
import './Units.css';

class Units extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addingUnits: false,
    };
    this.onAddNewUnits = this.onAddNewUnits.bind(this);
    this.addingStateToFalse = this.addingStateToFalse.bind(this);
    this.updateUnit = this.updateUnit.bind(this);
  }
  componentDidMount() {
    this.props.getUnits(this.props.match.params.id);
  }

  onAddNewUnits() {
    this.setState(prevState => ({addingUnits: !prevState.addingUnits}));
  }

  addingStateToFalse() {
    this.setState({addingUnits: false});
  }

  updateUnit(obj) {
    this.props.updateUnit(obj);
  }

  render() {
    const {addingUnits} = this.state;
    const {loading, units} = this.props;

    let unitsDisplay = <Loading />;
    if (units.length > 0 && !loading) {
      unitsDisplay = (
        <table>
          <thead>
            <tr>
              <th>Bath</th>
              <th>Bed</th>
              <th>Occupied</th>
              <th>Rent</th>
              <th>Room #</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            {units &&
              units.map(unit => (
                <EditUnit key={unit.unitid} unit={{...unit}} update={this.updateUnit} />
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
        <button onClick={this.onAddNewUnits}>Add New Units</button>
        {addingUnits && <AddUnits hide={this.addingStateToFalse} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.unitReducer,
});

export default connect(mapStateToProps, {getUnits, updateUnit})(Units);
