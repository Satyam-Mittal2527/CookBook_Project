import React, { useState } from "react";
import axios from "axios"; // Make sure axios is installed
import "../styles/NewUser.css"; // Move your styles into this file or use styled-components

const NewUser = () => {
  const [formData, setFormData] = useState({
    username: "",
    email_id: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password must match");
      return;
    }

    try {
      const res = await axios.post("/register", {
        username: formData.username,
        email_id: formData.email_id,
        password: formData.password,
      });
      alert("Registration successful!");
      // You can redirect or clear the form
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  return (
    <div className="cont">
      <div className="container">
        <div id="login">REGISTER</div>
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
            type="text"
            name="email_id"
            placeholder="Email Id"
            value={formData.email_id}
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default NewUser;
