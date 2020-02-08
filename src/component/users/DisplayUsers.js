import React from "react";

const DisplayUsers = ({user: { html_url, avatar_url, login }}) => {
  return (
    <div>
      <img src={avatar_url} alt={login} />
    </div>
  );
};

export default DisplayUsers;
