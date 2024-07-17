import React from "react";
import Views from "./Views";
import Likes from "./Likes";

// Component Clubbing the Views and Likes Component
function ViewsLikes({ views, likes }) {
  return (
    <div class="container">
      <div class="row p-0 d-flex justify-content-between">
        <div class="col-6 p-0 d-inline">
          <Views views={views} />
        </div>
        <div class="col-5 p-0 d-inline">
          <Likes likes={likes} />
        </div>
      </div>
    </div>
  );
}

export default ViewsLikes;
