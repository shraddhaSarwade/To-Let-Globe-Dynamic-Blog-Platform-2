import React, { useState, useEffect } from "react";
import "./Navbar.css";
// import axios from "axios";
import axios from "./axiosConfig";

// Component to Display the Navbar
function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLoggedInStatus = async () => {
    await axios
      .post("/logInStatus")
      .then((response) => {
        console.log("LOG IN STATUS", response.data.isLoggedIn);
        if (response.data.isLoggedIn) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
        // Redirect to the /blogs page
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error actions, e.g., show error message
      });
  };

  const handleLogout = async () => {
    await axios
      .post("/logout")
      .then((response) => {
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error actions, e.g., show error message
      });
  };

  useEffect(() => {
    checkLoggedInStatus();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar" id="navbarborder">
        <div className="container-fluid">
          {/* <div> */}
          <a className="navbar-brand" href="#">
            <img
              src="/logo.jpeg"
              alt=""
              style={{ width: "80px", height: "80px" }}
            />
          </a>
          {/* </div> */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item rounded-pill">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item rounded-pill">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item rounded-pill">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item rounded-pill">
                <a className="nav-link" href="/blogs">
                  Blog
                </a>
              </li>
              <li className="nav-item rounded-pill">
                <a className="nav-link" href="#">
                  Property Listing
                </a>
              </li>
              <li
                className={`nav-item rounded-pill ${
                  isLoggedIn ? "d-none" : ""
                }`}
              >
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
              <li
                className={`nav-item rounded-pill ${
                  isLoggedIn ? "" : "d-none"
                }`}
                onClick={handleLogout}
              >
                <a className="nav-link" href="/login">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
