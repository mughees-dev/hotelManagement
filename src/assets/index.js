import userReducer from './reducers/userReducer';
import {createStore} from 'redux';
import thunk from 'redux-thunk';
import { applyMiddleware } from "redux";


const store = createStore(userReducer,applyMiddleware(thunk));

export default store;
