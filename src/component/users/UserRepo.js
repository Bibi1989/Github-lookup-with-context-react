import React, { useContext } from "react";
import { context } from "../../Context/Context";

const UserRepo = ({ repo }) => {
  const {
    name,
    full_name,
    owner,
    html_url,
    git_url,
    clone_url,
    ssh_url,
    forks,
    open_issues,
    watchers,
    description,
    private: privates
  } = repo;
  return (
    <div className='repo'>
      <div className='private-head'>
        <span>{name}</span>
        <span style={privates ? { color: "orangered" } : { color: "blue" }}>
          {privates ? "Private" : "Public"}
        </span>
      </div>
      <p className='fa fa-auto-description'>{description}</p>
      <div className="forks">
        <span className='fa fa-user'> {owner.login}</span>
        <span className='fa fa-utensils'> {forks}</span>
        <span className='fa fa-eye'> {watchers}</span>
        <span className='fa fa-exclamation-triangle'> {open_issues}</span>
      </div>
    </div>
  );
};

export default UserRepo;
