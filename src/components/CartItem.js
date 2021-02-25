import React, { useContext} from 'react'
import { FetchContext } from './contexts/FetchContext'
import './styles/Basket/Basket.css'

const CartItem = ({cartItem}) => {
    const {count, decrement, increment} =useContext(FetchContext)


    return (
        <div className="cart-item">
            <div className="img-section">
            <img className="cart-item-img" src={cartItem.image} alt=""></img>
            <p className="cart-item-title">{cartItem.title}</p>
            </div>
            
            <div>
            <p className="cart-item-price">${cartItem.price}</p>
            <div className="counter">
                <button className="decrement" onClick={decrement}>-</button>
                <span className="count">{count}</span>
                <button className="increment" onClick={increment}>+</button>
            </div>
            </div>
           



        </div>
    )
}

export default CartItem
