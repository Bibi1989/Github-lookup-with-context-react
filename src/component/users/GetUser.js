import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { context } from "../../Context/Context";
import { PARAM } from "../../Context/type";

const GetUser = () => {
  const { user, repos, dispatch } = useContext(context);
  const { logins } = useParams();
  useEffect(() => {
    dispatch({ type: PARAM, payload: logins });
  }, []);

  const {
    login,
    avatar_url,
    bio,
    name,
    followers,
    following,
    public_repos,
    public_gist,
    email,
    company,
    blog,
    location,
    html_url
  } = user;

  return (
    <div>
      <div>
        <img src={avatar_url} alt={login} />
        <div>
          <h3>Bio</h3>
          <p>{bio}</p>
        </div>
      </div>

      <div>
        <h1>{name} Github Profile</h1>
        <div>
          <span>Github Username: </span>
          <span>{login}</span>
        </div>
        <div>
          <span>Email Address: </span>
          <span>{email}</span>
        </div>
        <div>
          <span>Blog address: </span>
          <span>{blog}</span>
        </div>
        <div>
          <span>Company: </span>
          <span>{company}</span>
        </div>
        <div>
          <span>Location: </span>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default GetUser;
