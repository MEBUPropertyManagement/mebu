const moment = require('moment');

const workOrderByPropertyId = (req, res) => {
  const db = req.app.get('db');
  db
    .workOrderByPropertyId([req.params.id])
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err));
};

const workOrderByResidentId = (req, res) => {
  const db = req.app.get('db');
  db
    .workOrderByResidentId([req.params.id])
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err));
};

const addWorkOrder = (req, res) => {
  const db = req.app.get('db');
  const {
    content, urgency, propertyid, unitid,
  } = req.body;
  db
    .addWorkOrder([
      moment('MM-DD-YYYY'),
      content,
      urgency,
      propertyid,
      req.session.user.userid,
      unitid,
    ])
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err));
};

const closeWorkorder = (req, res) => {
  const db = req.app.get('db');

  db
    .addWorkOrder([moment('MM-DD-YYYY'), req.params.id])
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err));
};

module.exports = {
  workOrderByPropertyId,
  workOrderByResidentId,
  addWorkOrder,
  closeWorkorder,
};
