import {createStore} from 'redux';
import userReducer from './ducks/users';

const store = createStore(userReducer);


export default store;