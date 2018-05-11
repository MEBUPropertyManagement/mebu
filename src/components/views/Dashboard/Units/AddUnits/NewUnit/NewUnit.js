import React, {Component} from 'react';
import './NewUnit.css';

class NewUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bath: '',
      bed: '',
      occupied: false,
      rent: '',
      roomnum: '',
      size: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event) {
    const {target} = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const {name} = target;

    this.props.updateModel(this.props.index, name, value);

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {index} = this.props;
    return (
      <tr>
        <td className="NewUnit__td">
          <input
            className="NewUnit__input"
            value={this.state.bath}
            onChange={this.onChangeHandler}
            placeholder="# of Baths"
            name="bath"
            type="number"
          />
        </td>
        <td className="NewUnit__td">
          <input
            className="NewUnit__input"
            value={this.state.bed}
            onChange={this.onChangeHandler}
            placeholder="# of Bedrooms"
            name="bed"
            type="number"
          />
        </td>
        <td className="NewUnit__td">
          <input
            checked={this.state.occupied || false}
            onChange={this.onChangeHandler}
            name="occupied"
            type="checkbox"
            id={`cbx${index}`}
            className="EditUnit__toggle"
            style={{display: 'none'}}
          />
          <label htmlFor={`cbx${index}`} className="toggle">
            <span />
          </label>
        </td>
        <td className="NewUnit__td">
          <input
            className="NewUnit__input"
            value={this.state.rent}
            onChange={this.onChangeHandler}
            placeholder="Monthly Rent"
            name="rent"
            type="number"
          />
        </td>
        <td className="NewUnit__td">
          <input
            className="NewUnit__input"
            value={this.state.roomnum}
            onChange={this.onChangeHandler}
            placeholder="Apt #"
            name="roomnum"
            type="text"
          />
        </td>
        <td className="NewUnit__td">
          <input
            className="NewUnit__input"
            value={this.state.size}
            onChange={this.onChangeHandler}
            placeholder="Size"
            name="size"
            type="number"
          />
        </td>
      </tr>
    );
  }
}

export default NewUnit;
