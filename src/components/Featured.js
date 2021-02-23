import React from "react";
import "./styles/Featured/Featured.css";
// import {FetchContext} from './contexts/FetchContext'
// import {Link} from 'react-router-dom'

const Featured = () => {
  // const {items} = useContext(FetchContext)
  // const {isLoading} = useContext(FetchContext)
  // const {fetchError} = useContext(FetchContext)

  return (
    <div className="featured">
      {/* <h2 className="featured__title">Featured Products</h2>
      {fetchError ? (<p>Sorry, something went wrong</p>):("")}
      {isLoading ? (<p>Loading...</p>) : (
        <section className="item-list">
        {
        items.slice(17).map((item) => (
          <div key={item.id} className="item">
            <Link to={`/products/${item.id}`} >
            <img className="item__image" src={item.image} alt=""></img>
            </Link>
            <Link to={`/products/${item.id}`} >
            <p className="item__title">{item.title}</p>
            </Link>
            
            <p className="item__price">${item.price}</p>
           
          </div>
        ))
        }
      </section>
      )} */}
      featured products
      
    </div>
  );
};

export default Featured;
