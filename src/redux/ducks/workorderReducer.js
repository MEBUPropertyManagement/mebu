import axios from 'axios';

const GET_WORK_ORDER = 'GET_WORK_ORDER';
const GET_RESIDENT_WORK_ORDER = '';
const CHANGE_FILTERED_WORK_ORDER = 'CHANGE_FILTERED_WORK_ORDER';
const GET_WORK_ORDER_BY_ID = 'GET_WORK_ORDER_BY_ID';
const CLOSE_WORK_ORDER = 'CLOSE_WORK_ORDER';

const initialState = {
  workorders: [],
  filterWorkorders: [],
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

    case `${CLOSE_WORK_ORDER}`:
      return {
        ...state,
        workorders: {id: action.type.id},
      };

    case `${CHANGE_FILTERED_WORK_ORDER}`:
      console.log(action.payload);
      return {
        ...state,
        filterWorkorders: action.payload,
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

export function closeWorkorderById(id) {
  return {
    type: CLOSE_WORK_ORDER,
    payload: axios
      .put(`/workorder/closeWorkorder/${id}`)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch(err => err),
  };
}

export function changeFilteredWorkorder(arr) {
  return {
    type: CHANGE_FILTERED_WORK_ORDER,
    payload: arr,
  };
}
