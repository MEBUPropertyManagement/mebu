const addProperties = (req, res) => {
  const db = req.app.get('db');
  const {
    name, photourl, address, units, value, expenses, ownerid,
  } = req.body;

  db
    .addProperties([name, photourl, address, units, value, expenses, ownerid])
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err));
};

// const getPropertyById = (req, res) => {
//   const db = req.app.get('db');
// const {}
// }

module.exports = {
  addProperties,
  // getPropertyById,
};
