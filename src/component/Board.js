import React, { useState } from "react";
import "./Board.css";

const Board = () => {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState("");

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPostText.trim() !== "") {
      const newPost = {
        id: Date.now(),
        text: newPostText,
        comments: [],
      };
      setPosts([...posts, newPost]);
      setNewPostText("");
    }
  };

  const handleCommentSubmit = (postId, commentText) => {
    if (commentText.trim() !== "") {
      const updatedPosts = posts.map((post) => {
        if (post.id === postId) {
          const newComment = {
            id: Date.now(),
            text: commentText,
          };
          return {
            ...post,
            comments: [...post.comments, newComment],
          };
        }
        return post;
      });
      setPosts(updatedPosts);
    }
  };

  return (
    <div>
      <br />
      <h2>Music Recommend Board</h2>
      <br />
      <form onSubmit={handlePostSubmit}>
        <textarea
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
          placeholder="Write a new post"
        />
        <button type="submit">Post</button>
      </form>
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <p>{post.text}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const commentText = e.target.comment.value;
                handleCommentSubmit(post.id, commentText);
                e.target.comment.value = "";
              }}
            >
              <input type="text" name="comment" placeholder="Write a comment" />
              <button type="submit">Comment</button>
            </form>
            <div className="comments">
              {post.comments.map((comment) => (
                <div key={comment.id} className="comment">
                  {comment.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
