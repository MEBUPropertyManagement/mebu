const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const massive = require('massive');
const bCrypt = require('bcrypt');

// Authentication Controllers
const {
  residentRegistration,
  ownerRegistration,
  residentLogin,
  ownerLogin,
  addResident,
  ownerForgotPassword,
  residentForgotPassword,
  logout,
} = require(`${__dirname}/controllers/authenticationControllers`);

const {
  addProperties,
  getProperty,
  getProperties,
  deleteProperty,
} = require(`${__dirname}/controllers/propertiesControllers`);

const {addUnit, getUnitById, updateUnit} = require(`${__dirname}/controllers/unitsControllers`);

const {getResidents} = require(`${__dirname}/controllers/residentsControllers`);

const {
  workOrderByPropertyId,
  workOrderByResidentId,
  addWorkOrder,
  closeWorkorder,
} = require(`${__dirname}/controllers/workorderControllers`);

const {
  addBill,
  getBillingHistory,
  getAllUnpaidBills,
} = require(`${__dirname}/controllers/billsControllers`);

const {stripeCharge} = require(`${__dirname}/controllers/stripeController`);

require('dotenv').config();

const app = express();
const port = 3001;

massive(process.env.CONNECTION_STRING)
  .then((dbInstance) => {
    app.set('db', dbInstance);
  })
  .catch(err => console.log(err));

app.use(cors());
app.use(json());

app.set('bCrypt', bCrypt);

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 10000000,
  },
}));

app.post('/users/resident-registration', residentRegistration);
app.post('/users/resident-login', residentLogin);
app.post('/users/owner-registration', ownerRegistration);
app.post('/users/owner-login', ownerLogin);
app.post('/users/add', addResident);
app.post('/users/owner-forgot-password', ownerForgotPassword);
app.post('/users/resident-forgot-password', residentForgotPassword);
app.post('/users/logout', logout);

app.post('/unit/add', addUnit);
app.post('/unit/update', updateUnit);
app.get('/units/getById/:id', getUnitById);

app.post('/properties/add', addProperties);
app.put('/properties/deleteProperty/:id', deleteProperty);
app.get('/properties/getProperty/:id', getProperty);
app.get('/properties/getProperties', getProperties);

app.get('/residents/getById/:id', getResidents);

app.get('/workorder/getByPropertyId/:id', workOrderByPropertyId);
app.get('/workorder/getByResidentId/:id', workOrderByResidentId);
app.post('/workorder/addWorkorder', addWorkOrder);
app.post('/workorder/closeWorkorder/:id', closeWorkorder);

app.post('/bills/add', addBill);
app.post('/bills/pay', stripeCharge);
app.get('/bills/getBillingHistory', getBillingHistory);
app.get('/bills/getAllUnpaidBills', getAllUnpaidBills);

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
