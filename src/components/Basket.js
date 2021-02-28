import React, {useContext, useEffect} from 'react'
import { FetchContext } from "./contexts/FetchContext";
import CartItem from './CartItem'
import Arrow from "../assets/long-arrow-alt-left-solid.svg";
import {Link } from 'react-router-dom'

const Basket = () => {
    const { cart, saveCartToLocalStorage, getCartFromLocalStorage } = useContext(FetchContext);

    useEffect(()=>{
        getCartFromLocalStorage()
        saveCartToLocalStorage()
    }, [])

    useEffect(()=>{
        saveCartToLocalStorage()
    }, [cart])

    return (
        <>
        <Link to="/products"><img className="back" src={Arrow} alt=""></img></Link>
        <div>
            <p className="cart-title">Your basket</p>
            <div>
                {cart.map(cartItem => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                ))
                }
            </div>
            <Link to="/products">
            <button className="cart-btn">Continue shopping</button>
            </Link>
           
            <button className="cart-btn">Checkout</button>
        </div>
        </>
    )
}

export default Basket
