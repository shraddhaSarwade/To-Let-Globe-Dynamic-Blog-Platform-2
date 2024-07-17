import React from "react";
import "./CategoryContainer.css";
import Category from "./Category";

// Component to Display Six Category Cards
function CategoryContanier() {
  return (
    <>
      <div className="container CategoryContainer">
        <div className="row">
          <h4 className="shift-right">Categories</h4>
        </div>
        <div className="row">
          <Category
            title="News & Events"
            imgurl="https://toletglobe.in/static/media/Rectangle6.6cb4e66e8ba4e49ef6a6.png"
          />
          <Category
            title="Feature Updates"
            imgurl="https://toletglobe.in/static/media/Rectangle4.45de9616050c187e0424.png"
          />
          <Category
            title="Brand Collaboration"
            imgurl="https://toletglobe.in/static/media/Rectangle1.f404cfd1acad2c3ba0f3.png"
          />
          <Category
            title="Life at To-Let"
            imgurl="https://toletglobe.in/static/media/Rectangle2.b0e96d6863a9b9efbf1a.png"
          />
          <Category
            title="Internship Campaigns"
            imgurl="https://toletglobe.in/static/media/Rectangle5.1a245b8c6006b6c35946.png"
          />
          <Category
            title="Giveaway & Offers"
            imgurl="https://toletglobe.in/static/media/Rectangle3.acf6a35b73519ad9a85c.png"
          />
        </div>
      </div>
    </>
  );
}

export default CategoryContanier;
