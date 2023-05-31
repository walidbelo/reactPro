import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import image8 from "./images/icons8-shopping-cart-64.png"
import Home from "./Home";
import "./css/HeaderStyle.css";
// import './css/shop.css';
import { useState } from "react";
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
import CheckPanier from "./Cart"

//import Test from "./Test";





function App() {
  

  // function CheckPanier(p){
  //   const [panier, setPanier] = useState([]);
  //     if ( panier.find(x=>x.id===p.id)==null)
  //     setPanier([...panier, p])
  //       else 
  //       alert(" ce produit exite déjà dans votre panier")
  // }
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
                <Link to='/Cart'><button className="search-button" type="submit">Search</button></Link>
            </form>
            <div className="loginArea"><button className="loginB"><Link to="Login">Login</Link></button><Link to="/Cart"><img className="cartlogo" src={image8}  alt="cart logo"/></Link></div>
        </div>
    </nav>
     </header>
     {/* <nav className="navbarS">
        
        
        
        <ul className="navbar-menuS">
            <li className="navbar-itemS"><Link to="/Men">Men</Link></li>
            <li className="navbar-itemS"><Link to="/Women">Women</Link></li>
            <li className="navbar-itemS"><Link to="/Kids">Kids</Link></li>
            <li className="navbar-itemS"><Link to="/Accessories">Accessories</Link></li>
        </ul>
        </nav> */}
     </div>
     <div>
{/* 
     <div className="CartArea">
        <h4>Your Cart:</h4>
        <div>
            {
                panier.map((n)=>{return(<div>
                <li>{n.productName}</li>
                <li>{n.productPrice}</li>
                </div>
               )} )
            }
        </div>
        <div className="total">
          <h3>{panier.reduce ((som, p)=>
       {    return    som+=(p.productPrice) ;},0)}   $</h3>
        </div>
    </div> */}
      <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="/Home" element={<Home /> }/>
      <Route path="/Shop" element={<Shop /> }/>
      <Route path="/Bio" element={<Bio/> }/>
      <Route path="/Register" element={<RegisterPage /> }/>
      <Route path="/Login" element={<LoginPage /> }/>
      <Route path="/Men" element={<Men AjouterAuPanier={CheckPanier}/> }       />
      <Route path="/Women" element={<Women /> }/>
      <Route path="/Kids" element={<Kids /> }/>
      <Route path="/Accessories" element={<Accessories /> }/>
      <Route path="/Cart" element={<Cart /> }/>
      <Route path="/product/:productName" element={<ProductD /> }/>
      </Routes>
      </div>
    </div>
  );
}
export default App;
