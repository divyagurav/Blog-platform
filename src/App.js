import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePostPage from "./pages/CreatePostPage";
import EditPostPage from "./pages/EditPostPage";
import Navbar from "./components/Navbar";
import LoginPage from "./Auth/Login";
import SignupPage from "./Auth/SignUp";

function App() {
  const [posts, setPosts] = useState([]); // State for storing blog posts

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="/"
          element={<LoginPage posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="/signup"
          element={<SignupPage posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="/create"
          element={<CreatePostPage posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="/edit/:id"
          element={<EditPostPage posts={posts} setPosts={setPosts} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
