import React, { useContext, useEffect } from "react";
import { FetchContext } from "./contexts/FetchContext";
import "./styles/Products/Products.css";
import {Link } from 'react-router-dom'


const Products = () => {
  const { items } = useContext(FetchContext);
  const { isLoading } = useContext(FetchContext);
  const { fetchError } = useContext(FetchContext);
  const { fetchItems } = useContext(FetchContext);
  const { addToCart } = useContext(FetchContext);


  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <section className="products">
      <h2 className="title">PRODUCTS</h2>
      {fetchError ? <p className="info">Sorry, something went wrong</p> : ""}
      {isLoading ? (
        <p className="info">Loading...</p>
      ) : (
        <section className="products-container">
          <section className="search-bar">
            <input className="search-input" type="text" placeholder="Search..."></input>
          </section>
          <section className="item-list">
            {items.map((item) => (
              
              
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
