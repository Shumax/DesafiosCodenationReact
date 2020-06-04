import {createStore} from 'redux';
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import UserConstants from '../constants/user';

import allReducers from '../reducers';

const reducer = (state, action) => {
    if (action.type === UserConstants.USER_LOGOUT) {
        state = undefined;
    }
    return allReducers(state, action);
}

const persistConfig = {
    key: 'spotifyStorage',
    storage,
    blacklist: ['auth', 'content']
}

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
    persistedReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

export {store, persistor};