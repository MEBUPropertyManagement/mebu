const getResidents = (req, res) => {
  const db = req.app.get('db');
  db
    .getResidents([req.params.id])
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err));
};

module.exports = {
  getResidents,
};
