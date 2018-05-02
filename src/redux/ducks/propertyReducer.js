import axios from 'axios';

const CREATE_PROPERTY = 'CREATE_PROPERTY';
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

    case `${CREATE_PROPERTY}_PENDING`:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case `${CREATE_PROPERTY}_FULFILLED`:
      return {
        ...state,
        properties: action.payload,
        loading: false,
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
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch(err => err),
  };
}
export function createProperty(obj) {
  return {
    type: CREATE_PROPERTY,
    payload: axios
      .post('/properties/add', obj)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch(err => err),
  };
}
