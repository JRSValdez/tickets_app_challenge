import API from "../../API";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { AUTH_USER, API_START, API_END } from "./types";
import { IAuth, IUserCredentials } from "../../utils/interfaces";

export type AppDispatch = ThunkDispatch<IAuth, any, AnyAction>;

export const authUser = (credentials: IUserCredentials) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: API_START });
    const response = await API.post("/login", credentials).then(
      (res) => res.data
    );
    return dispatch({
      type: AUTH_USER,
      payload: response,
    });
  };
};
