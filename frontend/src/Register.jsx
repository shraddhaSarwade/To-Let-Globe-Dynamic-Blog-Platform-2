// import axios from "axios";
import axios from "./axiosConfig";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { AccountCircle, Lock, Person } from "@mui/icons-material";
import Link from "@mui/material/Link"; // Ensure Link is imported correctly
import "./Register.css";

// Component to Display the Register Page
const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "",
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const response = await axios.post("/register", formData);
    alert("Registration Successful!");
    navigate("/blogs");
  };

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="register-form-container">
        <Container maxWidth="xs" className="register-form">
          <Typography variant="h4" className="title">
            Register
          </Typography>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <AccountCircle className="icon" />
              <TextField
                fullWidth
                placeholder="Username"
                name="username"
                value={formData.username}
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
                value={formData.password}
                onChange={handleChange}
                InputProps={{
                  disableunderline: "true",
                  className: "form-control",
                }}
              />
            </div>
            <div className="form-group">
              <Person className="icon" />
              <FormControl fullWidth className="form-control">
                <InputLabel htmlFor="role">Role</InputLabel>
                <Select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  label="Role"
                  id="role"
                  disableunderline="true"
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="content-creator">Content Creator</MenuItem>
                  <MenuItem value="landlord">Landlord</MenuItem>
                  <MenuItem value="tenant">Tenant</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Button type="submit" variant="contained" className="btn-custom">
              REGISTER
            </Button>
          </form>

          <Box className="links">
            <Link href="/login" className="text-info">
              Already have an account? Login
            </Link>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Register;
