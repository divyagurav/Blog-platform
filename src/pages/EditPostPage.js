import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BlogForm from "../components/BlogForm";

const EditPostPage = ({ posts, setPosts }) => {
  const { id } = useParams(); // Get the post ID from URL parameters
  const navigate = useNavigate();

  const post = posts.find((post) => post.id === parseInt(id));

  const handleEditPost = (updatedPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === parseInt(id) ? { ...post, ...updatedPost } : post
    );
    setPosts(updatedPosts);
    navigate("/"); // Navigate back to home page after editing
  };

  return (
    <div>
      <h1>Edit Post</h1>
      {post ? (
        <BlogForm onSubmit={handleEditPost} initialValues={post} />
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
};

export default EditPostPage;
