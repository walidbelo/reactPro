import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import image8 from "./images/icons8-shopping-cart-64.png"
import Home from "./Home";
import "./css/HeaderStyle.css";
import "./css/CartStyle.css";
import "./App.css";
import Shop from "./shop";
import Bio from './bio'
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import Men from "./categories/Men";
import Women from "./categories/Women";
import Kids from "./categories/Kids";
import Accessories from "./categories/accessories";
import ProductD from "./productDetails";
import Cart from "./Cart";
import ShopContextProvider from "./shop-context";






function App() {
  
  return (
    <div>
      <div>
    <header>
       <nav className="navbar">
        <ul className="navbar-menu">
            <li className="navbar-item"><Link to="/Home">Home</Link></li>
            <li className="navbar-item"><Link to="/Men">Shop</Link></li>
            <li className="navbar-item"><Link to="/Bio">About</Link></li>
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
            <div className="loginArea"><button className="loginB"><Link to="Login">Login</Link></button><Link to="/Cart"><img className="cartlogo" src={image8}  alt="cart logo"/></Link></div>
        </div>
    </nav>
     </header>
    
     </div>
     <div>

    <ShopContextProvider>
      <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="/Home" element={<Home /> }/>
      <Route path="/Shop" element={<Shop /> }/>
      <Route path="/Bio" element={<Bio/> }/>
      <Route path="/Register" element={<RegisterPage /> }/>
      <Route path="/Login" element={<LoginPage /> }/>
      <Route path="/Men" element={<Men/> }       />
      <Route path="/Women" element={<Women /> }/>
      <Route path="/Kids" element={<Kids /> }/>
      <Route path="/Accessories" element={<Accessories /> }/>
      <Route path="/Cart" element={<Cart /> }/>
      <Route path="/product/:productName" element={<ProductD /> }/>
      </Routes>
      </ShopContextProvider>
      </div>
    </div>
  );
}
export default App;
