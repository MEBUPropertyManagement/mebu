const moment = require('moment');

const {maintenanceEmail} = require('./nodemailer');

const workOrderByPropertyId = (req, res) => {
  const db = req.app.get('db');
  db
    .workOrderByPropertyId([req.params.id])
    .then(response => res.status(200).json(response))
    .catch(err => res.status(200).json({error: `${err}`}));
};

const workOrderByResidentId = (req, res) => {
  const db = req.app.get('db');
  db
    .workOrderByResidentId([req.session.user.userid])
    .then(response => res.status(200).json(response))
    .catch(err => res.status(200).json({error: `${err}`}));
};

const workOrderByUnitId = (req, res) => {
  const db = req.app.get('db');

  db
    .workOrderByUnitId([req.session.user.unitid])
    .then(response => res.status(200).json({workorders: response}))
    .catch(err => res.status(200).json({error: `${err}`}));
};

const addWorkOrder = (req, res) => {
  const db = req.app.get('db');
  const {content, urgency} = req.body;
  const {propertyid, userid, unitid} = req.session.user;

  db
    .addWorkOrder([moment().format('MMMM Do YYYY'), content, urgency, propertyid, userid, unitid])
    .then((response) => {
      maintenanceEmail(response[0].email, response[0].name);
      return res.status(200).json({added: true});
    })
    .catch(err => res.status(200).json({error: `${err}`}));
};

const closeWorkorder = (req, res) => {
  const db = req.app.get('db');

  db
    .closeWorkOrder([moment().format('MMMM Do YYYY'), req.params.id])
    .then(response => res.status(200).json({closed: true, response}))
    .catch(err => res.status(200).json({error: `${err}`}));
};

module.exports = {
  workOrderByPropertyId,
  workOrderByResidentId,
  workOrderByUnitId,
  addWorkOrder,
  closeWorkorder,
};
