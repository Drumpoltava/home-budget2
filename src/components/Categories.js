import React, { useRef } from "react";

const Categories = ({ categories, addCategory, deleteCategory }) => {
  const newCategoryInputRef = useRef();

  const handleNewCategory = () => {
    const enteredCategory = newCategoryInputRef.current.value;

    newCategoryInputRef.current.value = "";

    addCategory(enteredCategory);
  };

  return (
    <div>
      <div>Categories</div>
      <div>
        {categories.map((category) => {
            return (
                <div>
                    <div key={`category-item-${category.id}`}></div>
                    <span>{category.name}</span>
                    <button onClick={() => {deleteCategory(category.id)}}>+</button>
                </div>
            )
        })}
      </div>
      <div>
        <input ref={newCategoryInputRef} placeholder="Enter new category" />
        <button type="button" onClick={handleNewCategory}>
          +
        </button>
      </div>
    </div>
  );
};

export default Categories;
