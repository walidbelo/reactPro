import React from "react";
import products from '../ProductsArray';
import '../css/ProductStyle.css'
import '../css/shop.css'
import ShopProduct from "../shopProduct";
import SCnavbar from '../ShopCatNavBar';
export default function Men(){
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
            <p className='SCName'>Hoodies</p>
        </div>
        <div className='sousCategorie'>
            
        <div className='productsArr'>  {products.map((product)=>(
                   <ShopProduct data={product}/>
                )
            )}
        </div>
        </div>



        <div>
            <p className='SCName'>Trousers</p>
        </div>
        <div className='sousCategorie'>
            
        <div className='productsArr'>  {products.map((product)=>(
                   <ShopProduct data={product}/>
                )
            )}
        </div>
        </div>



        <div>
            <p className='SCName'>Shoes</p>
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



        <div>
            <p className='SCName'>Running Sneakers</p>
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