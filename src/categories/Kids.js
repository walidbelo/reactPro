import React from "react";
import products from '../ProductsArray';
import '../css/ProductStyle.css'
import '../css/shop.css';
import SCnavbar from '../ShopCatNavBar';
import ShopProduct from "../shopProduct";

//import CateHead from '../CategoriesHeader';

export default function Kids(){

    return(<div className='main-shop'>
    <SCnavbar/>
    
    <div className="mainMen">
        <div>
            <p className='SCName'>T-shirts</p>
        </div>
        <div className='sousCategorie'>
            
        <div className='productsArr'>  {products.map((product)=>(
                   <ShopProduct data={product}/>
                )
            )}
        </div>
        </div>


        <div>
            <p className='SCName'>Shorts</p>
        </div>
        <div className='sousCategorie'>
            
        <div className='productsArr'>  {products.map((product)=>(
                   <ShopProduct data={product}/>
                )
            )}
        </div>
        </div>




        <div>
            <p className='SCName'>Sets</p>
        </div>
        <div className='sousCategorie'>
            
        <div className='productsArr'>  {products.map((product)=>(
                   <ShopProduct data={product}/>
                )
            )}
        </div>
        </div>



        <div>
            <p className='SCName'>Dress</p>
        </div>
        <div className='sousCategorie'>
            
        <div className='productsArr'>  {products.map((product)=>(
                   <ShopProduct data={product}/>
                )
            )}
        </div>
        </div>



        <div>
            <p className='SCName'>Sneakers</p>
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