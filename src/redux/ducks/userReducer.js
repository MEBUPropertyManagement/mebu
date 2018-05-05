import axios from 'axios';

const LOGIN_OWNER = 'LOGIN_OWNER';
const WELCOME_OWNER = 'WELCOME_OWNER';
const CREATE_OWNER = 'CREATE_OWNER';
const LOGIN_RESIDENT = 'LOGIN_RESIDENT';
const CREATE_RESIDENT = 'CREATE_RESIDENT';
const LOGOUT_USER = 'LOGOUT_USER';

const initialState = {
  current_user: {},
  authenticated: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case `${LOGIN_OWNER}_FULFILLED`:
      return {
        ...state,
        current_user: {userid: action.payload.userid, email: action.payload.email},
        authenticated: action.payload.authenticated,
      };

    case `${WELCOME_OWNER}_FULFILLED`:
      return {
        ...state,
        current_user: action.payload,
        authenticated: action.payload.authenticated,
      };

    case `${CREATE_OWNER}_FULFILLED`:
      return {
        ...state,
        current_user: {userid: action.payload.userid, email: action.payload.email},
        authenticated: action.payload.authenticated,
      };

    case `${LOGIN_RESIDENT}_FULFILLED`:
      return {
        ...state,
        current_user: {userid: action.payload.userid, email: action.payload.email},
        authenticated: action.payload.authenticated,
      };

    case `${CREATE_RESIDENT}_FULFILLED`:
      return {
        ...state,
        current_user: {userid: action.payload.userid, email: action.payload.email},
        authenticated: action.payload.authenticated,
      };

    case `${LOGOUT_USER}`:
      return {
        ...state,
        current_user: {userid: action.payload, email: action.payload},
        authenticated: false,
      };

    default:
      return state;
  }
}

export function loginOwner(email, password) {
  return {
    type: LOGIN_OWNER,
    payload: axios
      .post('/users/owner-login', {
        email,
        password,
      })
      .then(response => response.data)
      .catch(err => err),
  };
}

// export function welcomeOwner(name) {
//   return {
//     type: WELCOME_OWNER,
//     payload:
//   }
// }

export function loginResident(email, password) {
  return {
    type: LOGIN_RESIDENT,
    payload: axios
      .post('/users/resident-login', {
        email,
        password,
      })
      .then(response => response.data)
      .catch(err => err),
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
    payload: '',
  };
}

export function createOwner(email, password, firstName, lastName, companyName) {
  return {
    type: CREATE_OWNER,
    payload: axios
      .post('/users/owner-registration', {
        email,
        password,
        firstName,
        lastName,
        companyName,
      })
      .then(response => response.data)
      .catch(err => err),
  };
}

export function createResident(email, password, firstName, lastName) {
  return {
    type: CREATE_RESIDENT,
    payload: axios
      .post('/users/resident-registration', {
        email,
        password,
        firstName,
        lastName,
      })
      .then(response => response.data)
      .catch(err => err),
  };
}
