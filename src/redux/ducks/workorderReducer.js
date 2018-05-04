import axios from 'axios';

const GET_WORK_ORDER = 'GET_WORK_ORDER';
const GET_WORK_ORDER_BY_ID = 'GET_WORK_ORDER_BY_ID';

const initialState = {
  workorders: [],
  loading: false,
  error: false,
};

export default function workorderReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_WORK_ORDER_BY_ID}_PENDING`:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case `${GET_WORK_ORDER_BY_ID}_FULFILLED`:
      return {
        ...state,
        workorders: action.payload,
        loading: false,
        error: false,
      };

    default:
      return state;
  }
}

export function getWorkorderById(id) {
  return {
    type: GET_WORK_ORDER_BY_ID,
    payload: axios
      .get(`/workorder/getByPropertyId/${id}`)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch(err => err),
  };
}
