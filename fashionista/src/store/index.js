import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import reducers from '../reducers';
import {loadState} from '../services/localStorage';

const persistedState = loadState();

const store = createStore(
    reducers,
    persistedState,
    applyMiddleware(thunk)
);

export default store;