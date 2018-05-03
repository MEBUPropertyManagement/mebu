import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPropertyById} from '../../../../redux/ducks/propertyReducer';

class Metrics extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPropertyById(this.props.match.params.id);
  }

  render() {
    let property = <p>...loading</p>;
    if (this.props.selectedProperty && !this.props.loading) {
      console.log(this.props.selectedProperty);
      const prop = this.props.selectedProperty;
      property = (
        <div>
          <p>Expenses: {prop.expenses}</p>
          <p>Value: {prop.value}</p>
          <p>Income: {prop.income}</p>
        </div>
      );
    }

    return <div>{property}</div>;
  }
}

const mapStateToProps = state => ({
  ...state.propertyReducer,
});

export default connect(mapStateToProps, {getPropertyById})(Metrics);
