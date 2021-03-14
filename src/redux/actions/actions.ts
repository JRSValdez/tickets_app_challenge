import { DUMMY_DATA, DATA_PRIORITIES, DATA_STATES } from "../../data/data";
import {
  FETCH_TICKETS,
  API_START,
  API_END,
  FETCH_PRIORITIES,
  FETCH_STATES,
  SET_SELECTED_TICKET,
} from "./types";
import { Dispatch } from "redux";
import { ITicket } from "../../utils/interfaces";

export const fetchTickets = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: API_START });
    const response = await new Promise((resolve, reject) => {
      setTimeout(function () {
        dispatch({ type: API_END });
        resolve(DUMMY_DATA);
      }, 2000);
    });
    return dispatch({
      type: FETCH_TICKETS,
      payload: response,
    });
  };
};

export const setSelectedTicket = (ticket:ITicket) => {
  return async (dispatch: Dispatch) => {
    return await dispatch({
      type: SET_SELECTED_TICKET,
      payload: ticket,
    });
  };
};

export const fetchPriorities = () => {
  return async (dispatch: Dispatch) => {
    const response = await new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(DATA_PRIORITIES);
      }, 1000);
    });
    return dispatch({
      type: FETCH_PRIORITIES,
      payload: response,
    });
  };
};

export const fetchStates = () => {
  return async (dispatch: Dispatch) => {
    const response = await new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(DATA_STATES);
      }, 1000);
    });
    return dispatch({
      type: FETCH_STATES,
      payload: response,
    });
  };
};
