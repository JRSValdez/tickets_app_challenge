import API from "../../API";
import { DATA_PRIORITIES, DATA_STATES } from "../../data/data";
import {
  FETCH_TICKETS,
  API_START,
  API_END,
  API_ERROR,
  FETCH_PRIORITIES,
  FETCH_STATES,
  SET_SELECTED_TICKET,
  TicketsDispatch,
} from "./types";
import { ITicket } from "../../utils/interfaces";

export const fetchTickets = () => {
  return async (dispatch: TicketsDispatch) => {
    dispatch({ type: API_START, payload: null });
    const response = await API.get("/ticket").then((res) => {
      dispatch({ type: API_END, payload: null });
      return res.data;
    }).catch(error => {
      return dispatch({
        type: API_ERROR,
        payload: error.message.toString(),
      });
    });

    if(response.success){
      const tickets:ITicket[] = response.data;
      return dispatch({
        type: FETCH_TICKETS,
        payload: tickets,
      });
    }

    return dispatch({
      type: API_ERROR,
      payload: response.message,
    });
    
  };
};

export const setSelectedTicket = (ticket: ITicket) => {
  return async (dispatch: TicketsDispatch) => {
    return await dispatch({
      type: SET_SELECTED_TICKET,
      payload: ticket,
    });
  };
};

export const fetchPriorities = () => {
  return async (dispatch: TicketsDispatch) => {
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
  return async (dispatch: TicketsDispatch) => {
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
