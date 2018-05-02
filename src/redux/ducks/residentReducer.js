import axios from 'axios';

const GET_RESIDENTS = 'GET_RESIDENTS';

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

    default:
      return state;
  }
}

export function getResidents(propertyId) {
  return {
    type: GET_RESIDENTS,
    payload: axios
      .get(`/residents/getById/${propertyId}`)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch(err => err),
  };
}
