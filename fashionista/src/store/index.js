import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import reducers from '../reducers';
import {loadSate, saveState} from '../services/localStorage';

const persistedState = loadSate();

const store = createStore(
    reducers,
    persistedState,
    applyMiddleware(thunk)
);

export default store;