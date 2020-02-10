import React, { useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { context } from "../../Context/Context";
import { Parent, Parent1 } from "../styles/getUser";
import UserRepo from "./UserRepo";

const GetUser = () => {
  const history = useHistory();
  const { user, repos, getUser, getRepo } = useContext(context);
  const { logins } = useParams();

  useEffect(() => {
    getUser(logins);
    getRepo(logins);
  }, []);

  const handleBack = () => {
    history.goBack();
  };

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
    <>
      <button onClick={handleBack}>Back</button>
      <Parent>
        <div className='first'>
          <div className='img'>
            <img src={avatar_url} alt={login} />
          </div>
          <div className='repos'>
            <span className='fa fa-user-plus'> Followers {followers}</span>
            <span className='fa fa-user-plus'> Following {following}</span>
            <span className='fa fa-user-plus'>
              {" "}
              Public Repos {public_repos}
            </span>
            <span className='fa fa-user-plus'> Gists {public_gist}</span>
          </div>
          <div className='bio'>
            <h3>Bio</h3>
            <p>{bio}</p>
          </div>
          <div className='github-link'>
            <a href={html_url}>User Github Link</a>
          </div>
        </div>

        <div className='second'>
          <div>
            <h1>{name} Github Profile</h1>
            <div className='attr'>
              <span className='fa fa-user'></span>
              <span>{login}</span>
            </div>
            <div className='attr'>
              <span className='fa fa-envelope'></span>
              <span>{email}</span>
            </div>
            <div className='attr'>
              <span className='fa fa-rss'></span>
              <a href={`https://${blog}`}>{blog}</a>
            </div>
            <div className='attr'>
              <span className='fa fa-building'></span>
              <span>{company}</span>
            </div>
            <div className='attr'>
              <span className='fa fa-street-view'></span>
              <span>{location}</span>
            </div>
          </div>
        </div>
      </Parent>
      <Parent1>
        {repos.map(repo => (
          <UserRepo key={repo.id} repo={repo} />
        ))}
      </Parent1>
    </>
  );
};

export default GetUser;
