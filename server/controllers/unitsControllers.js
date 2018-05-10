const addUnit = (req, res) => {
  const db = req.app.get('db');
  const {
    size, occupied, bed, bath, roomnum, propertyid, rent,
  } = req.body;
  db
    .units_add([size, occupied, bed, bath, roomnum, propertyid, rent])
    .then(response => res.status(200).json({added: true, units: response}))
    .catch(err => res.status(200).json({added: false, error: `${err}`}));
};

const deleteUnit = (req, res) => {
  const db = req.app.get('db');

  db
    .units_delete([req.params.id])
    .then(res.status(200).json({deleted: true}))
    .catch(err => res.status(200).json({error: `${err}`}));
};

const getUnit = (req, res) => {
  const db = req.app.get('db');
  db
    .units_getById([req.params.id])
    .then((units) => {
      const sortedUnits = units.sort((a, b) => a.roomnum - b.roomnum);
      return res.status(200).json(sortedUnits);
    })
    .catch(err => res.status(200).json({error: `${err}`}));
};

const updateUnit = (req, res) => {
  const db = req.app.get('db');
  const {
    unitid, size, occupied, bed, bath, roomnum, propertyid, rent,
  } = req.body;
  db
    .unit_update([unitid, size, occupied, bed, bath, roomnum, propertyid, rent])
    .then((units) => {
      const response = units.sort((a, b) => a.roomnum - b.roomnum);
      return res.status(200).json({updated: true, response});
    })
    .catch(err => res.status(200).json({error: `${err}`}));
};

module.exports = {
  addUnit,
  deleteUnit,
  getUnit,
  updateUnit,
};
