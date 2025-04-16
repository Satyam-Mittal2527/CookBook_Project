import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "../styles/style_initial.css";

const Initial = () => {
  const navigate = useNavigate();
  const fullText =
    "Welcome to our cookbook! Discover flavors and stories in every recipe. Whether you're after quick meals or adventurous dishes, you'll find something delicious here. Let's create amazing meals together! 🍩 🍔 🍹";

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 15);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const handleContinue =() => {
    navigate("/home");
  };

  return (
    <div className="initial-container">
      <img src={logo} alt="Logo" className="logo"></img>
      <div className="typewriter">{text}</div>
      <button className="continue" onClick={handleContinue}>
        CONTINUE
      </button>
    </div>
  );
};

export default Initial;
