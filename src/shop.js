import React from 'react';
import { Link } from 'react-router-dom';
import './css/shop.css'
import './css/ProductStyle.css'
//import image from './images/womenimage.jpg'
import products from './ProductsArray';

export default function Shop(){
    return(
        <div className='main-shop'>
            <div>
            <header>
       <nav className="navbarS">
        
        
        
        <ul className="navbar-menuS">
            <li className="navbar-itemS"><Link to="Home">Men</Link></li>
            <li className="navbar-itemS"><Link to="">Women</Link></li>
            <li className="navbar-itemS"><Link to="">Kids</Link></li>
            <li className="navbar-itemS"><Link to="">Accessories</Link></li>
        </ul>
        </nav>
        </header>
        </div>
        <div>
            <p className='SCName'>T-shirts</p>
        </div>
        <div className='sousCategorie'>
            
          <div className='productsArr'>  {products.map(
                (x,index)=>{
                    return(
                        <div key={index} className="product-card">
         <div className="logo-cart">
            <p>MATALAN</p>
        </div> 
        <div className="content1">
        <div className="main-images">
            <img id="blue" className="blue active"
                src={x['product-image']}
                alt="blue" />
        </div>
       </div>
       <div className="content2">
        <div className="color-price">
        <span className="shoe_name">{x['product-name']}</span>
            <div className="price">
                <span className="price_num">${x['product-price']}</span>
                {/* <span className="price_letter">Nine dollar only</span> */}
            </div>
            </div>
        </div>
        <div className="button">
            <div className="button-layer"></div>
            <button>Add To Cart</button>
        </div>
        
    </div>
                    )
                }
            )}
        </div>
        </div>
        </div>
    )
}
