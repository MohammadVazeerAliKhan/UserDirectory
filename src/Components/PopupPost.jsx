import React from "react";

const PopupPost = ({ post, onClose }) => {
  return (
    <>
      <div className="popupcontainer">
        <div>
          <span className="close" onClick={onClose}>
            X
          </span>
        </div>
        <div className="popup-content">
          <span>Title</span>
          <h2>
            {post.id} . {post.title}
          </h2>
          <span>Created By</span>
          <h4>{post.userId}</h4>
          <span>Content</span>
          <p className="italic">{post.body}</p>
        </div>
      </div>
    </>
  );
};

export default PopupPost;
