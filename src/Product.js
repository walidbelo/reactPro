import React from "react";
import { Link } from "react-router-dom";
import './css/ProductStyle.css'
//import products from './ProductsArray';
export default function Product(props){
    // const productlist=[products];
    const {productName,productImage,productPrice}=props
    return(
        <div>
            <div className='productsArr'> 
                        <div  className="product-card">
         <div className="logo-cart">
            <p>MATALAN</p>
        </div> 
        <div className="content1">
        <div className="main-images">
           <Link to={`/product/${productName}`}> <img id="blue" className="blue active"
                src={productImage}
                alt="blue" /></Link>
        </div>
       </div>
       <div className="content2">
        <div className="color-price">
        <span className="shoe_name">{productName}</span>
            <div className="price">
                <span className="price_num">${productPrice}</span>
                {/* <span className="price_letter">Nine dollar only</span> */}
            </div>
            </div>
        </div>
        <div className="button">
            <div className="button-layer"></div>
            <button>Add To Cart</button>
        </div>
        
    </div>
               
        </div>
        </div>
    )
}