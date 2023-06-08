import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "./shop-context";


export default function ShopProduct(props){
    
    const{addToCart,cartItems}=useContext(ShopContext);
    const {id,productName,productImage,productPrice}=props.data;
    const cartItemsAmount=cartItems[id];
    console.log(productImage)
    return(
        <div  className="product-card">
        <div className="logo-cart">
           <p>MATALAN</p>
       </div> 
       <div className="content1">
      <Link to={`/product/${productName}`}> <div className="main-images">
         <img id="blue" className="blue active"
               src={productImage}
               alt="blue" />
       </div></Link>
      </div>
      <div className="content2">
       <div className="color-price">
       <span className="shoe_name">{productName}</span>
           <div className="price">
               <span className="price_num">${productPrice}</span>
              
           </div>
           </div>
       </div>
       <div className="button">
           <div className="button-layer"></div>
           <button onClick={()=>{addToCart(id)}}>Add To Cart{cartItemsAmount>0 && <>({cartItemsAmount})</>}</button>
       </div>
       
   </div>
    )
}
