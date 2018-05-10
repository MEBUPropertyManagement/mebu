import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import NewUnit from './NewUnit/NewUnit';
import AddUnits from './AddUnits/AddUnits';
import EditUnit from './EditUnit/EditUnit';
import {getUnits} from '../../../../redux/ducks/unitReducer';
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

  render() {
    const {addingUnits} = this.state;
    const {loading, units} = this.props;
    let unitsDisplay = <Loading />;
    if (units.length > 0 && !loading) {
      unitsDisplay = units && units.map(unit => <EditUnit unit={{...unit}} />);
    }

    return (
      <div className="Units">
        <h1 className="Units__title">Units</h1>
        <table>
          <tr>
            <th>Bath</th>
            <th>Bed</th>
            <th>Occupied</th>
            <th>Rent</th>
            <th>Room #</th>
            <th>Size</th>
          </tr>
          {unitsDisplay}
        </table>
        <button onClick={this.onAddNewUnits}>Add New Units</button>
        {addingUnits && <AddUnits hide={this.addingStateToFalse} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.unitReducer,
});

export default connect(mapStateToProps, {getUnits})(Units);
