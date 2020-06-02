import {combineReducers} from 'redux';

import app from './app';
import auth from './auth';
import content from './content';
import user from './user';

const allReducers = combineReducers({
    app: app,
    auth: auth,
    content: content,
    user: user
});

export default allReducers;