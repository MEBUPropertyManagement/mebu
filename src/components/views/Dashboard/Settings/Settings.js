import React, {Component} from 'react';
import {archivePropertyById} from '../../../../redux/ducks/propertyReducer';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Settings extends Component {
  archiveProperty = id => {
    this.props.archivePropertyById(id);
  };

  render() {
    return (
      <div>
        <Link to="/owner/properties">
          <button onClick={() => this.archiveProperty}>Archive this property</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.propertyReducer,
});

export default connect(mapStateToProps, {archivePropertyById})(Settings);
