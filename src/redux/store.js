import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './ducks/userReducer';
import propertyReducer from './ducks/propertyReducer';

const store = createStore(
  combineReducers({userReducer, propertyReducer}),
  applyMiddleware(promiseMiddleware()),
);

export default store;
