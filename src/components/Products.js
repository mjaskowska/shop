import React, {useContext, useEffect} from "react";
import {FetchContext} from './contexts/FetchContext'
import './styles/Products/Products.css'


const Products = () => {

    const {items} = useContext(FetchContext)
    const {isLoading} = useContext(FetchContext)
    const {fetchError, fetchItems} = useContext(FetchContext)

    useEffect(() => {
    fetchItems()
    }, [])

     return (
        <>
        <div>
      {fetchError ? (<p>Sorry, something went wrong</p>):("")}
      {isLoading ? (<p>Loading...</p>) : (
        <section className="item-list">
        {items.map((item) => (
          <div key={item.id} className="item">
            <img className="item__image" src={item.image} alt=""></img>
            <p className="item__price">${item.price}</p>
            <p className="item__title">{item.title}</p>
            
          </div>
        ))}
      </section>
    
      )}
      
        </div>
        </>
    )
}

export default Products
