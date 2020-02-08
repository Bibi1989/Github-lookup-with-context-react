import React, { createContext, useReducer, useEffect } from "react";
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
    text: "",
    login: ""
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = `https://api.github.com/search/users?q=${state.text}&client_id=${client_id}&client_secret=${client_secret}`;
  const single_url = `https://api.github.com/users/${state.login}?client_id=${client_id}&client_secret=${client_secret}`;
  useEffect(() => {
    getUsers();
  }, [url]);

  useEffect(() => {
    getUser();
  }, [single_url]);

  //   search all users
  const getUsers = async () => {
    const response = await axios.get(url);
    dispatch({ type: USERS, payload: response.data.items });
  };

  //   getUser
  const getUser = async () => {
    const response = await axios.get(single_url);
    dispatch({ type: USER, payload: response.data });
  };

  return (
    <context.Provider
      value={{
        getUsers,
        getUser,
        state,
        dispatch
      }}
    >
      {props.children}
    </context.Provider>
  );
};
