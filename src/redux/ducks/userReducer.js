import axios from 'axios';

const LOGIN_OWNER = 'LOGIN_OWNER';
const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
const CREATE_OWNER = 'CREATE_OWNER';
const LOGIN_RESIDENT = 'LOGIN_RESIDENT';
const CREATE_RESIDENT = 'CREATE_RESIDENT';
const LOGOUT_USER = 'LOGOUT_USER';
const UPDATE_RESIDENT = 'UPDATE_RESIDENT';
const GET_USER = 'GET_USER';

const initialState = {
  current_user: '',
  authenticated: false,
  loading: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case `${LOGIN_OWNER}_FULFILLED`:
      return {
        ...state,
        current_user: {...action.payload},
        authenticated: action.payload.authenticated,
      };

    case `${CREATE_OWNER}_FULFILLED`:
      return {
        ...state,
        current_user: {...action.payload},
        authenticated: action.payload.authenticated,
      };

    case `${LOGIN_RESIDENT}_FULFILLED`:
      return {
        ...state,
        current_user: {...action.payload},
        authenticated: action.payload.authenticated,
      };

    case `${CREATE_RESIDENT}_FULFILLED`:
      return {
        ...state,
        current_user: {...action.payload},
        authenticated: action.payload.authenticated,
      };

    case `${LOGOUT_USER}`:
      return {
        ...state,
        current_user: {userid: action.payload, email: action.payload},
        authenticated: false,
      };

    case `${FORGOT_PASSWORD}`:
      return {
        ...state,
        current_user: {email: action.payload.email},
        authenticated: action.payload.authenticated,
      };

    case `${UPDATE_RESIDENT}_FULFILLED`:
      return {
        ...state,
        current_user: {...state.current_user, ...action.payload},
      };

    case `${GET_USER}_PENDING`:
      return {
        ...state,
        loading: true,
      };

    case `${GET_USER}_FULFILLED`:
      console.log('action.payload: ', action.payload);
      console.log('state.current_user: ', state.current_user);
      return {
        ...state,
        current_user: {...state.current_user, ...action.payload},
        loading: false,
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

export function forgotPassword(email) {
  return {
    type: FORGOT_PASSWORD,
    payload: axios
      .post('/users/owner-forgot-password', {email})
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch(err => console.log(err)),
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

export function updateResident(email, firstName, lastName) {
  return {
    type: UPDATE_RESIDENT,
    payload: axios
      .put('/residents/updateResident', {email, firstName, lastName})
      .then(response => response.data)
      .catch(err => err),
  };
}

export function getUser() {
  return {
    type: GET_USER,
    payload: axios
      .get('/users/current')
      .then(response => response.data.user)
      .catch(err => err),
  };
}
