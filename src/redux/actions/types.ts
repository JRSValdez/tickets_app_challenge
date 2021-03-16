import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import {
  IState,
  ITicket,
  ITicketPriorities,
  ITicketStates,
  IAuth,
  IUserCredentials
} from "../../utils/interfaces";

//TICKETS
export const FETCH_TICKETS: string = "FETCH_TICKETS";
export const SET_SELECTED_TICKET: string = "SET_SELECTED_TICKET";
export const FETCH_PRIORITIES: string = "FETCH_PRIORITIES";
export const FETCH_STATES: string = "FETCH_STATES";

interface IFetchTickets {
  type: typeof FETCH_TICKETS;
  payload: ITicket[];
}

interface ISetSelectedTicket {
  type: typeof SET_SELECTED_TICKET;
  payload: ITicket;
}

interface IFetchPriorities {
  type: typeof FETCH_PRIORITIES;
  payload: ITicketPriorities[];
}

interface IFetchStates {
  type: typeof FETCH_STATES;
  payload: ITicketStates[];
}

export type TicketsActionsType =
  | IFetchTickets
  | IAPIEnd
  | IAPIStart
  | IFetchPriorities
  | IFetchStates
  | ISetSelectedTicket;

export type TicketsDispatch = ThunkDispatch<IState, any, TicketsActionsType>;


//AUTH
export const AUTH_USER: string = "AUTH_USER";
export const LOG_OUT_USER: string = "LOG_OUT_USER";

interface IAuthUser {
  type: typeof AUTH_USER;
  payload: IAuth;
}

export type AuthActionsTypes = IAuthUser | IAPIStart | IAPIEnd | IAPIError;

export type AuthDispatch = ThunkDispatch<IAuth, any, AnyAction>;


//API
export const API_START: string = "API_START";
export const API_END: string = "API_END";
export const API_ERROR: string = "API_ERROR";

interface IAPIStart {
  type: typeof API_START;
  payload: any;
}

interface IAPIEnd {
  type: typeof API_END;
  payload: any;
}

interface IAPIError {
  type: typeof API_ERROR;
  payload: string;
}
