import { IState, ITicketState } from "./interfaces";

// TicketsState
export const TicketsInitialState: IState = {
  tickets: [],
  selectedTicket: {
    id: 0,
    name: "",
    user: {
      id: 0,
      name: "",
      email: "",
      is_admin: false,
    },
    description: "",
    priority: {
      id: 0,
      name: "",
    },
    state: {
      id: 0,
      name: "",
    },
    attachments: [],
    comments: [],
  },
  isLoading: false,
  states: [],
  priorities: [],
  error: false,
  message: "",
};

export const TicketScreenInitialState: ITicketState = {
  ticket: {
    id: 0,
    name: "",
    description: "",
    user: {
      id: 0,
      name: "",
      email: "",
      is_admin: false,
    },
    priority: {
      id: 0,
      name: "",
    },
    state: {
      id: 0,
      name: "",
    },
    attachments: [],
    comments: [],
  },
  success: true,
  error: false,
  message: "",
  isLoading: false,
};

// AuthState
