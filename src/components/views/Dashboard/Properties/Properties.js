import React, {Component} from 'react';
import PropertiesTable from './PropertiesTable';
import './Properties';
import {connect} from 'react-redux';
import {getProperties} from '../../../../redux/ducks/propertyReducer';
import {Link} from 'react-router-dom';

class Properties extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProperties();
  }

  render() {
    // const properties = this.props.properties.map(property => <div />);

    return (
      <div className="Properties">
        <div className="Properties__form" />
        <Link className="" to="/owner/dasboard/properties/new">
          Add Property
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.propertyReducer,
});

export default connect(mapStateToProps, {getProperties})(Properties);
