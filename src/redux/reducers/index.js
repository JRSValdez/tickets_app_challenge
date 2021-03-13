import {combineReducers} from 'redux';
import ticketsReducer from './reducer'

export default combineReducers({
    tickets: ticketsReducer
});