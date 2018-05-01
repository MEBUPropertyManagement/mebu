import axios from 'axios';

const LOGIN_OWNER = 'LOGIN_OWNER';
const LOGIN_RESIDENT = 'LOGIN_RESIDENT';

const initiaState = {
  current_user: {},
  authenticated: false,
};

export default function userReducer(state = initiaState, action) {
  switch (action.type) {
    case LOGIN_OWNER:
      return {
        ...state,
      };

    case LOGIN_RESIDENT:
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
