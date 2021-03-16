import {
  FETCH_TICKETS,
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
import type { TicketsActionsType } from "../actions/types";

const initialState: IState = {
  tickets: [],
  selectedTicket: {
    id: 0,
    name: "",
    user: {
      id:0,
      name:'',
      email:''
    },
    description: "",
    priority: {
      id:0,
      name:''
    },
    state: {
      id:0,
      name:''
    },
    attachments: [],
    comments: [],
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
      return {
        ...state,
        tickets: action.payload,
      };
    case SET_SELECTED_TICKET:
      const ticket = action.payload;
      return {
        ...state,
        selectedTicket: ticket,
      };
    case FETCH_PRIORITIES:
      const priorities: ITicketPriorities[] = action.payload.priorities;
      return {
        ...state,
        priorities: priorities,
      };
    case FETCH_STATES:
      const states: ITicketStates[] = action.payload.states;
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
      };
    default:
      return state;
  }
};

export default reducer;
