import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {connect} from 'react-redux';
import {getBills} from '../../../../../../redux/ducks/residentReducer';

class PayBills extends Component {
  constructor() {
    super();

    this.state = {
      amount: 0,
      billid: 0,
    };
  }

  componentDidMount() {
    this.props.getBills();
  }

  onToken(token) {
    axios
      .post('/bills/pay', {
        amount: this.state.amount,
        stripeToken: token,
        billid: this.state.billid,
      })
      .then((res) => {
        console.log(res);
        return this.props.getBills();
      })
      .catch(err => console.log(err));
  }

  render() {
    let mappedItems = [];

    const re = /\b(\d+)(\d{2})\b/;
    const subst = '$1.$2';

    const {loading} = this.props;
    const {bills} = this.props.bills;

    if (bills && bills[0]) {
      mappedItems = bills.map(bill => (
        <option key={bill.billid} value={bill.billid}>
          Amount: ${Number(JSON.stringify(bill.amount).replace(re, subst))}
        </option>
      ));
    }

    console.log('Props: ', bills);
    console.log('Items: ', mappedItems);

    return (
      <div>
        <div>Pay Bills Component</div>
        <div>
          {bills && bills[0] ? (
            <form>
              <select
                required
                onChange={event => console.log(event.target.id)}
                defaultValue="Please select the bill you would like to pay."
              >
                {mappedItems}
              </select>
              <StripeCheckout
                token={this.onToken}
                stripeKey="pk_test_iueyBCm4l0DmYEeCjwFL51iY"
                amount={this.state.amount}
              />{' '}
            </form>
          ) : (
            'No bills to pay, good sir.'
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.residentReducer,
});

export default connect(mapStateToProps, {getBills})(PayBills);
