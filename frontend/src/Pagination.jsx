import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import "./Pagination.css";

// Component for the Pagination
function Pagination({ noOfBlogs, paginate, currentPg }) {
  const paginationLIs = [];
  const totalPgs = Math.ceil(noOfBlogs / 6);

  for (let i = 1; i <= totalPgs; i++) {
    paginationLIs.push(i);
  }

  return (
    <div className="Pagination">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li
            className={`page-item ${currentPg === 1 ? "disabled" : ""}`}
            onClick={() => {
              paginate(currentPg !== 1 ? currentPg - 1 : currentPg);
            }}
          >
            <a className="page-link" href="#" tabIndex="-1">
              <NavigateBeforeIcon style={{ fontSize: "medium" }} />
              Previous
            </a>
          </li>
          {paginationLIs.map((pgNo, i) => (
            <li
              key={i}
              className={`page-item ${currentPg === pgNo ? "active" : ""}`}
              onClick={() => {
                paginate(pgNo);
              }}
            >
              <a className="page-link" href="#">
                {pgNo}
              </a>
            </li>
          ))}

          <li
            className={`page-item ${currentPg === totalPgs ? "disabled" : ""}`}
            onClick={() => {
              paginate(currentPg !== totalPgs ? currentPg + 1 : currentPg);
            }}
          >
            <a className="page-link" href="#">
              Next <NavigateNextIcon style={{ fontSize: "medium" }} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
