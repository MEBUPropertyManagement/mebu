const addUnit = (req, res) => {
  const db = req.app.get('db');
  const {
    size, occupied, bed, bath, roomnum, propertyid, rent,
  } = req.body;
  db
    .addUnit([size, occupied, bed, bath, roomnum, propertyid, rent])
    .then(response => res.status(200).json({added: true, units: response}))
    .catch(err => res.status(200).json({added: false, error: `${err}`}));
};

const getUnit = (req, res) => {
  const db = req.app.get('db');
  db
    .getUnitById([req.params.id])
    .then(response => res.status(200).json(response))
    .catch(err => res.status(200).json({error: `${err}`}));
};

const updateUnit = (req, res) => {
  const db = req.app.get('db');
  const {
    unitid, size, occupied, bed, bath, roomnum, propertyid, rent,
  } = req.body;
  db
    .unit_update([unitid, size, occupied, bed, bath, roomnum, propertyid, rent])
    .then(response => res.status(200).json({updated: true, response}))
    .catch(err => res.status(200).json({error: `${err}`}));
};

module.exports = {
  addUnit,
  getUnit,
  updateUnit,
};
