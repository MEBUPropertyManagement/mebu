import axios from 'axios';

// const CREATE_PROPERTY = 'CREATE_PROPERTY';
const GET_PROPERTIES = 'GET_PROPERTIES';

const initialState = {
  properties: [],
  loading: false,
  error: false,
};

export default function propertyReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_PROPERTIES}_PENDING`:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case `${GET_PROPERTIES}_FULFILLED`:
      return {
        ...state,
        loading: false,
        properties: action.payload,
        error: false,
      };

    default:
      return state;
  }
}

export function getProperties() {
  return {
    type: GET_PROPERTIES,
    payload: axios
      .get('/properties/getProperties')
      .then(response => response.data)
      .catch(err => err),
  };
}
