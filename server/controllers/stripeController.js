require('dotenv').config();

const secretKey = process.env.STRIPE_KEY;
const stripe = require('stripe')(secretKey);

const stripeCharge = (req, res) => {
  const db = req.app.get('db');
  const {amount, billid} = req.body;
  console.log(amount, billid);

  stripe.charges.create(
    {
      amount: parseInt(amount, 10),
      currency: 'usd',
      source: req.body.stripeToken,
    },
    // eslint-disable-next-line
    (error, charge) =>
      db
        .bills_update([billid])
        .then(response => res.status(200).json({charged: true, response}))
        .catch(err => res.status(200).json({err: `${err}`})),
  );
};

module.exports = {
  stripeCharge,
};
