import React, {Component, Fragment} from 'react';

class EditUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
    this.onEditHandler = this.onEditHandler.bind(this);
  }

  onEditHandler() {
    this.setState(prevState => ({editing: !prevState.editing}));
  }

  render() {
    const {editing} = this.state;
    const {
      bath, bed, occupied, rent, roomnum, size, update, unitid,
    } = this.props.unit;

    const editDisplay = editing ? (
      <Fragment>
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
      </Fragment>
    ) : (
      <Fragment>
        <td>{bath}</td>
        <td>{bed}</td>
        <td>{occupied ? 'Yes' : 'No'}</td>
        <td>{rent}</td>
        <td>{roomnum}</td>
        <td>{size}</td>
      </Fragment>
    );

    return (
      <tr>
        {editDisplay}
        <td>
          <button onClick={this.onEditHandler}>{editing ? 'Save' : 'Edit'}</button>
        </td>
      </tr>
    );
  }
}

export default EditUnit;
