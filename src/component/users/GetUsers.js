import React, { useContext } from "react";
import { context } from "../../Context/Context";
import DisplayUsers from "./DisplayUsers";

const GetUsers = () => {
  const { users } = useContext(context);
  return (
    <div>
      {users.map(user => (
        <DisplayUsers key={user.id} user={user} />
      ))}
    </div>
  );
};

export default GetUsers;
