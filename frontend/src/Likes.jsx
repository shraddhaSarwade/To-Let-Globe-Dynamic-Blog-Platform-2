import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// Component to Display the Likes of the blog
function Likes({ likes, handleLikes }) {
  return (
    <>
      <span id="visIcon" onClick={handleLikes}>
        <FavoriteBorderIcon style={{ color: "#9da2af", fontSize: "medium" }} />
      </span>
      <span> </span>
      <span style={{ color: "#9da2af" }}>{likes}</span>
    </>
  );
}

export default Likes;
