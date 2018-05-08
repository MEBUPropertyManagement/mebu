const addBill = (req, res) => {
  const db = req.app.get('db');
  const {
    paid, datepaid, amount, residentid,
  } = req.body;

  db
    .bills_add([paid, datepaid, amount, residentid])
    .then(response => res.status(200).json({added: true, bill: response[0]}))
    .catch(err => res.status(200).json({error: `${err}`}));
};

const getBillingHistory = (req, res) => {
  const db = req.app.get('db');
  db
    .bills_history([req.session.user.userid])
    .then(response => res.status(200).json({history: response}))
    .catch(err => res.status(200).json({error: `${err}`}));
};

const getUnpaidBills = (req, res) => {
  const db = req.app.get('db');
  db
    .bills_unpaid([req.session.user.userid])
    .then(response => res.status(200).json({bills: response}))
    .catch(err => res.status(200).json({error: `${err}`}));
};

module.exports = {
  addBill,
  getBillingHistory,
  getUnpaidBills,
};
