import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

// Component to Display the Footer
function Footer() {
  return (
    <>
      <footer className="py-4 custom-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5>To Let Globe</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Services</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Contact</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    Email
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Newsletter</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    Sign up to our Newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-9">
              <p>&copy; 2023 To-Let Globe -- Lucknow</p>
            </div>
            <div className="col-md-3">
              <a href="#" className="m-2">
                <FacebookIcon />
              </a>
              <a href="#" className="m-2">
                <InstagramIcon />
              </a>
              <a href="#" className="m-2">
                <XIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
