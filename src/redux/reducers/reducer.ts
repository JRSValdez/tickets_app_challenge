import {
  FETCH_TICKETS,
  UPDATE_TICKET,
  SET_SELECTED_TICKET,
  FETCH_PRIORITIES,
  FETCH_STATES,
  API_END,
  API_START,
  API_ERROR,
} from "../actions/types";
import {
  IState,
  ITicketPriorities,
  ITicketStates,
} from "../../utils/interfaces";
import {TicketsInitialState} from '../../utils/initialStates';
import type { TicketsActionsType } from "../actions/types";

const reducer = (state = TicketsInitialState, action: TicketsActionsType): IState => {
  switch (action.type) {
    case FETCH_TICKETS:
      return {
        ...state,
        error:false,
        tickets: action.payload,
      };
    case UPDATE_TICKET:
      return {
        ...state,
        error:false,
        selectedTicket:{
          ...action.payload
        }
      };
    case SET_SELECTED_TICKET:
      const ticket = action.payload;
      return {
        ...state,
        error:false,
        selectedTicket: ticket,
      };
    case FETCH_PRIORITIES:
      const priorities: ITicketPriorities[] = action.payload;
      return {
        ...state,
        priorities: priorities,
      };
    case FETCH_STATES:
      const states: ITicketStates[] = action.payload;
      return {
        ...state,
        states,
      };
    case API_START:
      return {
        ...state,
        isLoading: true,
      };
    case API_END:
      return {
        ...state,
        isLoading: false,
      };
    case API_ERROR:
      return {
        ...state,
        error:true,
        message:action.payload
      };
    default:
      return state;
  }
};

export default reducer;
