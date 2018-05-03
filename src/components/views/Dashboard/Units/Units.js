import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import NewUnit from './NewUnit/NewUnit';
import {getPropertyById} from '../../../../redux/ducks/propertyReducer';
import './Units.css';

class Units extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adding: false,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  componentDidMount() {
    console.log(this.props);
    this.props.getPropertyById(this.props.match.params.id);
  }

  onClickHandler() {
    this.setState({adding: true});
  }

  render() {
    const {selectedProperty, loading} = this.props;
    const {adding} = this.state;
    let property = <p>...loading</p>;
    if (selectedProperty && !loading) {
      const prop = selectedProperty;
      property =
        selectedProperty.occupiedUnits &&
        selectedProperty.occupiedUnits.map(unit => (
          <NewUnit creating={false} editing={false} key={unit.unitid} unit={unit} />
        ));
    }

    return (
      <div className="Units container">
        <div className="Units__titles">
          <p>Bath</p>
          <p>Bed</p>
          <p>Occupied</p>
          <p>Rent</p>
          <p>Roomnum</p>
          <p>Size</p>
          <button onClick={this.onClickHandler}>Add Unit</button>
        </div>
        {adding && (
          <NewUnit
            creating
            editing
            unit={{
              bath: 0,
              bed: 0,
              occupied: true,
              rent: 0,
              roomnum: 0,
              size: 0,
            }}
          />
        )}
        {property}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.propertyReducer,
});

export default connect(mapStateToProps, {getPropertyById})(Units);
