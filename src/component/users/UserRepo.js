import React, { useContext } from "react";
import { context } from "../../Context/Context";

const UserRepo = () => {
  const { getRepo } = useContext(context);
  getRepo()
  return <div></div>;
};

export default UserRepo;
