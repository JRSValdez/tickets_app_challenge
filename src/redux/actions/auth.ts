import API, { setClientToken } from "../../API";
import { AUTH_USER, AuthDispatch, AUTH_ERROR, LOG_OUT_USER } from "./types";
import { IUserCredentials } from "../../utils/interfaces";


export const authUser = (credentials: IUserCredentials) => {
  return async (dispatch: AuthDispatch) => {
    const response = await API.post("/login", credentials).then(
      (res) => res.data
    ).catch(error => error);

    if(response.success){
      setClientToken(response.accessToken);
      localStorage.setItem('accessToken', response.accessToken);
      return dispatch({
        type: AUTH_USER,
        payload: response,
      });
    }

    return dispatch({
      type: AUTH_ERROR,
      payload: response.message,
    });
    
  };
};

export const logOuthUser = () => {
  return async (dispatch: AuthDispatch) => {
    return dispatch({
      type: LOG_OUT_USER,
      payload: null,
    });
    
  };
};
