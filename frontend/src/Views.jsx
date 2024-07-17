import React from "react";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";

// Component to Display the Views of a Blog
function Views({ views }) {
  return (
    <>
      <span id="visIcon">
        <VisibilityTwoToneIcon style={{ color: "#9da2af" }} />
      </span>
      <span> </span>
      <span style={{ color: "#9da2af" }}>{views}</span>
    </>
  );
}

export default Views;
