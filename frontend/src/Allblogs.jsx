// Component to display all Blogs

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BlogContainer from "./BlogContainer";
import CategoryContanier from "./CategoryContainer";

function Allblogs() {
  return (
    <>
      <Navbar />

      <div className="insights container mt-4 text-center">
        <h2>Our Insights and Stories</h2>
        <p>Lorem Ipsum dolor sit amet consesctetur.Eu tincidunt.</p>
      </div>

      <BlogContainer />
      <CategoryContanier />

      <Footer />
    </>
  );
}

export default Allblogs;
