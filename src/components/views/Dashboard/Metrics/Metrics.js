import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import {connect} from 'react-redux';
import {Doughnut} from 'react-chartjs';

import {getPropertyById} from '../../../../redux/ducks/propertyReducer';
import Loading from '../../../Loading/Loading';
import './Metrics.css';

class Metrics extends Component {
  componentDidMount() {
    this.props.getPropertyById(this.props.match.params.id);
  }

  render() {
    let property = <Loading />;
    if (this.props.selectedProperty && !this.props.loading) {
      const prop = this.props.selectedProperty;
      const expenses = +prop.expenses;
      const value = +prop.value;
      const income = +prop.income;

      property = (
        <div className="Metrics__info">
          <div className="Residents__title">Metrics</div>
          <div>
            <div className="Metrics__info-expenses">
              <h5 className="Metrics__info-title">Expenses</h5>
              <p className="Metrics__info-numbers">${expenses.toLocaleString('en')}</p>
            </div>
          </div>

          <div>
            <div className="Metrics__info-value">
              <h5 className="Metrics__info-title">Value</h5>
              <p className="Metrics__info-numbers">${value.toLocaleString('en')}</p>
            </div>
          </div>

          <div>
            <div className="Metrics__info-income">
              <h5 className="Metrics__info-title">Income</h5>
              <p className="Metrics__info-numbers">${income.toLocaleString('en')}</p>
            </div>
          </div>
        </div>
      );
    }

    const data = [
      {
        value: this.props.selectedProperty.expenses,
        color: '#2796d6',
        highlight: '#29a0e5',
        label: 'Expenses',
      },
      {
        value: this.props.selectedProperty.income,
        color: '#292929',
        highlight: '#383737',
        label: 'Income',
      },
    ];

    return (
      <div className="Metrics">
        {property}
        <Doughnut
          data={data}
          options={{
            animationEasing: 'easeOutCubic',
          }}
          width="1200"
          height="400"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.propertyReducer,
});

export default connect(mapStateToProps, {getPropertyById})(Metrics);
