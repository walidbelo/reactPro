import React from "react";
import { Link } from "react-router-dom";
// import './css/ProductStyle.css'
import './css/singleProduct.css'
//import products from './ProductsArray';
export default function Product(props){
    // const productlist=[products];
    const {productName,productImage,productPrice}=props
    return(
    //     <div>
    //         <div className='productsDArr'> 
    //                     <div  className="productD-card">
    //      <div className="logoD-cart">
    //         <p>MATALAN</p>
    //     </div> 
    //     <div className="content1">
    //     <div className="main-images">
    //        <Link to={`/product/${productName}`}> <img id="blue" className="blue active"
    //             src={productImage}
    //             alt="blue" /></Link>
    //     </div>
    //    </div>
    //    <div className="content2D">
    //     <div className="color-priceD">
    //     <span className="shoe_nameD">{productName}</span>
    //         <div className="priceD">
    //             <span className="price_numD">${productPrice}</span>
    //             {/* <span className="price_letter">Nine dollar only</span> */}
    //         </div>
    //         </div>
    //     </div>
    //     <div className="buttonD">
    //         <div className="button-layerD"></div>
    //         <button>Add To Cart</button>
    //     </div>
        
    // </div>
               
    //     </div>
    //     </div>
    <div class="container">
 
  
  <div class="left-column">
  <Link to={`/product/${productName}`}> <img  src={productImage} alt=""/></Link>
    
  </div>
 
 
  
  <div class="right-column">
 
    
    <div class="product-description">
      <span>Headphones</span>
      <h1>{productName}</h1>
      <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
    </div>
 
    
    <div class="product-configuration">
 
      
      <div class="product-color">
        <span>Color</span>
 
        <div class="color-choose">
          <div>
            <input data-image="red" type="radio" id="red" name="color" value="red" checked />
            <label for="red"><span></span></label>
          </div>
          <div>
            <input data-image="blue" type="radio" id="blue" name="color" value="blue" />
            <label for="blue"><span></span></label>
          </div>
          <div>
            <input data-image="black" type="radio" id="black" name="color" value="black" />
            <label for="black"><span></span></label>
          </div>
        </div>
 
      </div>
 
      
      <div class="cable-config">
        <span>Cable configuration</span>
 
        <div class="cable-choose">
          <button>Straight</button>
          <button>Coiled</button>
          <button>Long-coiled</button>
        </div>
 
        <a href="#">How to configurate your headphones</a>
      </div>
    </div>
 
    
    <div class="product-price">
      <span>{productPrice}$</span>
      <a href="#" class="cart-btn">Add to cart</a>
    </div>
  </div>
</div>
    )
}