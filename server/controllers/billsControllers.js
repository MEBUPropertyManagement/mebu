const addBill = (req, res) => {
  const db = req.app.get('db');
  const {
    paid, datepaid, amount, residentid,
  } = req.body;

  db
    .addBill([paid, datepaid, amount, residentid])
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err));
};

const getBillingHistory = (req, res) => {
  const db = req.app.get('db');
  db
    .getBillingHistory([req.session.user.userid])
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err));
};

const getAllUnpaidBills = (req, res) => {
  const db = req.app.get('db');
  db
    .getAllUnpaidBills([req.session.user.userid])
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err));
};

module.exports = {
  addBill,
  getBillingHistory,
  getAllUnpaidBills,
};
