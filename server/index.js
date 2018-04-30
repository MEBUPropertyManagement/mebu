const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const massive = require('massive');
// const axios = require('axios');
const passport = require('passport');

require('dotenv').config();

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(db => app.set('db', db))
  .catch(err => console.log(err));

const port = 3001;
app.use(cors());
app.use(json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 10000000,
  },
}));

app.use(passport.initialize());
app.use(passport.session());

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
