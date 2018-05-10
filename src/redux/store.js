import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './ducks/userReducer';
import propertyReducer from './ducks/propertyReducer';
import residentReducer from './ducks/residentReducer';
import workorderReducer from './ducks/workorderReducer';
import unitReducer from './ducks/unitReducer';

const store = createStore(
  combineReducers({
    userReducer,
    propertyReducer,
    residentReducer,
    workorderReducer,
    unitReducer,
  }),
  applyMiddleware(promiseMiddleware()),
);

export default store;
