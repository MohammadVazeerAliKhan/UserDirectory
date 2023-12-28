import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Clock from "../Components/Clock";
import PostCard from "../Components/PostCard.jsx";
import UserProfile from "../Components/UserProfile.jsx";
import { useUserContext } from "../UserContext.jsx";
import { usePostContext } from "../PostContext.jsx";
import { Link } from "react-router-dom";
import Dropdown from "../Components/Dropdown.jsx";
const UserDetails = () => {
  const { users } = useUserContext();
  const { posts } = usePostContext();
  const { userId } = useParams();
  const usersId = parseInt(userId, 10);
  const [user, setUser] = useState("");
  const [userPosts, setUserPosts] = useState([]);
  const [region, setRegion] = useState("Africa/Khartoum");

  // ... other state variables for clock and country selection

  useEffect(() => {
    const getUserAndPosts = async () => {
      const currentUser = await users.find((user) => user.id === usersId);
      setUser(currentUser);
      const userPostList = await posts.filter(
        (post) => post.userId === usersId
      );
      setUserPosts(userPostList);
    };
    getUserAndPosts();
  }, [usersId, users, posts]);
  // console.log(users, user);
  return (
    <div>
      {/* Display page title, country clock selector, user information, and posts */}
      <header>
        <Link to="/" className="backbtn">
          Back
        </Link>

        <h2 className="mainhead">Profile Page</h2>
        <Dropdown region={region} setRegion={setRegion} />
        <Clock region={region} />
        {/* Back link, country drop down, default user country, button for start/pause */}
      </header>
      <br />
      <hr />
      <div className="userprofile">
        <UserProfile user={user} />
      </div>
      <br />
      <hr />
      <h2>Posts</h2>
      <div className="userposts">
        {userPosts.map((post) => {
          return (
            <div key={post.id}>
              <PostCard post={post} />
            </div>
          );
        })}
      </div>
      <br />
      <Link to="/" className="backsymbol">
        Back
      </Link>
    </div>
  );
};

export default UserDetails;
