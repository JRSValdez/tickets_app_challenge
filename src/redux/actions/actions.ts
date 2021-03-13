import { DUMMY_DATA } from "../../data/data";
import {FETCH_TICKETS} from './types';
import { Dispatch } from 'redux';

export const fetchTickets = () => {
  return async (dispatch:Dispatch) => {
    const response = await new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(DUMMY_DATA);
      }, 2000);
    });
    return dispatch({
      type: FETCH_TICKETS,
      payload: response,
    });
  };
};