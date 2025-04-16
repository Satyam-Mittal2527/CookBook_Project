import React, { useState } from "react";
import axios from "axios";
import "../styles/Register.css"; // Move the styles here or use inline
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/register", formData);
      console.log(res.data);
      alert("Login successful!");
      // Redirect to home or user kitchen, etc.
      navigate("/home");
    } catch (err) {
      alert("Login failed");
      console.error(err);
    }
  };

  return (
    <div className="cont">
      <div className="container">
        <div id="login">LOGIN</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input type="submit" value="Submit" />
        </form>
        <div id="new">
          <span>Don't have an account? </span>
          <span
            style={{ color: "skyblue", cursor: "pointer" }}
            onClick={() => navigate("/new-user")}
          >
            Register
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
