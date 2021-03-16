import {
  AUTH_USER,
  LOG_OUT_USER,
  API_END,
  API_START,
  AUTH_ERROR,
} from "../actions/types";
import { IAuth } from "../../utils/interfaces";
import type { AuthActionsTypes } from "../actions/types";

const initialState: IAuth = {
  success: false,
  error: false,
  message: '',
  user: {
    id:0,
    name:'',
    email:'',
    is_admin:false
  },
  accessToken: "",
  isLoggedIn: false,
  isLoading: false,
};

const authReducer = (state = initialState, action: AuthActionsTypes): IAuth => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...action.payload,
        isLoggedIn: true,
        error: false,
      };
    case LOG_OUT_USER:
      return {
        ...state,
        isLoggedIn:false
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
    case AUTH_ERROR:
      return {
        ...initialState,
        error: true,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
