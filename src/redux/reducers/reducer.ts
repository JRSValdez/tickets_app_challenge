import {
  FETCH_TICKETS,
  SET_SELECTED_TICKET,
  FETCH_PRIORITIES,
  FETCH_STATES,
  API_END,
  API_START,
} from "../actions/types";
import {
  IState,
  ITicket,
  ITicketPriorities,
  ITicketStates,
} from "../../utils/interfaces";
import type { TicketsActionsType } from "../actions/types";

const initialState: IState = {
  tickets: [],
  selectedTicket: {
    id: 0,
    name: "",
    user: "",
    description: "",
    priority: 0,
    status: 0,
    attachments: [],
  },
  info: {
    page: 0,
    totalPages: 0,
    totalRegisters: 0,
  },
  isLoading: false,
  states: [],
  priorities: [],
};

const reducer = (state = initialState, action: TicketsActionsType): IState => {
  switch (action.type) {
    case FETCH_TICKETS:
      const res: IState = action.payload;
      return {
        ...state,
        tickets: res.tickets,
        info: res.info,
      };
    case SET_SELECTED_TICKET:
        const ticket = action.payload;
        return {
          ...state,
          selectedTicket:ticket,
        };
    case FETCH_PRIORITIES:
      const priorities: ITicketPriorities[] = action.payload.priorities;
      return {
        ...state,
        priorities:priorities
      };
    case FETCH_STATES:
      const states: ITicketStates[] = action.payload.states;
      return {
        ...state,
        states
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
    default:
      return state;
  }
};

export default reducer;
