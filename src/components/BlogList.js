import React from "react";
import { Link } from "react-router-dom";
import "./BlogList.css";

const BlogList = ({ posts }) => (
  <div>
    <h1>Blog Posts</h1>
    {posts.map((post) => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <Link to={`/posts/${post.id}`}>Read More</Link>
        <Link to={`/edit/${post.id}`}>Edit</Link>
      </div>
    ))}
    <Link to="/create">Create New Post</Link>
  </div>
);

export default BlogList;
