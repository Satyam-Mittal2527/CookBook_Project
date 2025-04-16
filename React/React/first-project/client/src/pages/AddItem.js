import React, { useState, useEffect } from "react";
import axios from "axios"; // install via npm if not already: npm install axios
import "../styles/AddItem.css"; // adjust path as needed

const AddItem = () => {
  const [form, setForm] = useState({
    title: "",
    ingrediants: "",
    instructions: "",
  });

  const [recipes, setRecipes] = useState([]);

  // Fetch existing recipes on load (optional, if backend supports it)
  useEffect(() => {
    axios
      .get("/addItems") // Optional: GET route to get existing items
      .then((res) => setRecipes(res.data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/addItems", form);
      setRecipes((prev) => [...prev, res.data]); // Add new recipe to the list
      setForm({ title: "", ingrediants: "", instructions: "" }); // Reset form
    } catch (err) {
      console.error("Add error:", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container_input">
          <label htmlFor="title">RECIPE NAME</label>
          <input
            type="text"
            id="value_item"
            name="title"
            value={form.title}
            placeholder="Recipe Name"
            onChange={handleChange}
          />

          <label htmlFor="ingrediants">INGREDIENTS REQUIRED</label>
          <input
            type="text"
            id="value_item"
            name="ingrediants"
            value={form.ingrediants}
            placeholder="Add New Recipe ingredients"
            onChange={handleChange}
          />

          <label htmlFor="instructions">INSTRUCTIONS</label>
          <input
            type="text"
            id="value_item"
            name="instructions"
            value={form.instructions}
            placeholder="Add New Recipe instructions"
            onChange={handleChange}
          />

          <input type="submit" value="Add" id="newItem" />
        </div>
      </form>

      {/* Render recipes list */}
      <div className="container">
        {recipes.length > 0 &&
          recipes.map((item, i) => (
            <div id="Items" key={i}>
              <div id="title">{item.title}</div>
              <div id="ingrediants">{item.ingrediants}</div>
              <div id="instructions">{item.instructions}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AddItem;
