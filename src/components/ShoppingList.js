import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchField, setSearchField] = useState("");
  const [submittedData, setSubmittedData] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchField(event.target.value);
    console.log(setSearchField);
  }

  const itemsToDisplay = submittedData.filter((item) => {
    const matchCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const nameIncludesSearch = item.name
      .toLowerCase()
      .includes(searchField.toLowerCase());

    return matchCategory && nameIncludesSearch;
  });

  function addNewItem(newItem) {
    setSubmittedData((prevData) => [...prevData, newItem]);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addNewItem} />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
