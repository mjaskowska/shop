import React, { useContext, useEffect, useState } from "react";
import { FetchContext } from "./contexts/FetchContext";

const Categories = () => {
  const { categories } = useContext(FetchContext);
  const { setFilteredItems,items } = useContext(FetchContext);
  const [currCategory, setCurrCategory] = useState("");

  useEffect(() => {
    
    console.log(currCategory)
    if(currCategory.length === 0){
        setFilteredItems(items)
    }
    else{
        setFilteredItems(
            items.filter((item) => {
              return item.category.toLowerCase() === currCategory.toLowerCase() ;
            })
          );
    }
  }, [currCategory]);

  const handleCategoryChange = (e) => {
    e.preventDefault();
    setCurrCategory("")
    console.log(e.target.value);
    setCurrCategory(e.target.value)
    
  };
  

  return (
    <div className="categories-list">
      <button onClick={handleCategoryChange} value="" className="category">
        ALL
      </button>
      {categories.map((category) => (
        <button
          value={category}
          onClick={handleCategoryChange}
          className="category"
          key={Math.random()}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
