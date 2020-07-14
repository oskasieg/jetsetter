import { createStore, compose, applyMiddleware } from 'redux';
import itemReducer from './itemReducer';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import saga from './saga';
import { fetchItems } from './actions';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, thunk];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(itemReducer, composeEnhancers(applyMiddleware(...middleware), ...enhancers));

sagaMiddleware.run(saga);

store.dispatch(fetchItems());

export default store;
