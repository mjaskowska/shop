import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./styles/Nav/Nav.css";
import Hamburger from "../assets/bars-solid.svg";
import Close from "../assets/times-circle-regular.svg";
import Basket from "../assets/shopping-cart-solid.svg";

const Nav = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu)
    }


  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/">SHOP</Link>
        </h1>
      </div>
      <div className="hamburger" onClick={handleToggleMenu}>
        <img src={Hamburger} alt="menu"></img>
      </div>
      <nav >
        <ul className={toggleMenu ? "nav toggle-menu" : "nav"}>
          <li className="nav-item">
            <Link to="/">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/products">PRODUCTS</Link>
          </li>
          <li className="nav-item">
            <Link to="/register">LOGIN/REGISTER</Link>
          </li>
         
          <li className="menu-close-btn" onClick={handleToggleMenu}>
            <img src={Close} alt="close"></img>
          </li>
        </ul>
      </nav>
      <div className="nav-basket">
        <Link to="/basket">
          <img src={Basket} alt="menu"></img>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
