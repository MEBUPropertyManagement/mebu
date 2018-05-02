const addUnit = (req, res) => {
  const db = req.app.get('db');
  const {
    size, occupied, bed, bath, roomnum, propertyid, rent,
  } = req.body;
  db
    .addUnit([size, occupied, bed, bath, roomnum, propertyid, rent])
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err));
};

const getUnitById = (req, res) => {
  const db = req.app.get('db');
  db
    .getUnitById([req.params.id])
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err));
};

module.exports = {
  addUnit,
  getUnitById,
};
