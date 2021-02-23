import React from "react";
// import {FetchContext} from './contexts/FetchContext'
// import './styles/Products/Products.css'
// import {Link} from 'react-router-dom'


const Products = () => {


     return (
        <>
        {/* <div>
      {fetchError ? (<p>Sorry, something went wrong</p>):("")}
      {isLoading ? (<p>Loading...</p>) : (
        <section className="item-list">
        {items.map((item) => (
          
          <div key={item.id} className="item">
            <Link to={`/products/${item.id}`} >
            <img className="item__image" src={item.image} alt=""></img>
            </Link>
            <p className="item__price">${item.price}</p>
            <p className="item__title">{item.title}</p>
            
          </div>
          
        ))}
      </section>
    
      )}
      
        </div> */}
        <p>products list page</p>
        </>
    )
}

export default Products
