import React, { useState } from "react";

import Categories from "./components/Categories";

const App = () => {
  const [categoriesList, setCategoriesList] = useState([
    { id: 1, name: "Salary" },
    { id: 2, name: "Gifts" },
    { id: 3, name: "Food" },
  ]);

  const validateCategory = (newCategory) => {
    if (newCategory.trim() === "") {
      return false;
    }

    const foundCategory = categoriesList.find(category => category.name === newCategory);

    if (foundCategory !== undefined) {
      return false;
    }

    return true;
  };

  const addCategory = (newCategory) => {
    if (!validateCategory(newCategory)) return false;

    let maxId = 0;

    for (let i = 0; i < categoriesList.length; i++) {
      if (categoriesList[i]["id"] > maxId) {
        maxId = categoriesList[i]["id"];
      }
    }

    let nextId = maxId + 1;

    return setCategoriesList((oldArray) => [
      ...oldArray,
      { id: nextId, name: newCategory },
    ]);
  };

  const deleteCategory = (categoryId) => {
    setCategoriesList((oldCategoriesList) =>
      oldCategoriesList.filter((cat) => cat.id !== categoryId)
    );
  };

  return (
    <div>
      <Categories
        categories={categoriesList}
        addCategory={addCategory}
        deleteCategory={deleteCategory}
      />
    </div>
  );
};

export default App;
