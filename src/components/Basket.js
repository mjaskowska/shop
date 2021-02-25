import React, {useContext} from 'react'
import { FetchContext } from "./contexts/FetchContext";
import CartItem from './CartItem'

const Basket = () => {
    const { cart } = useContext(FetchContext);

console.log(cart)
    return (
        <>
        <div>
            <p>Your basket</p>
            <div>
                {cart.map(cartItem => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                ))
                }
            </div>
            <button className="checkout-btn">Checkout</button>
        </div>
        </>
    )
}

export default Basket
