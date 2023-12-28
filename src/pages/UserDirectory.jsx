import React from "react";
import UserCard from "../Components/UserCard";

const UserDirectory = ({ users }) => {
  return (
    <div>
      <h1>User Directory</h1>
      {/* Display user cards using a loop */}
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserDirectory;
