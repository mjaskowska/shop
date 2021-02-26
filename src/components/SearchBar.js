import React, { useContext, useEffect } from "react";
import { FetchContext } from "./contexts/FetchContext";

const SearchBar = () => {
  const { items, setFilteredItems, searchValue, handleSearch } = useContext(
    FetchContext
  );

  useEffect(() => {
    setFilteredItems(
      items.filter((item) => {
        return item.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
  }, [searchValue]);
  return (
    <section className="search-bar">
      <input
        onChange={handleSearch}
        value={searchValue}
        className="search-input"
        type="text"
        placeholder="Search..."
      ></input>
    </section>
  );
};

export default SearchBar;
