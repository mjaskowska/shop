import React, { useState, createContext } from "react";

export const FetchContext = createContext();

export function FetchContextProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [cart, setCart] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const fetchCategories = async () => {
    await fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch(() => console.log("fetching categories error"));
  };
  const fetchItems = async () => {
    await fetch(`https://fakestoreapi.com/products/`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);

        // const newData = data.map(item => {
        //     return {...item, basketCount: 1}
        // })
        // setItems(newData)
      })
      .catch(() => {
        console.log("fetching error");
        setFetchError(true);
      });
    setIsLoading(false);
  };

  const addToCart = (id1) => {
    const data = items.find((item) => {
      return item.id === parseInt(id1);
    });

    if (cart.filter((el) => el.id === parseInt(id1)).length > 0) {
      setCart([...cart]);
    } else {
      setCart([...cart, data]);
    }
  };

  const getCartFromLocalStorage = () => {
    if (localStorage.getItem("cart-items") === null) {
      localStorage.setItem("cart-items", JSON.stringify([]));
    } else {
      if (cart.length > 0) {
        localStorage.setItem("cart-items", JSON.stringify(cart));
      }
      let localCart = JSON.parse(localStorage.getItem("cart-items"));
      setCart(localCart);
    }
  };

  const value = {
    items,
    isLoading,
    fetchError,
    fetchItems,
    cart,
    setCart,
    addToCart,
    filteredItems,
    setFilteredItems,
    searchValue,
    setSearchValue,
    handleSearch,
    fetchCategories,
    categories,
    getCartFromLocalStorage,
  };

  return (
    <FetchContext.Provider value={value}>{children}</FetchContext.Provider>
  );
}
