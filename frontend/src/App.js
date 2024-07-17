import React from "react";
import Allblogs from "./Allblogs";
import CreateBlog from "./CreateBlog";
import Login from "./Login";
import Register from "./Register";
import Blog from "./Blog";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Main App Component with all react routes
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Allblogs />} />
          {/* Route to display all blogs */}
          <Route path="/blogs" element={<Allblogs />} />
          {/* Route to display specific blog */}
          <Route path="/showBlog/:id" element={<Blog />} />
          {/* Route to display login page */}
          <Route path="/login" element={<Login />} />
          {/* Route to display register page */}
          <Route path="/register" element={<Register />} />
          {/* Route to display create blog page */}
          <Route path="/createBlog" element={<CreateBlog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
