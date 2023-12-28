import React from "react";
import { useState } from "react";
import PopupPost from "./PopupPost";
// import { PopupContext } from "../PopupContext";
function PostCard({ post }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const { isPopupOpen, setIsPopupOpen } = useContext(PopupContext);
  const handlePostClick = () => {
    if (isPopupOpen) {
      return;
    }
    setIsPopupOpen(true);
    console.log(isPopupOpen);
  };
  console.log(isPopupOpen);
  const handlePopupClose = () => {
    setIsPopupOpen(false);
    console.log(isPopupOpen);
  };

  return (
    <>
      <div className="postcard">
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        <button className="backbtn" onClick={handlePostClick}>
          Read More...
        </button>
        <span className="number">{post.id}</span>
      </div>

      {isPopupOpen && <PopupPost post={post} onClose={handlePopupClose} />}
    </>
  );
}

export default PostCard;

// {
//   "userId": 1,
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// },
