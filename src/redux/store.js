import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

const initialState = {};
const middleWares = [thunk, logger];

export default () => createStore(rootReducer, initialState, applyMiddleware(...middleWares))