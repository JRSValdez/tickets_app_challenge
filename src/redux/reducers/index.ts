import {combineReducers} from 'redux';
import ticketsReducer from './reducer';
import authReducer from './auth';

const rootReducer = combineReducers({
    tickets: ticketsReducer,
    auth:authReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;