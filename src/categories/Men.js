import React from "react";
import products from '../ProductsArray';
import '../css/ProductStyle.css'
import '../css/shop.css'
import CateHead from '../CategoriesHeader';
import { Link } from "react-router-dom";

export default function Men(){

    return(<div className='main-shop'>
    <CateHead/>
    
    <div className="mainMen">
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
         <Link to={`/product/${x.productName}`}> <img id="blue" className="blue active"
                src={x.productImage}
                alt="blue" /></Link>
        </div>
       </div>
       <div className="content2">
        <div className="color-price">
        <span className="shoe_name">{x.productName}</span>
            <div className="price">
                <span className="price_num">${x.productPrice}</span>
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


        <div>
            <p className='SCName'>Shorts</p>
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




        <div>
            <p className='SCName'>Hoodies</p>
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



        <div>
            <p className='SCName'>Trousers</p>
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



        <div>
            <p className='SCName'>Shoes</p>
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



        <div>
            <p className='SCName'>Sneakers</p>
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



        <div>
            <p className='SCName'>Running Sneakers</p>
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