import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [nameInput, setNameInput] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: nameInput,
      category: itemCategory,
    };
    onItemFormSubmit(newItem);
    setNameInput("");
    setItemCategory("Produce");
    console.log(newItem);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={itemCategory}
          onChange={(e) => setItemCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
