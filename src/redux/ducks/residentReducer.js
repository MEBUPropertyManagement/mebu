import axios from 'axios';

const GET_RESIDENTS = 'GET_RESIDENTS';
const CREATE_RESIDENT = 'CREATE_RESIDENT';

const initialState = {
  residents: [],
  loading: false,
  error: false,
};

export default function propertyReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_RESIDENTS}_PENDING`:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case `${GET_RESIDENTS}_FULFILLED`:
      return {
        ...state,
        residents: action.payload,
        loading: false,
        error: false,
      };
    case `${CREATE_RESIDENT}_PENDING`:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case `${CREATE_RESIDENT}_FULFILLED`:
      return {
        ...state,
        loading: false,
        error: false,
      };

    default:
      return state;
  }
}

export function getResidents(propertyId) {
  return {
    type: GET_RESIDENTS,
    payload: axios
      .get(`/residents/getResidents/${propertyId}`)
      .then((response) => {
        console.log(response.data);
        return response.data.residents;
      })
      .catch(err => err),
  };
}

export function addResident(obj) {
  return {
    type: CREATE_RESIDENT,
    payload: axios
      .post('/users/add', obj)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch(err => err),
  };
}
