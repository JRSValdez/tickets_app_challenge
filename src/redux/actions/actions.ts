import API from "../../API";
import {
  FETCH_TICKETS,
  UPDATE_TICKET,
  API_START,
  API_END,
  API_ERROR,
  FETCH_PRIORITIES,
  FETCH_STATES,
  SET_SELECTED_TICKET,
  TicketsDispatch,
} from "./types";
import { ITicket, ITicketAdd } from "../../utils/interfaces";

const failureMessage = "Porfavor llene correctamente los campos";

export const fetchTickets = () => {
  return async (dispatch: TicketsDispatch) => {
    dispatch({ type: API_START, payload: null });
    const response = await API.get("/ticket")
      .then((res) => {
        dispatch({ type: API_END, payload: null });
        return res.data;
      })
      .catch((error) => {
        return dispatch({
          type: API_ERROR,
          payload: error.message.toString(),
        });
      });

    if (response.success) {
      const tickets: ITicket[] = response.data;
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

export const addTicket = (ticket: ITicket) => {
  return async (dispatch: TicketsDispatch) => {
    dispatch({ type: API_START, payload: null });
    const response = await API.post("/ticket", {
      ...ticket,
      priority_id: ticket.priority.id,
      state_id: ticket.state.id,
    })
      .then((res) => {
        dispatch({ type: API_END, payload: null });
        return res.data;
      })
      .catch((error) => {
        dispatch({ type: API_END, payload: null });
        return error;
      });

    if (response.success) {
      const ticket: ITicket = response.data;
      return dispatch({
        type: UPDATE_TICKET,
        payload: ticket,
      });
    }

    return dispatch({
      type: API_ERROR,
      payload: failureMessage,
    });
  };
};

export const updateTicket = (ticket: ITicket) => {
  return async (dispatch: TicketsDispatch) => {
    dispatch({ type: API_START, payload: null });
    const response = await API.put(`/ticket/${ticket.id}`, {
      ...ticket,
      priority_id: ticket.priority.id,
      state_id: ticket.state.id,
    })
      .then((res) => {
        dispatch({ type: API_END, payload: null });
        return res.data;
      })
      .catch((error) => {
        dispatch({ type: API_END, payload: null });
        return error;
      });

    if (response.success) {
      const ticket: ITicket = response.data;
      return dispatch({
        type: UPDATE_TICKET,
        payload: ticket,
      });
    }

    return dispatch({
      type: API_ERROR,
      payload: failureMessage,
    });
  };
};

export const getTicketsByUser = (userId: number) => {
  return async (dispatch: TicketsDispatch) => {
    dispatch({ type: API_START, payload: null });
    const response = await API.get(`/ticket/user/${userId}`)
      .then((res) => {
        dispatch({ type: API_END, payload: null });
        return res.data;
      })
      .catch((error) => {
        dispatch({ type: API_END, payload: null });
        return error;
      });

    if (response.success) {
      const ticket: ITicket[] = response.data;
      return dispatch({
        type: FETCH_TICKETS,
        payload: ticket,
      });
    }

    return dispatch({
      type: API_ERROR,
      payload: response.message,
    });
  };
};

export const setSelectedTicket = (ticketId: number) => {
  return async (dispatch: TicketsDispatch) => {
    dispatch({ type: API_START, payload: null });
    const response = await API.get(`/ticket/${ticketId}`)
      .then((res) => {
        dispatch({ type: API_END, payload: null });
        return res.data;
      })
      .catch((error) => error);

    if (response.success) {
      return await dispatch({
        type: SET_SELECTED_TICKET,
        payload: response.data,
      });
    }

    return dispatch({
      type: API_ERROR,
      payload: response.message,
    });
  };
};

export const fetchPriorities = () => {
  return async (dispatch: TicketsDispatch) => {
    const response = await API.get("/priorities")
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return dispatch({
          type: API_ERROR,
          payload: error.message.toString(),
        });
      });
    return dispatch({
      type: FETCH_PRIORITIES,
      payload: response.data,
    });
  };
};

export const fetchStates = () => {
  return async (dispatch: TicketsDispatch) => {
    const response = await API.get("/states")
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return dispatch({
          type: API_ERROR,
          payload: error.message.toString(),
        });
      });
    return dispatch({
      type: FETCH_STATES,
      payload: response.data,
    });
  };
};
