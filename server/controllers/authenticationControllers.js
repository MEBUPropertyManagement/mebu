const bcrypt = require('bcrypt');

const saltRounds = 10;

const residentRegistration = (req, res) => {
  const db = req.app.get('db');
  const {
    email, password, firstName, lastName,
  } = req.body;

  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      db
        .resident_registration([email, hash, firstName, lastName])
        .then((response) => {
          if (response.length > 0) {
            req.session.user = email;
            return res.status(200).json({authentication: true, email});
          }
          return res.status(200).json({authenticated: false, email});
        })
        .catch(err => console.log(err));
    });
  });
};

const ownerRegistration = (req, res) => {
  const db = req.app.get('db');
  const {
    email, password, firstName, lastName, companyName,
  } = req.body;

  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      db
        .owner_registration([email, hash, firstName, lastName, companyName])
        .then((response) => {
          console.log(response);
          if (response.length > 0) {
            req.session.user = email;
            return res.status(200).json({authentication: true, email});
          }
          return res.status(200).json({authenticated: false, email});
        })
        .catch(err => console.log(err));
    });
  });
};

const residentLogin = (req, res) => {
  const db = req.app.get('db');
  const {
    email, password, firstName, lastName, companyName,
  } = req.body;

  db
    .resident_login(email, password)
    .then((response) => {
      if (response.length > 0) {
        const hash = response[0].password;
        bcrypt.compare(password, hash, (err, result) => {
          if (result === true) {
            return res.status(200).json({authenticated: true, email});
          }
          return res.status(200).json({authenticated: false, email});
        });
      }
    })
    .catch(err => console.log(err));
};

const ownerLogin = (req, res) => {
  const db = req.app.get('db');
  const {email, password} = req.body;

  db
    .owner_login([email, password])
    .then((response) => {
      if (response.length > 0) {
        const hash = response[0].password;
        bcrypt.compare(password, hash, (err, result) => {
          console.log(result);
          if (result === true) {
            return res.status(200).json({authenticated: true, email});
          }
          return res.status(200).json({authenticated: false, email});
        });
      } else {
        return res.status(200).json({authenticated: false, email});
      }
    })
    .catch(err => console.log(err));
};

const logout = (req, res) => {
  const {email} = req.body;
  req.session.destroy();
  return res.status(200).json({authenticated: false, email});
};

module.exports = {
  residentRegistration,
  ownerRegistration,
  residentLogin,
  ownerLogin,
  logout,
};
