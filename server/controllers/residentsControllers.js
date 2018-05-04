const getResidents = (req, res) => {
  const db = req.app.get('db');
  db
    .residents_getResidents([req.params.id])
    .then(response => res.status(200).json({residents: response}))
    .catch(err => res.status(200).json({error: `${err}`}));
};

module.exports = {
  getResidents,
};
