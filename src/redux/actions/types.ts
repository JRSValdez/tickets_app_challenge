import {
  ITicket,
  ITicketPriorities,
  ITicketStates,
} from "../../utils/interfaces";

export const FETCH_TICKETS: string = "FETCH_TICKETS";
export const SET_SELECTED_TICKET: string = "SET_SELECTED_TICKET";
export const FETCH_PRIORITIES: string = "FETCH_PRIORITIES";
export const FETCH_STATES: string = "FETCH_STATES";
export const API_START: string = "API_START";
export const API_END: string = "API_END";

export type TicketsActionsType =
  | IFetchTickets
  | IAPIEnd
  | IAPIStart
  | IFetchPriorities
  | IFetchStates
  | ISetSelectedTicket;

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

interface IAPIStart {
  type: typeof API_START;
  payload: any;
}

interface IAPIEnd {
  type: typeof API_END;
  payload: any;
}
