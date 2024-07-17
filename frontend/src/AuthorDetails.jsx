import React from "react";
import "./AuthorDetails.css";

// Component to Display Author Details like Username, Role, and User Img Icon
function AuthorDetails({ author, role }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3 mr-4 p-0 pt-1">
          <img
            className="rounded-circle"
            src="/avatar.png"
            width="35px"
            alt="..."
          />
        </div>
        <div className="col-9 p-0">
          <div className="row" id="author">
            {author}
          </div>
          <div className="row" id="role">
            {role}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorDetails;
