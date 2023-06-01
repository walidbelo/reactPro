import React from "react";

import './css/singleProduct.css'

export default function Product(props){
  
  const {productName,productImage,productPrice}=props;
  
    return(
    <div className="container">
  <div className="left-column">
    <img  src={productImage} alt=""/>
  </div>
  <div className="right-column">
    <div className="product-description">
      <span>MATALAN</span>
      <h1>{productName}</h1>
      <p>Short sleeve T-shirt with a round neck finished in comfortable ribbed trim. Featuring a front print. Made from pleasant 100% cotton.</p>
    </div>
    <div className="product-price">
      <span>{productPrice}$</span>
      {/* <button className="cart-btn" onClick={()=>{addToCart(id)}}>Add to cart{cartItemsAmount>0 && <>({cartItemsAmount})</>}</button> */}
    </div>
  </div>
</div>
)
}