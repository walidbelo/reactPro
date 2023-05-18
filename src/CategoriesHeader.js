import React from "react";
import './css/shop.css'
import { Link } from 'react-router-dom';
export default function CateHead(){
    return(
        <div>
            <header>
       <nav className="navbarS">
        
        
        
        <ul className="navbar-menuS">
            <li className="navbar-itemS"><Link to="/Men">Men</Link></li>
            <li className="navbar-itemS"><Link to="/Women">Women</Link></li>
            <li className="navbar-itemS"><Link to="/Kids">Kids</Link></li>
            <li className="navbar-itemS"><Link to="/Accessories">Accessories</Link></li>
        </ul>
        </nav>
        </header>
        </div>
    )
}