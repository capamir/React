import React, { useState } from "react";
import "./form.css";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [qty, setQty] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, qty, packed: false, id: Date.now() };
    onAddItems(newItem);
    clearStates();
  }

  function clearStates() {
    setDescription("");
    setQty(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
        {/* [1, 2, 3, ..., 20] */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
