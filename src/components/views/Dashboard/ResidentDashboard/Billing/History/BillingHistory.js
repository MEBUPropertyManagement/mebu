import React, { Component } from "react";
import { connect } from "react-redux";
import { getBillingHistory } from "../../../../../../redux/ducks/residentReducer";

import "./BillingHistory.css";

import BillingItems from "./BillingItems";
import "./spreadsheet.css";

class BillingHistory extends Component {
  componentDidMount() {
    this.props.getBillingHistory();
  }

  render() {
    let mappedItems = [];

    const re = /\b(\d+)(\d{2})\b/;
    const subst = "$1.$2";

    if (this.props.billingHistory && this.props.billingHistory.length > 0) {
      mappedItems = this.props.billingHistory.map(item => (
        <BillingItems
          datepaid={item.datepaid}
          billid={item.billid}
          paid={item.paid}
          key={item.billid}
          amount={`$${Number(JSON.stringify(item.amount).replace(re, subst))}`}
          description={item.description}
        />
      ));
    }

    return (
      <div className="BillingHistory-container">
        <div className="BillingHistory__title">Billing History</div>
        <table id="billing-items">
          <thead>
            <tr>
              <th>Date</th>
              <th>Ref#</th>
              <th>Amount</th>
              <th>Paid</th>
            </tr>
          </thead>
          <tbody>{mappedItems}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.residentReducer,
});

export default connect(mapStateToProps, { getBillingHistory })(BillingHistory);
