import {
    AUTH_USER,
    LOG_OUT_USER,
    API_END,
    API_START,
  } from "../actions/types";
  import {
    IAuth
  } from "../../utils/interfaces";
  import type { AuthActionsTypes } from "../actions/types";
  
  const initialState:IAuth = {
    user:'',
    email:'',
    accessToken:'',
    isLoggedIn:false,
    isLoading:false
  };
  
  const authReducer = (state = initialState, action: AuthActionsTypes): IAuth => {
    switch (action.type) {
      case AUTH_USER:
        return {
          ...state,
        };
      case LOG_OUT_USER:
          return {
            ...state
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
  
  export default authReducer;
  