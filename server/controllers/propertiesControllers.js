const addProperties = (req, res) => {
  const db = req.app.get('db');
  const {
    name, photourl, address, units, value, expenses,
  } = req.body;

  db
    .addProperties([name, photourl, address, units, value, expenses, req.session.user.userid])
    .then(response => res.status(200).json({added: true, property: response}))
    .catch(err => res.status(200).json({added: false, error: `${err}`}));
};

const getProperty = (req, res) => {
  const db = req.app.get('db');

  const property = {};

  db
    .getPropertyById([req.params.id])
    .then((propertyResponse) => {
      property.property = propertyResponse[0];
      db
        .properties_occupiedUnits([req.params.id])
        .then((unitsResponse) => {
          const sorted = unitsResponse.sort((a, b) => a.roomnum - b.roomnum);
          property.property.occupiedUnits = sorted;
          property.property.income = unitsResponse.reduce(
            (accumulator, currentValue) => accumulator + currentValue.rent,
            0,
          );
          return res.status(200).json(property);
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

const getProperties = (req, res) => {
  const db = req.app.get('db');

  db
    .properties_getProperties([req.session.user.userid])
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err));
};

const deleteProperty = (req, res) => {
  const db = req.app.get('db');

  db
    .properties_deleteProperty([req.params.id])
    .then(response => res.status(200).json({deleted: true, propertyid: req.params.id}))
    .catch(err => res.status(200).json({deleted: false, err}));
};

const updateProperty = (req, res) => {
  const db = req.app.get('db');

  const {
    name, photourl, address, units, value, expenses,
  } = req.body;

  db
    .properties_updateProperty([req.params.id, name, photourl, address, units, value, expenses])
    .then(response =>
      res.status(200).json({updated: true, propertyid: req.params.id, property: response[0]}))
    .catch(err =>
      res.status(200).json({updated: false, propertyid: req.params.id, error: `${err}`}));
};

module.exports = {
  addProperties,
  getProperty,
  getProperties,
  deleteProperty,
  updateProperty,
};
