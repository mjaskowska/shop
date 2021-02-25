import React, {useContext, useState} from 'react'
import { FetchContext } from './contexts/FetchContext'
import './styles/Basket/Basket.css'

const CartItem = ({cartItem}) => {
    const {cart, setCart} = useContext(FetchContext)
    const [count, setCount] = useState(1)

    const decrement = () => {
        if(count > 1){
            setCount(prevCount  => prevCount - 1)
        }  
        else {
            console.log('remove item from cart')
            const filteredCart = cart.filter(item => item.id !== cartItem.id)
            setCart(filteredCart)
        }      
    }
    const increment = () => {
        setCount(prevCount  => prevCount + 1)
    }


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
