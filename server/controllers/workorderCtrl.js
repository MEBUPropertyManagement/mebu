const workOrderByPropertyId = (req, res) => {
  const db = req.app.get('db');
  db
    .workOrderByPropertyId([req.params.id])
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err));
};

module.exports = {
  workOrderByPropertyId,
};
