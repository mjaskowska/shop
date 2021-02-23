import React, { useContext } from "react";
import "./styles/Featured/Featured.css";
import { FetchContext } from "./contexts/FetchContext";
// import {Link} from 'react-router-dom'

const Featured = () => {
  const { items } = useContext(FetchContext);
  const { isLoading } = useContext(FetchContext);
  const { fetchError } = useContext(FetchContext);

  return (
    <section className="featured">
      <h2 className="featured-title">TRENDING NOW</h2>
      {fetchError ? (
        <p className="featured-info">Sorry, something went wrong</p>
      ) : (
        ""
      )}
      {isLoading ? (
        <p className="featured-info">Loading...</p>
      ) : (
        <section className="item-list">
          {items.slice(0, 4).map((item) => (
            <div key={item.id} className="item">
              <img className="item-image" src={item.image} alt=""></img>
              <div className="item-description">
                <p className="item-price">${item.price}</p>
                <p className="item-title">{item.title}</p>
              </div>
            </div>
          ))}
        </section>
      )}
    </section>
  );
};

export default Featured;
