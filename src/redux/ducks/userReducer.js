import axios from 'axios';

const LOGIN_OWNER = 'LOGIN_OWNER';
const CREATE_OWNER = 'CREATE_OWNER';
const LOGIN_RESIDENT = 'LOGIN_RESIDENT';
const CREATE_RESIDENT = 'CREATE_RESIDENT';

const initiaState = {
  current_user: {},
  authenticated: false,
};

export default function userReducer(state = initiaState, action) {
  switch (action.type) {
    case `${LOGIN_OWNER}_FULFILLED`:
      return {
        ...state,
        current_user: {userid: action.payload.userid, email: action.payload.email},
        authenticated: action.payload.authenticated,
      };

    case `${CREATE_OWNER}_FULFILLED`:
      return {
        ...state,
        current_user: {userid: action.payload.userid, email: action.payload.email},
        authenticated: action.payload.authenticated,
      };

    case LOGIN_RESIDENT:
      return {
        ...state,
      };

    case CREATE_RESIDENT:
      return {
        ...state,
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
      .then((response) => {
        console.log(response);
        return response.data;
      })
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
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch(err => err),
  };
}
