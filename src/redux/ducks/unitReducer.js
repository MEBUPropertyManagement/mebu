import axios from 'axios';

const GET_UNITS = 'GET_UNITS';
const UPDATE_UNIT = 'UPDATE_UNIT';

const initialState = {
  units: [],
  loading: false,
  error: false,
};

export default function propertyReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_UNITS}_PENDING`:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case `${GET_UNITS}_FULFILLED`:
      return {
        ...state,
        units: action.payload,
        loading: false,
        error: false,
      };
    case `${UPDATE_UNIT}_PENDING`:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case `${UPDATE_UNIT}_FULFILLED`:
      return {
        ...state,
        units: action.payload,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
}

export function getUnits(id) {
  return {
    type: GET_UNITS,
    payload: axios
      .get(`/units/getUnit/${id}`)
      .then(response => response.data)
      .catch(err => err),
  };
}

export function updateUnit(obj) {
  return {
    type: UPDATE_UNIT,
    payload: axios
      .post('/unit/update', obj)
      .then(response => response.data.response)
      .catch(err => err),
  };
}
