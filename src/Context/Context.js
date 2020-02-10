import React, { createContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";
import { useGet } from "restful-react";
import { SEARCH, USERS, USER, REPOS, PARAM } from "./type";
import axios from "axios";

const client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
const client_secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

export const context = createContext();

export const Provider = props => {
  // initial state
  const initialState = {
    users: [],
    user: {},
    repos: [],
    logins: ""
  };

  //   use reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  //   get all users
  const getUsers = async text => {
    const url = `https://api.github.com/search/users?q=${text}&client_id=${client_id}&client_secret=${client_secret}`;
    const response = await axios.get(url);
    dispatch({ type: USERS, payload: response.data.items });
  };

  //   get a user
  const getUser = async logins => {
    const single_url = `https://api.github.com/users/${logins}?client_id=${client_id}&client_secret=${client_secret}`;
    const response = await axios.get(single_url);
    dispatch({ type: USER, payload: response.data });
  };

  //   get repos
  const getRepo = async logins => {
    const url_repo = `https://api.github.com/users/${logins}/repos?per_page=4&sort=created:asc&client_id=${client_id}&client_secret=${client_secret}`;
    const response = await axios.get(url_repo);
    dispatch({ type: REPOS, payload: response.data });
  };

  return (
    <context.Provider
      value={{
        getUsers,
        getUser,
        getRepo,
        users: state.users,
        user: state.user,
        repos: state.repos,
      }}
    >
      {props.children}
    </context.Provider>
  );
};
