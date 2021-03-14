import { DUMMY_DATA } from "../../data/data";
import {FETCH_TICKETS, API_START, API_END} from './types';
import { Dispatch } from 'redux';
import {IState} from '../../utils/interfaces';

export const fetchTickets = () => {
  return async (dispatch:Dispatch) => {
    dispatch({type:API_START});
    const response = await new Promise((resolve, reject) => {
      setTimeout(function () {
        dispatch({type:API_END});
        resolve(DUMMY_DATA);
      }, 2000)
    });
    return dispatch({
      type: FETCH_TICKETS,
      payload: response,
    });
  };
};
