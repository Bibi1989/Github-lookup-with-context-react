import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { useGet } from "restful-react";
import { SEARCH, USERS, USER, REPOS } from "./type";
import axios from "axios";

const client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
const client_secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

export const context = createContext();

export const Provider = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    text: ""
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  //   console.log(state)

  //   search all users
  const getUsers = async () => {
    const url = `https://api.github.com/search/users?q=${state.text}&client_id=${client_id}&client_secret=${client_secret}`;
    const response = await axios.get(url);
    console.log(response)
    dispatch({ type: USERS, payload: (response.data.items) });
  };
  //   getUsers()
  console.log(state.users);

  return (
    <context.Provider
      value={{
        getUsers,
        state,
        dispatch
      }}
    >
      {props.children}
    </context.Provider>
  );
};
