import React, {Component} from 'react';

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
    return (
      <tr>
        <td>
          <input
            value={this.state.bath}
            onChange={this.onChangeHandler}
            placeholder="bath"
            name="bath"
            type="text"
          />
        </td>
        <td>
          <input
            value={this.state.bed}
            onChange={this.onChangeHandler}
            placeholder="bed"
            name="bed"
            type="text"
          />
        </td>
        <td>
          <input
            checked={this.state.occupied}
            onChange={this.onChangeHandler}
            name="occupied"
            type="checkbox"
          />
        </td>
        <td>
          <input
            value={this.state.rent}
            onChange={this.onChangeHandler}
            placeholder="rent"
            name="rent"
            type="text"
          />
        </td>
        <td>
          <input
            value={this.state.roomnum}
            onChange={this.onChangeHandler}
            placeholder="roomnum"
            name="roomnum"
            type="text"
          />
        </td>
        <td>
          <input
            value={this.state.size}
            onChange={this.onChangeHandler}
            placeholder="size"
            name="size"
            type="text"
          />
        </td>
      </tr>
    );
  }
}

export default NewUnit;
