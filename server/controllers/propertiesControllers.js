const addProperties = (req, res) => {
  const db = req.app.get('db');
  const {
    name, photourl, address, units, value, expenses,
  } = req.body;

  db
    .addProperties([name, photourl, address, units, value, expenses, req.session.user.userid])
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err));
};

const getProperty = (req, res) => {
  const db = req.app.get('db');
  db
    .getPropertyById([req.params.id])
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err));
};

const getProperties = (req, res) => {
  const db = req.app.get('db');
  db
    .getPropertyById([req.session.user.userid])
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err));
};

module.exports = {
  addProperties,
  getProperty,
  getProperties,
};
