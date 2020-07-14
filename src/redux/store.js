import { createStore, compose, applyMiddleware } from 'redux';
import itemReducer from './itemReducer';
import thunk from 'redux-thunk';
import { getAllItems } from '../redux/actions';

const middleware = [thunk];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(itemReducer, composeEnhancers(applyMiddleware(...middleware), ...enhancers));

store.dispatch(getAllItems());

export default store;
