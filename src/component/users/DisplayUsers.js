import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

const DisplayUsers = ({ user: { html_url, avatar_url, login } }) => {
  return (
    <div>
      <img src={avatar_url} alt={login} />
      <p>{login}</p>
      <Link to={`/user/${login}`}>View User</Link>
      <a href={html_url}>Github</a>
    </div>
  );
};

export default DisplayUsers;
