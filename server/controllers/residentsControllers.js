const getResidents = (req, res) => {
  const db = req.app.get('db');
  db
    .residents_getResidents([req.params.id])
    .then(response => res.status(200).json({residents: response}))
    .catch(err => res.status(200).json({error: `${err}`}));
};

const updateResident = (req, res) => {
  const db = req.app.get('db');
  const {email, firstName, lastName} = req.body;

  db
    .residents_updateResident([req.session.user.userid, email, firstName, lastName])
    .then(response => res.status(200).json({updated: true, response: response[0]}))
    .catch(err => res.status(200).json({updated: false, error: `${err}`}));
};

const updateStatus = (req, res) => {
  const db = req.app.get('db');
  const {status, id} = req.body;

  db
    .residents_updateStatus([status, id])
    .then(response => res.status(200).json({updated: true, response: response[0]}))
    .catch(err => res.status(200).json({updated: false, error: `${err}`}));
};

const getResidentsByUnit = (req, res) => {
  const db = req.app.get('db');
  db
    .residents_getResidentsByUnit([req.params.id])
    .then(response => res.status(200).json({residents: response}))
    .catch(err => res.status(200).json({error: `${err}`}));
};

const getResidentDetails = (req, res) => {
  const db = req.app.get('db');
  db
    .residents_getResidentDetails([req.session.user.userid])
    .then(response => res.status(200).json({details: response}))
    .catch(err => res.status(200).json({error: `${err}`}));
};

module.exports = {
  getResidents,
  updateResident,
  updateStatus,
  getResidentsByUnit,
  getResidentDetails,
};
