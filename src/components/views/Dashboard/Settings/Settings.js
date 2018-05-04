import React, {Component} from 'react';
import {
  getPropertyById,
  updatePropertyById,
  archivePropertyById,
} from '../../../../redux/ducks/propertyReducer';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
      propertyNo: '',
      value: '',
      expenses: '',
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangePropertyNo = this.handleChangePropertyNo.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleChangeExpenses = this.handleChangeExpenses.bind(this);
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.updatePropertyById(
      this.state.name,
      this.state.address,
      this.state.unitNo,
      this.state.value,
      this.state.expenses,
    );
  }

  handleChangeName(value) {
    this.setState({name: value});
  }

  handleChangeAddress(value) {
    this.setState({address: value});
  }

  handleChangePropertyNo(value) {
    this.setState({unitNo: value});
  }

  handleChangeValue(value) {
    this.setState({value: value});
  }

  handleChangeExpenses(value) {
    this.setState({expenses: value});
  }

  componentDidMount() {
    console.log(this.props);
    this.props.getPropertyById(this.props.match.params.id);
  }

  archiveProperty = id => {
    this.props.archivePropertyById(id);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <input
            className=""
            type="text"
            value={this.state.name}
            placeholder="Property Name"
            onChange={e => this.handleChangeName(e.target.value)}
          />
          <input
            className=""
            type="text"
            value={this.state.address}
            placeholder="Address"
            onChange={e => this.handleChangeAddress(e.target.value)}
          />
          <input
            className=""
            type="text"
            value={this.state.unitNo}
            placeholder="Property No."
            onChange={e => this.handleChangePropertyNo(e.target.value)}
          />
          <input
            className=""
            type="text"
            value={this.state.value}
            placeholder="Value"
            onChange={e => this.handleChangeValue(e.target.value)}
          />
          <input
            className=""
            type="text"
            value={this.state.expenses}
            placeholder="Expenses"
            onChange={e => this.handleChangeExpenses(e.target.value)}
          />
          <input value="Update changes" type="submit" className="" />
        </form>
        <div>
          <Link to="/owner/properties">
            <button onClick={() => this.archiveProperty}>Archive this property</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.propertyReducer,
});

export default connect(mapStateToProps, {getPropertyById, updatePropertyById, archivePropertyById})(
  Settings,
);
