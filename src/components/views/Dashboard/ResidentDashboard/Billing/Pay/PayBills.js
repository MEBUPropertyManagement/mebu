import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

class PayBills extends Component {
  constructor() {
    super();

    this.state = {
      amount: 0,
      billid: 0,
    };

    this.onToken = this.onToken.bind(this);
  }

  componentDidMount() {
    // placeholder for call to reducer
  }

  onToken(token) {
    axios
      .post('/bills/pay', {
        amount: this.state.amount,
        stripeToken: token,
        billid: this.state.billid,
        // email: this.props.user.email,
      })
      .then(res => console.log(res)) // call to reducer to update the page
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>Placeholder Text</div>
      // <StripeCheckout
      //   token={this.onToken}
      //   stripeKey="pk_test_iueyBCm4l0DmYEeCjwFL51iY"
      //   amount={this.state.amount}
      //   name={} // name from redux
      //   email={} // email from redux
      // />
    );
  }
}

export default PayBills;
