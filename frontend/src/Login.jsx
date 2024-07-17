import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar";
import "./Login.css";
import { TextField, Button, Container, Box, Typography } from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";
import Link from "@mui/material/Link";
// import axios from "axios";
import axios from "./axiosConfig";

// Component to Display the Login Page
function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const handleChange = (evt) => {
    setLoginData({ ...loginData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await axios
      .post("/login", loginData)
      .then((response) => {
        console.log(response.data.isLogin);
        if (response.data.isLogin === false) {
          alert("Invalid Credentials! Please Try Again");
        } else {
          alert("Login Successful!");
          navigate("/blogs");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="login-form-container">
        <Container maxWidth="xs" className="login-form">
          <Typography variant="h4" className="title">
            Login
          </Typography>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <AccountCircle className="icon" />
              <TextField
                fullWidth
                placeholder="Username"
                name="username"
                value={loginData.username}
                onChange={handleChange}
                InputProps={{
                  disableunderline: "true",
                  className: "form-control",
                }}
              />
            </div>
            <div className="form-group">
              <Lock className="icon" />
              <TextField
                fullWidth
                placeholder="Password"
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                InputProps={{
                  disableunderline: "true",
                  className: "form-control",
                }}
              />
            </div>
            <Button type="submit" variant="contained" className="btn-custom">
              LOGIN
            </Button>
          </form>

          <Box className="links">
            <Link href="#" className="text-info">
              Forgot Password?
            </Link>
            <Link href="/register" className="text-info">
              Register
            </Link>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default Login;
