// BlogItem.js
import React from "react";
import "./BlogItem.css";

const BlogItem = ({ post }) => (
  <div>
    <h1>{post.title}</h1>
    <p>{post.content}</p>
  </div>
);

export default BlogItem;
