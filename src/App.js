import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Home from "./Home";
import "./css/HeaderStyle.css";
import "./App.css"
import Shop from "./shop";
//import Test from "./Test";





function App() {
  return (
    <div>
      <div>
    <header>
      
       <nav className="navbar">
        
        <ul className="navbar-menu">
            <li className="navbar-item"><Link to="Home">Home</Link></li>
            <li className="navbar-item"><Link to="/Shop">Shop</Link></li>
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
     </div>
     <div>
      <Routes>
      <Route path="/" element={<LandingPage /> }       />
      <Route path="/Home" element={<Home /> }       />
      <Route path="/Shop" element={<Shop /> }       />
   
      </Routes></div>
    </div>
  );
}

export default App;
