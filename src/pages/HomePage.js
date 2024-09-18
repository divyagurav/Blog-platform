import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = ({ posts, setPosts }) => {
  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <h1>All Posts</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Link to={`/edit/${post.id}`}>Edit</Link>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default HomePage;
