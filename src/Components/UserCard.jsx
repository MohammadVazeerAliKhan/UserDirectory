import React from "react";
import { Link } from "react-router-dom";
import { usePostContext } from "../PostContext";

function UserCard({ user }) {
  const { posts } = usePostContext();
  const postsLength = posts.filter((post) => post.userId === user.id).length;
  return (
    <div className="usercard">
      <Link to={`/users/${user.id}`} className="profilelinks">
        {/* Display username and post count */}
        <span> {user.name}</span>
        <span>Posts: {postsLength}</span>
      </Link>
    </div>
  );
}

export default UserCard;
