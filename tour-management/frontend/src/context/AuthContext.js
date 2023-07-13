import { useState } from "react";
import { createContext, useEffect, useReducer } from "react";

const initital_state = {
  user: localStorage.getItem('user')!==undefined 
  ? JSON.parse(localStorage.getItem('user')):null,
  loading: false,
  error: false,
};

export const AuthContext = createContext(initital_state);

const AuhtReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: action,
      };

    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };

    case "REGISTER_SUCESS":
      return {
        user: null,
        loading: false,
        error: null,
      };

    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export const AuthContextProvider  = ({children})=>{
    const [state, dispatch] = useReducer(AuhtReducer,initital_state)

    useEffect(()=>{
           localStorage.setItem('user',JSON.stringify(state.user))
    },[state.user])

    return <AuthContext.Provider value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
    }}>{children}</AuthContext.Provider>
}