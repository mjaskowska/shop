import React from 'react'
import {Link} from 'react-router-dom'
import './styles/Nav/Nav.css'

const Nav = () => {
   
    return (
        <nav className="nav">
            <section className="nav-list">
                <Link to="/">
                <button className="nav-item">Home</button>
                </Link>
                <Link to="/products">
                <button className="nav-item">Products</button>
                </Link>
                <Link to="/login">
                <button className="nav-item">Login</button>
                </Link>
                <Link to="/basket">
                <button className="nav-item">Basket</button>
                </Link>
                
                
                
            </section>
        </nav>
    )
}

export default Nav
