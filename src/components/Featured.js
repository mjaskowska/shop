import React from "react";
import "./styles/Featured/Featured.css";

const Featured = ({ items, isLoading }) => {
  return (
    <div className="featured">
      <h2 className="featured__title">Featured Products</h2>
      {isLoading ? (<p>Loading...</p>) : (
        <section className="featured__items">
        {items.slice(17).map((item) => (
          <div key={item.id} className="featured__item">
            <img className="featured__image" src={item.image} alt=""></img>
            <p className="featured__item-price">${item.price}</p>
            <p className="featured__item-title">{item.title}</p>
          </div>
        ))}
      </section>
      )}
      
    </div>
  );
};

export default Featured;
