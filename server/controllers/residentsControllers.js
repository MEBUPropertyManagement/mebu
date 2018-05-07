const getResidents = (req, res) => {
  const db = req.app.get('db');
  db
    .residents_getResidents([req.params.id])
    .then(response => res.status(200).json({residents: response}))
    .catch(err => res.status(200).json({error: `${err}`}));
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
  getResidentsByUnit,
  getResidentDetails,
};
