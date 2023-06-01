import React from "react";
import products from '../ProductsArray';
import '../css/ProductStyle.css'
import '../css/shop.css'
import SCnavbar from '../ShopCatNavBar';
import ShopProduct from "../shopProduct";


export default function Accessories(){

    return(<div className='main-shop'>
    <SCnavbar/>
    
    <div className="mainMen">
        <div>
            <p className='SCName'>Accessories</p>
        </div>
        <div className='sousCategorie'>
            
        <div className='productsArr'>  {products.map((product)=>(
                   <ShopProduct data={product}/>
                )
            )}
        </div>
        </div>


        
        </div>
        </div>
    )
}