import React, { useContext, useEffect } from "react";
import { FetchContext } from "./contexts/FetchContext";
import "./styles/Products/Products.css";
import {Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import Categories from './Categories'


const Products = () => {
  const { isLoading } = useContext(FetchContext);
  const { fetchError } = useContext(FetchContext);
  const { fetchItems } = useContext(FetchContext);
  const { fetchCategories } = useContext(FetchContext);
  const { addToCart } = useContext(FetchContext);
  const { filteredItems } = useContext(FetchContext);


  useEffect(() => {
    fetchItems();
    fetchCategories()
  }, []);

  return (
    <section className="products">
      <h2 className="title">PRODUCTS</h2>
      {fetchError ? <p className="info">Sorry, something went wrong</p> : ""}
      {isLoading ? (
        <p className="info">Loading...</p>
      ) : (
        <section className="products-container">
          <Categories />
         <SearchBar />
          <section className="item-list">
            {filteredItems.map((item) => (
              
              
              <div key={item.id} className="item">
                <img className="item-image" src={item.image} alt=""></img>
                <div className="item-details">
                <p className="item-price">${item.price}</p>
                  <p className="item-title">{item.title}</p>
                  <Link to="/basket">
                  <button onClick={(e)=> {
                    
                    addToCart(item.id)
                  }} className="add-btn">ADD TO BASKET</button>
                  </Link>
                  
                  
                </div>
                
              </div>
            ))}
          </section>
        </section>
      )}
    </section>
  );
};

export default Products;
