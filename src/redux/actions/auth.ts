import API, { setClientToken } from "../../API";
import { AUTH_USER, AuthDispatch, API_ERROR } from "./types";
import { IAuth, IUserCredentials } from "../../utils/interfaces";


export const authUser = (credentials: IUserCredentials) => {
  return async (dispatch: AuthDispatch) => {
    const response = await API.post("/login", credentials).then(
      (res) => res.data
    );

    if(response.success){
      setClientToken(response.accessToken);
      localStorage.setItem('accessToken', response.accessToken);
      return dispatch({
        type: AUTH_USER,
        payload: response,
      });
    }

    return dispatch({
      type: API_ERROR,
      payload: response.message,
    });
    
  };
};
