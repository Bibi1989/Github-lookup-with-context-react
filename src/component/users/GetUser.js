import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { context } from "../../Context/Context";

const GetUser = () => {
  const { state, dispatch } = useContext(context);
  const { login } = useParams();
  useEffect(() => {
    dispatch({ type: "param", payload: login });
  }, []);
  const { user } = state;

  return (
    <div>
      <img src={user.avatar_url} alt={user.login} />
      <p>{user.login}</p>
    </div>
  );
};

export default GetUser;
