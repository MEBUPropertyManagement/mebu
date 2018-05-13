import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  getPropertyById,
  updatePropertyById,
  archivePropertyById,
} from '../../../../redux/ducks/propertyReducer';
import Loading from '../../../Loading/Loading';

import './Settings.css';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.selectedProperty.name || '',
      photourl: this.props.selectedProperty.photourl || '',
      address: this.props.selectedProperty.address || '',
      units: this.props.selectedProperty.units || '',
      value: this.props.selectedProperty.value || '',
      expenses: this.props.selectedProperty.expenses || '',
      editing: false,
      deleting: false,
    };

    this.onEditHandler = this.onEditHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onArchiveClickHandler = this.onArchiveClickHandler.bind(this);
  }

  componentDidMount() {
    this.props.getPropertyById(this.props.match.params.id);
  }

  onEditHandler() {
    const {
      name, photourl, address, units, value, expenses, editing,
    } = this.state;

    if (editing && name && photourl && address && units && value && expenses) {
      this.props.updatePropertyById(this.props.match.params.id, {
        name,
        photourl,
        address,
        units,
        value,
        expenses,
      });
    }

    this.setState({
      editing: !this.state.editing,
    });
  }

  onArchiveClickHandler() {
    const {deleting} = this.state;
    if (!deleting) {
      this.setState({deleting: true});
    } else {
      this.props.archivePropertyById(this.props.match.params.id);
      this.props.history.push('/owner/properties');
    }
  }

  onChangeHandler(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const {selectedProperty, loading} = this.props;
    const doneLoading = selectedProperty && Object.keys(selectedProperty) > 0 && !loading;
    const {
      name, photourl, address, units, value, expenses, editing, deleting,
    } = this.state;

    const inputClasses = ['Settings__input', 'Settings__input--disabled'];
    if (editing) {
      inputClasses.splice(1, 1);
    }

    return (
      <div className="Settings">
        <div className="Settings__title">Settings</div>
        <div className="Settings-form">
          <label className="Settings__label">
            <span className="Settings__label-text">Property Name:</span>
            <input
              className={`${inputClasses.join(' ')} Settings__input--name`}
              disabled={!editing}
              name="name"
              type="text"
              value={(doneLoading && selectedProperty.name) || name}
              placeholder="Property Name"
              onChange={this.onChangeHandler}
            />
          </label>
          <label className="Settings__label">
            <span className="Settings__label-text">Photo URL: </span>
            <input
              className={`${inputClasses.join(' ')} Settings__input--url`}
              disabled={!editing}
              name="photourl"
              type="text"
              value={(doneLoading && selectedProperty.photourl) || photourl}
              placeholder="Photo URL"
              onChange={this.onChangeHandler}
            />
          </label>
          <label className="Settings__label">
            <span className="Settings__label-text">Address: </span>
            <input
              className={`${inputClasses.join(' ')} Settings__input--address`}
              disabled={!editing}
              name="address"
              type="text"
              value={(doneLoading && selectedProperty.address) || address}
              placeholder="Address"
              onChange={this.onChangeHandler}
            />
          </label>
          <label className="Settings__label">
            <span className="Settings__label-text">Number of Units: </span>
            <input
              className={`${inputClasses.join(' ')} Settings__input--units`}
              disabled={!editing}
              name="units"
              type="number"
              value={(doneLoading && selectedProperty.units) || units}
              placeholder="Number of Units"
              onChange={this.onChangeHandler}
            />
          </label>
          <label className="Settings__label">
            <span className="Settings__label-text">Value: </span>
            <input
              className={`${inputClasses.join(' ')} Settings__input--value`}
              disabled={!editing}
              name="value"
              type="number"
              value={(doneLoading && selectedProperty.value) || value}
              placeholder="Value"
              onChange={this.onChangeHandler}
            />
          </label>
          <label className="Settings__label">
            <span className="Settings__label-text">Expenses:</span>
            <input
              className={`${inputClasses.join(' ')} Settings__input--expenses`}
              disabled={!editing}
              name="expenses"
              type="number"
              value={(doneLoading && selectedProperty.expenses) || expenses}
              placeholder="Expenses"
              onChange={this.onChangeHandler}
            />
          </label>
          <div className="Settings__btn-container">
            <button
              onClick={this.onEditHandler}
              className="Settings__button Settings__button--edit"
            >
              {editing ? 'Save' : 'Edit'}
            </button>
            <button
              className="Settings__button Settings__button--archive"
              onClick={this.onArchiveClickHandler}
            >
              {!deleting ? 'Delete' : 'Click Again'}
            </button>
          </div>
        </div>
        {loading && <Loading />}
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
