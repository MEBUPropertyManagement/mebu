import React, {Component} from 'react';
import {getPropertyById} from '../../../../redux/ducks/propertyReducer';
import {connect} from 'react-redux';

class Maintenance extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getPropertyById(this.props.match.params.id);
  }

  render() {
    const maintenance = <p>...loading</p>;
    console.log(this.props.selectedProperty);
    return (
      <div>
        <p>This is the maintenance component.</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.propertyReducer,
});

export default connect(mapStateToProps, {getPropertyById})(Maintenance);
