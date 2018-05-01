const workOrderByPropertyId = (req, res) => {
  const db = req.app.get('db');
  db
    .workOrderByPropertyId([req.params.id])
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err));
};

const workOrderByResidentId = (req, res) => {
  const db = req.app.get('db');
  db
    .workOrderByResidentId([req.params.id])
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err));
};

const addWorkOrder = (req, res) => {
  const db = req.app.get('db');
  const {
    datestart, dateend, content, urgency, propertyid, residentid, unitid,
  } = req.body;
  db
    .addWorkOrder([datestart, dateend, content, urgency, propertyid, residentid, unitid])
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err));
};

module.exports = {
  workOrderByPropertyId,
  workOrderByResidentId,
  addWorkOrder,
};
