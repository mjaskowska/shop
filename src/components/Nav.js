import React from 'react'
import './styles/Nav/Nav.css'

const Nav = () => {
   
    return (
        <nav className="nav">
            <section className="nav-list">
                <button className="nav-item">Home</button>
                <button className="nav-item">Shop</button>
                <button className="nav-item">Basket</button>
            </section>
        </nav>
    )
}

export default Nav
