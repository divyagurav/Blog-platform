import React from "react";
import BlogForm from "../components/BlogForm";
import { useNavigate } from "react-router-dom";

const CreatePostPage = ({ posts, setPosts }) => {
  const navigate = useNavigate();

  const handleCreatePost = (post) => {
    const newPost = { id: Date.now(), ...post };
    setPosts([...posts, newPost]);
    navigate("/"); // Navigate back to home page after post creation
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <BlogForm onSubmit={handleCreatePost} />
    </div>
  );
};

export default CreatePostPage;
