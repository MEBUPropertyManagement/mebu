require('dotenv').config();
const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const massive = require('massive');
const bCrypt = require('bcrypt');
const path = require('path');

// Authentication Controllers
const {
  residentForgotPassword,
  residentRegistration,
  residentLogin,
  ownerForgotPassword,
  ownerRegistration,
  ownerLogin,
  addResident,
  getCurrentUser,
  logout,
} = require('./controllers/authenticationControllers');

// Property Controllers
const {
  addProperties,
  getProperty,
  getProperties,
  deleteProperty,
  updateProperty,
} = require('./controllers/propertiesControllers');

// Unit Controllers
const {
  addUnit, deleteUnit, getUnit, updateUnit,
} = require('./controllers/unitsControllers');

// Residents Controllers
const {
  getResidents,
  updateResident,
  updateStatus,
  getResidentsByUnit,
  getResidentDetails,
} = require('./controllers/residentsControllers');

// Workorder Controllers
const {
  workorderByPropertyId,
  workorderByResidentId,
  workorderByUnitId,
  addWorkorder,
  closeWorkorder,
} = require('./controllers/workordersControllers');

// Bills Controllers
const {addBill, getBillingHistory, getUnpaidBills} = require('./controllers/billsControllers');

// Stripe Controllers
const {stripeCharge} = require('./controllers/stripeController');

const app = express();
const port = 3001;

massive(process.env.CONNECTION_STRING)
  .then((dbInstance) => {
    app.set('db', dbInstance);
  })
  .catch(err => err);

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

app.use(express.static(`${__dirname}/../build`));

// Resident Authentication Endpoints
app.post('/users/resident-forgot-password', residentForgotPassword);
app.post('/users/resident-registration', residentRegistration);
app.post('/users/resident-login', residentLogin);

// Owner Authentication Endpoints
app.post('/users/owner-forgot-password', ownerForgotPassword);
app.post('/users/owner-registration', ownerRegistration);
app.post('/users/owner-login', ownerLogin);

// User Endpoints
app.get('/users/logout', logout);
app.post('/users/add', addResident);
app.get('/users/current', getCurrentUser);

// Unit Endpoints
app.post('/unit/add', addUnit);
app.delete('/unit/delete/:id', deleteUnit);
app.post('/unit/update', updateUnit);
app.get('/units/getUnit/:id', getUnit);

// Property Endpoints
app.post('/properties/add', addProperties);
app.put('/properties/update/:id', updateProperty);
app.put('/properties/deleteProperty/:id', deleteProperty);
app.get('/properties/getProperty/:id', getProperty);
app.get('/properties/getProperties', getProperties);

// Resident Endpoints
app.get('/residents/getResidents/:id', getResidents);
app.put('/residents/updateResident', updateResident);
app.patch('/residents/updateStatus', updateStatus);
app.get('/residents/getResidentsByUnit/:id', getResidentsByUnit);
app.get('/residents/getResidentDetails', getResidentDetails);

// Workorder Endpoints
app.post('/workorder/addWorkorder', addWorkorder);
app.put('/workorder/closeWorkorder/:id', closeWorkorder);
app.get('/workorder/getByPropertyId/:id', workorderByPropertyId);
app.get('/workorder/getByResidentId/', workorderByResidentId);
app.get('/workorder/getByUnitId', workorderByUnitId);

// Billing Endpoints
app.post('/bills/add', addBill);
app.post('/bills/pay', stripeCharge);
app.get('/bills/getBillingHistory', getBillingHistory);
app.get('/bills/getUnpaid', getUnpaidBills);

app.get('*', (req, res, next) => {
  res.sendFile(path.join(`${__dirname}/../build/index.html`));
};

app.listen(process.env.PORT || port, () => {
  console.log(`Dr. Crane is listening on ${port}`);
});
