import {combineReducers} from 'redux';
import ticketsReducer from './reducer'

const rootReducer = combineReducers({
    tickets: ticketsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;