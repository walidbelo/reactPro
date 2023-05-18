import React from "react";
import products from '../ProductsArray';
import '../css/ProductStyle.css'
import '../css/shop.css'
import CateHead from '../CategoriesHeader';

export default function Accessories(){

    return(<div className='main-shop'>
    <CateHead/>
    
    <div className="mainMen">
        <div>
            <p className='SCName'>Accessories</p>
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
        </div>
    )
}