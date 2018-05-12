import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  getPropertyById,
  updatePropertyById,
  archivePropertyById,
} from '../../../../redux/ducks/propertyReducer';

import './Settings.css';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      photourl: '',
      address: '',
      units: 0,
      value: 0,
      expenses: 0,
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeUnits = this.handleChangeUnits.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleChangeExpenses = this.handleChangeExpenses.bind(this);
    this.onArchiveClickHandler = this.onArchiveClickHandler.bind(this);
  }

  componentDidMount() {
    this.props.getPropertyById(this.props.match.params.id);
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.updatePropertyById(this.props.match.params.id, {
      name: this.state.name,
      photourl: this.state.photourl,
      address: this.state.address,
      units: this.state.units,
      value: this.state.value,
      expenses: this.state.expenses,
    });
  }

  onArchiveClickHandler() {
    this.props.archivePropertyById(this.props.match.params.id);
    this.props.history.push('/owner/properties');
  }

  handleChangeName(value) {
    this.setState({name: value});
  }

  handleChangePhotoUrl(value) {
    this.setState({photourl: value});
  }

  handleChangeAddress(value) {
    this.setState({address: value});
  }

  handleChangeUnits(value) {
    this.setState({units: value});
  }

  handleChangeValue(value) {
    this.setState({value});
  }

  handleChangeExpenses(value) {
    this.setState({expenses: value});
  }

  render() {
    const {
      name, photourl, address, units, value, expenses,
    } = this.state;

    return (
      <div className="Settings">
        <div className="Settings__title">Settings</div>
        <form className="Settings-form" onSubmit={this.onSubmitHandler}>
          <label className="Settings__label">
            <span className="Settings__label-text">Property Name:</span>
            <input
              className="Settings__input Settings__input--name"
              required
              type="text"
              value={name}
              placeholder="Property Name"
              onChange={e => this.handleChangeName(e.target.value)}
            />
          </label>
          <label className="Settings__label">
            <span className="Settings__label-text">Photo URL: </span>
            <input
              className="Settings__input Settings__input--url"
              required
              type="text"
              value={photourl}
              placeholder="Photo URL"
              onChange={e => this.handleChangePhotoUrl(e.target.value)}
            />
          </label>
          <label className="Settings__label">
            <span className="Settings__label-text">Address: </span>
            <input
              className="Settings__input Settings__input--address"
              required
              type="text"
              value={address}
              placeholder="Address"
              onChange={e => this.handleChangeAddress(e.target.value)}
            />
          </label>
          <label className="Settings__label">
            <span className="Settings__label-text">Number of Units: </span>
            <input
              className="Settings__input Settings__input--units"
              required
              type="number"
              value={units}
              placeholder="Number of Units"
              onChange={e => this.handleChangeUnits(e.target.value)}
            />
          </label>
          <label className="Settings__label">
            <span className="Settings__label-text">Value: </span>
            <input
              className="Settings__input Settings__input--value"
              required
              type="number"
              value={value}
              placeholder="Value"
              onChange={e => this.handleChangeValue(e.target.value)}
            />
          </label>
          <label className="Settings__label">
            <span className="Settings__label-text">Expenses:</span>
            <input
              className="Settings__input Settings__input--expenses"
              required
              type="number"
              value={expenses}
              placeholder="Expenses"
              onChange={e => this.handleChangeExpenses(e.target.value)}
            />
          </label>
          <button className="Settings__button">Update</button>
        </form>
        <div className="Settings__archive-container">
          <button className="Settings__archive" onClick={this.onArchiveClickHandler}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.propertyReducer,
});

export default connect(mapStateToProps, {
  getPropertyById,
  updatePropertyById,
  archivePropertyById,
})(Settings);
