import React from 'react'
import "./css/HeaderStyle.css"
import { Link } from 'react-router-dom'

export default function Header() {

  return (
   
     <header>
       <nav className="navbar">
        <ul className="navbar-menu">
            <li className="navbar-item"><Link to="Home">Home</Link></li>
            <li className="navbar-item"><Link to="">Shop</Link></li>
            <li className="navbar-item"><Link to="">About</Link></li>
        </ul>
        <div className="navbar-brand">
           <div className="logo-shop">
        <p className="texttitle">MATALAN</p>
        </div> 
        </div>
        <div className="navbar-search">
            <form className="search-form" method="GET">
                <input className="search-input" type="text" name="query" placeholder="Search"/>
                <button className="search-button" type="submit">Search</button>
            </form>
        </div>
    </nav>
     </header>

   
  )
}
