import React, {Component} from 'react';
import PropertiesTable from './PropertiesTable';
import './Properties';
import {connect} from 'react-redux';
import {getProperties} from '';

class Properties extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProperties();
  }

  render() {
    const properties = this.props.properties.map(property => <div />);

    return (
      <div className="Properties">
        <div className="Properties__form" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.propertyReducer,
});

export default connect(mapStateToProps, {getProperties})(Properties);
