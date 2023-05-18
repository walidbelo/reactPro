import React from 'react';
import { Link } from 'react-router-dom';
import "./css/HeaderStyle.css";
import "./css/MainStyle.css";
import "./css/BrandsStyle.css";
import './css/Home.css';
import data from "./BrandsArray.js";
export default function Test() {
    console.log(data);
    return (
        <div className='all'>
            <div>
            <header>
       <nav className="navbar">
        
        
        
        <ul className="navbar-menu">
            <li className="navbar-item"><Link to="">Home</Link></li>
            <li className="navbar-item"><Link to="">About</Link></li>
            <li className="navbar-item"><Link to="">Contact</Link></li>
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
            </div>
            <div>
            <section id='categories-section'>
       <Link class="main-container">
            <Link to="/explore-products" className="explore"></Link>
            <Link to="/men-section" className="men"></Link>
            <Link to="/women-section" className="women"></Link>
            <Link to="/kids-section" className="kids"></Link>
            <Link to="/accessories-section" className="access"></Link>
        </Link>
    </section>
            </div>
            <div>
            <section id="brands-section">
            <h2><i>BRANDS</i> </h2>

      <div className="brands">

{data.map((x, index) => { return ( <div key={index}>
              <img src={x.logo} alt="err" />
              <h4>{x.BrandName}</h4>
            </div>
            );
        })}

      </div>
    </section>
            </div>
        </div>
    )};