import React from "react";
import { Link } from "react-router-dom";
import './css/shop.css';

export default function SCnavbar(){
    return(
        <nav className="navbarS">
        <ul className="navbar-menuS">
            <li className="navbar-itemS"><Link to="/Men">Men</Link></li>
            <li className="navbar-itemS"><Link to="/Women">Women</Link></li>
            <li className="navbar-itemS"><Link to="/Kids">Kids</Link></li>
            <li className="navbar-itemS"><Link to="/Accessories">Accessories</Link></li>
        </ul>
        </nav>
    )
}