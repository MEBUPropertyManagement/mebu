const addUnit = (req, res) => {
  const db = req.app.get('db');
  const {
    size, occupied, bed, bath, roomnum, propertyid,
  } = req.body;
  db
    .addUnit([size, occupied, bed, bath, roomnum, propertyid])
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err));
};

module.exports = {
  addUnit,
};
